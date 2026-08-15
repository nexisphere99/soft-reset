#!/usr/bin/env bash
# SOFT_RESET build script   compiles the .twee source tree into a single
# playable HTML file via Tweego.
#
# The output HTML is written OUTSIDE this folder, as a sibling of
# soft-reset/ and assets/   that keeps relative image paths in the game
# (e.g. "assets/characters/mc-male/side_bar.png") correct without a
# leading "../", and keeps a stray build/ folder from ever needing to
# exist inside the source tree.
set -euo pipefail

cd "$(dirname "$0")"

TWEEGO_BIN="${TWEEGO_BIN:-tweego}"
OUT="${1:-../soft-reset-compiled.html}"

"$TWEEGO_BIN" \
	-o "$OUT" \
	--format=sugarcube-2 \
	soft-reset.twee \
	css \
	js \
	passages

echo "Built: $OUT"
