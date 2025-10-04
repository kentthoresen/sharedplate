use axum::{routing::get, Router};

use crate::{config::AppConfig, handlers, handlers::auth::AuthState};

/// Compose all HTTP routes under a versioned prefix.
pub fn register_routes(config: AppConfig) -> Router {
  let state = AuthState(config);
  Router::new().nest(
    "/v1",
    Router::new()
      .route("/auth/verify", get(handlers::auth::verify))
      .route("/recipes", get(handlers::recipes::list))
      .route("/feed", get(handlers::feed::personalized))
      .with_state(state),
  )
}
