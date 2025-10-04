use axum::Json;
use serde::Serialize;

/// Minimal recipe summary for scaffolding API contract tests.
#[derive(Serialize)]
pub struct RecipeSummary {
  pub id: String,
  pub title: String,
}

pub async fn list() -> Json<Vec<RecipeSummary>> {
  Json(vec![RecipeSummary {
    id: "placeholder".into(),
    title: "Community Chili".into(),
  }])
}
