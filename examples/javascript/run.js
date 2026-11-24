// Call publicrecords/legistar-meetings-scraper on YOUR Apify account. Set APIFY_TOKEN. Do not commit the token.
const TOKEN = process.env.APIFY_TOKEN;
if (!TOKEN) {
  console.error("Set APIFY_TOKEN to your own Apify token");
  process.exit(1);
}
const url = `https://api.apify.com/v2/acts/publicrecords~legistar-meetings-scraper/run-sync-get-dataset-items?token=${TOKEN}`;
const payload = {
  "clients": [
    "seattle",
    "boston",
    "columbus"
  ],
  "dateFrom": "2026-11-01",
  "dateTo": "2026-11-24",
  "maxItems": 200,
  "resource": "events"
};

const res = await fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload),
});
if (!res.ok) {
  console.error(await res.text());
  process.exit(1);
}
const items = await res.json();
console.log(JSON.stringify(Array.isArray(items) ? items.slice(0, 5) : items, null, 2));
console.log("count", Array.isArray(items) ? items.length : "n/a");
