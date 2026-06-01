#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
STATIC="$ROOT/.vercel/output/static"
PORT="${PORT:-4323}"
LABEL="${1:-run}"

cd "$ROOT"
npm run build >/dev/null

# Kill any existing server on this port
lsof -ti:"$PORT" | xargs kill -9 2>/dev/null || true

python3 -m http.server "$PORT" --directory "$STATIC" >/dev/null 2>&1 &
SERVER_PID=$!
sleep 1

npx lighthouse "http://127.0.0.1:${PORT}/new-manager-essentials/" \
  --only-categories=performance \
  --form-factor=mobile \
  --screenEmulation.mobile=true \
  --throttling-method=simulate \
  --output=json \
  --output-path="/tmp/lh-${LABEL}.json" \
  --chrome-flags="--headless --no-sandbox" \
  --quiet

kill "$SERVER_PID" 2>/dev/null || true

node -e "
const r=require('/tmp/lh-${LABEL}.json');
const a=r.audits;
console.log('=== ${LABEL} ===');
console.log('Performance:', Math.round(r.categories.performance.score*100));
console.log('LCP:', a['largest-contentful-paint'].displayValue);
console.log('CLS:', a['cumulative-layout-shift'].displayValue);
console.log('TBT:', a['total-blocking-time'].displayValue);
const preload=[...require('fs').readFileSync('${STATIC}/new-manager-essentials/index.html','utf8').matchAll(/rel=\"preload\" href=\"([^\"]*nme[^\"]*)\"/g)].map(m=>m[1]);
console.log('Preloads:', preload.join(' | ') || 'none');
const mobile=a['lcp-discovery-insight']?.details?.items?.[1]?.snippet||'';
console.log('LCP img:', mobile.slice(0,180));
"
