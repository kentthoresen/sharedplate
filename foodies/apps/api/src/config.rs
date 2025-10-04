use crate::errors::ApiError;
use std::env;
use tracing_subscriber::{fmt, EnvFilter};

/// Application configuration loaded from environment variables. Keeping this
/// struct simple ensures new contributors immediately see required env vars.
#[derive(Clone)]
pub struct AppConfig {
  pub port: u16,
  pub jwks_url: String,
}

impl AppConfig {
  /// Construct configuration from the environment with helpful error messages.
  pub fn from_env() -> Result<Self, ApiError> {
    let port = env::var("PORT").unwrap_or_else(|_| "8080".into()).parse().map_err(|_| ApiError::Config("PORT".into()))?;
    let jwks_url = env::var("JWKS_URL").map_err(|_| ApiError::Config("JWKS_URL".into()))?;
    Ok(Self { port, jwks_url })
  }
}

/// Initialize tracing subscriber with env filter support.
pub fn init_tracing() {
  let filter = EnvFilter::try_from_default_env().unwrap_or_else(|_| EnvFilter::new("info"));
  fmt().with_env_filter(filter).init();
}
