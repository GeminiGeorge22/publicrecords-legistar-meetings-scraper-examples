#!/usr/bin/env bash
# Call publicrecords/legistar-meetings-scraper on YOUR Apify account. Set APIFY_TOKEN. Do not commit the token.
set -euo pipefail
: "${APIFY_TOKEN:?Set APIFY_TOKEN to your own Apify token}"
curl -sS -X POST \
  "https://api.apify.com/v2/acts/publicrecords~legistar-meetings-scraper/run-sync-get-dataset-items?token=${APIFY_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{"clients": ["seattle", "boston", "columbus"], "dateFrom": "2026-11-01", "dateTo": "2026-11-24", "maxItems": 200, "resource": "events"}'
