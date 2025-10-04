//! Main entrypoint for the Love of Food API service. We intentionally keep the
//! file small: initialize tracing, build the router, and start the Axum server.

use axum::{routing::get, Router};
use std::net::SocketAddr;
use tracing::info;

mod auth;
mod config;
mod errors;
mod handlers;
mod routes;
mod storage;
mod ws;

use crate::{config::AppConfig, routes::register_routes};

#[tokio::main]
async fn main() -> Result<(), errors::ApiError> {
  config::init_tracing();
  let config = AppConfig::from_env()?;
  let port = config.port;

  let app = Router::new()
    .merge(register_routes(config))
    .route("/health", get(|| async { "ok" }));

  let addr: SocketAddr = format!("0.0.0.0:{}", port).parse().unwrap();
  info!("starting api", %addr);
  axum::Server::bind(&addr).serve(app.into_make_service()).await?;
  Ok(())
}
