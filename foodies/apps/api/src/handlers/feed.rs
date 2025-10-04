use axum::Json;
use serde::Serialize;

/// Response payload describing feed entries. In the full implementation this
/// will be backed by SurrealDB queries.
#[derive(Serialize)]
pub struct FeedEntry {
  pub id: String,
  pub reason: String,
  pub title: String,
}

pub async fn personalized() -> Json<Vec<FeedEntry>> {
  Json(vec![FeedEntry {
    id: "sample".into(),
    reason: "Because you cooked Mushroom Tacos".into(),
    title: "Farmer's Market Salsa Fresca".into(),
  }])
}
