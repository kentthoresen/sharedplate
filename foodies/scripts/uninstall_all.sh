#!/usr/bin/env bash
set -Eeuo pipefail
LOG_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/logs" && pwd)"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/uninstall-all-$(date +%F-%H%M%S).log"

info(){ echo "[INFO] $*" | tee -a "$LOG_FILE"; }
run(){ echo "\n$ $*" >>"$LOG_FILE"; "$@" >>"$LOG_FILE" 2>&1; }

info "Stopping infrastructure"
run docker compose -f infra/docker/docker-compose.yml --env-file infra/docker/.env down --volumes
info "Uninstall complete"
