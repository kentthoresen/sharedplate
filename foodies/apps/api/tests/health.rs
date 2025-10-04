use axum_test::TestServer;
use love_of_food_api::routes::register_routes;
use love_of_food_api::config::AppConfig;

#[tokio::test]
async fn health_endpoint_returns_ok() {
  let config = AppConfig { port: 8080, jwks_url: "http://localhost".into() };
  let app = register_routes(config);
  let server = TestServer::new(app).unwrap();
  let response = server.get("/v1/feed").await;
  response.assert_status_ok();
}
