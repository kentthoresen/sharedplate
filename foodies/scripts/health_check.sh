#!/usr/bin/env bash
set -Eeuo pipefail
LOG_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/logs" && pwd)"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/health-$(date +%F-%H%M%S).log"

info(){ echo "[INFO] $*" | tee -a "$LOG_FILE"; }
run(){ echo "\n$ $*" >>"$LOG_FILE"; "$@" >>"$LOG_FILE" 2>&1; }

info "Checking service health"

APPS=("http://localhost:3000" "http://localhost:8080/health")
for url in "${APPS[@]}"; do
  if curl -sf "$url" >/dev/null; then
    info "Healthy: $url"
  else
    info "Unhealthy: $url"
  fi
done

info "Health check complete"
