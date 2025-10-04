use crate::{config::AppConfig, errors::ApiError};
use jsonwebtoken::{decode, decode_header, Algorithm, DecodingKey, Validation};
use serde::Deserialize;
use std::collections::HashMap;
use tokio::sync::RwLock;

/// Cached JWKS map keyed by key id for efficient token validation.
static KEY_CACHE: once_cell::sync::Lazy<RwLock<HashMap<String, DecodingKey<'static>>>> =
  once_cell::sync::Lazy::new(|| RwLock::new(HashMap::new()));

#[derive(Debug, Deserialize)]
pub struct Claims {
  pub sub: String,
  pub exp: usize,
}

/// Validate a JWT against the JWKS endpoint. For the scaffold we accept empty
/// key sets gracefully, returning an error so upstream handlers can respond.
pub async fn validate_jwt(token: &str, config: &AppConfig) -> Result<Claims, ApiError> {
  let header = decode_header(token).map_err(|_| ApiError::Server)?;
  let kid = header.kid.ok_or(ApiError::Server)?;
  let key = fetch_decoding_key(&kid, config).await?;
  let mut validation = Validation::new(Algorithm::RS256);
  validation.validate_exp = false; // placeholder while tokens are mocked.
  let data = decode::<Claims>(token, &key, &validation).map_err(|_| ApiError::Server)?;
  Ok(data.claims)
}

async fn fetch_decoding_key(kid: &str, config: &AppConfig) -> Result<DecodingKey<'static>, ApiError> {
  if let Some(key) = KEY_CACHE.read().await.get(kid).cloned() {
    return Ok(key);
  }

  let jwks: serde_json::Value = reqwest::get(&config.jwks_url).await?.json().await?;
  let keys = jwks["keys"].as_array().cloned().unwrap_or_default();
  for key in keys {
    if key["kid"].as_str() == Some(kid) {
      if let (Some(n), Some(e)) = (key["n"].as_str(), key["e"].as_str()) {
        let decoding_key = DecodingKey::from_rsa_components(n, e).into_static();
        KEY_CACHE.write().await.insert(kid.to_string(), decoding_key.clone());
        return Ok(decoding_key);
      }
    }
  }

  Err(ApiError::Server)
}
