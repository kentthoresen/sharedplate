use axum::{http::StatusCode, response::{IntoResponse, Response}};
use thiserror::Error;

/// Central error type so handlers can use `?` without bespoke conversions.
#[derive(Debug, Error)]
pub enum ApiError {
  #[error("configuration missing: {0}")]
  Config(String),
  #[error("http request failed")]
  Http(#[from] reqwest::Error),
  #[error("server error")]
  Server,
}

impl IntoResponse for ApiError {
  fn into_response(self) -> Response {
    let status = match self {
      ApiError::Config(_) => StatusCode::INTERNAL_SERVER_ERROR,
      ApiError::Http(_) => StatusCode::BAD_GATEWAY,
      ApiError::Server => StatusCode::INTERNAL_SERVER_ERROR,
    };
    (status, self.to_string()).into_response()
  }
}

impl From<hyper::Error> for ApiError {
  fn from(_: hyper::Error) -> Self {
    ApiError::Server
  }
}
