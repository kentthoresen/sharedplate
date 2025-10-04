#!/usr/bin/env bash
set -Eeuo pipefail
LOG_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/logs" && pwd)"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/install-all-$(date +%F-%H%M%S).log"

info(){ echo "[INFO] $*" | tee -a "$LOG_FILE"; }
err(){ echo "[ERROR] $*" | tee -a "$LOG_FILE" >&2; }
run(){ echo "\n$ $*" >>"$LOG_FILE"; "$@" >>"$LOG_FILE" 2>&1; }

info "Starting combined installation"

REQUIRED_CMDS=(rustc cargo node pnpm docker surreal)
for cmd in "${REQUIRED_CMDS[@]}"; do
  if ! command -v "$cmd" >/dev/null 2>&1; then
    err "Missing dependency: $cmd"
    exit 1
  fi
  info "Found $cmd $("$cmd" --version 2>/dev/null || true)"
done

if [[ ! -f infra/docker/.env ]]; then
  cp infra/docker/.env.example infra/docker/.env
  info "Created infra/docker/.env from example"
fi

run docker compose -f infra/docker/docker-compose.yml --env-file infra/docker/.env up -d
info "Infrastructure containers started"

pushd apps/web >/dev/null
run ./install.sh
popd >/dev/null

pushd apps/api >/dev/null
run ./install.sh
popd >/dev/null

if [[ -x scripts/seed.sh ]]; then
  run ./scripts/seed.sh
fi

run ./scripts/health_check.sh

info "Install finished. Logs: $LOG_FILE"
