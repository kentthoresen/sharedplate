#!/usr/bin/env bash
set -Eeuo pipefail
LOG_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/logs" && pwd)"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/seed-$(date +%F-%H%M%S).log"

info(){ echo "[INFO] $*" | tee -a "$LOG_FILE"; }

info "Seeding placeholder data (no-op for scaffold)"
