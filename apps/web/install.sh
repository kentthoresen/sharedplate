#!/usr/bin/env bash
set -Eeuo pipefail
LOG_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../scripts/logs" && pwd)"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/web-install-$(date +%F-%H%M%S).log"

info(){ echo -e "[INFO] $*"; }
err(){ echo -e "[ERROR] $*" >&2; }
run(){ echo "$ $*" >>"$LOG_FILE"; "$@" >>"$LOG_FILE" 2>&1; }

info "Starting install for web"

if [[ ! -f .env ]]; then
  cp .env.example .env || true
  info "Created .env from example. Please review values."
fi

if ! command -v pnpm >/dev/null 2>&1; then
  err "pnpm is required. Install via npm install -g pnpm."
  exit 1
fi

run pnpm install --frozen-lockfile || pnpm install

info "Install finished. See log: $LOG_FILE"
