use axum::{extract::State, http::HeaderMap, Json};
use serde::Serialize;

use crate::{auth, config::AppConfig, errors::ApiError};

#[derive(Clone)]
pub struct AuthState(pub AppConfig);

#[derive(Serialize)]
pub struct VerifyResponse {
  message: String,
}

/// Simple verification endpoint ensures JWT parsing works end-to-end.
pub async fn verify(State(state): State<AuthState>, headers: HeaderMap) -> Result<Json<VerifyResponse>, ApiError> {
  let token = headers
    .get(axum::http::header::AUTHORIZATION)
    .and_then(|value| value.to_str().ok())
    .and_then(|value| value.strip_prefix("Bearer "))
    .ok_or(ApiError::Server)?;

  let claims = auth::validate_jwt(token, &state.0).await?;

  Ok(Json(VerifyResponse {
    message: format!("token valid for {}", claims.sub),
  }))
}
