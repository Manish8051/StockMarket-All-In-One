/**
 * Writes minimal valid PNG files for any referenced assets missing from public/.
 * Replace these with real design assets when available.
 */
const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "..", "public");
const tinyPng = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==",
  "base64"
);

const required = [
  "adobestock-294173303-preview-1@2x.png",
  "adobestock-286454675-preview-1@2x.png",
  "screenshot-20241218-172412-1@2x.png",
  "photo-11@2x.png",
  "photo-20241214-234849-1@2x.png",
  "photo-20241214-234856-1@2x.png",
  "adobestock-130143481-preview-1@2x.png",
  "page-6@3x.png",
  "photo-20241214-234910-1@2x.png",
  "dalle-20241212-173604--a-sleek-and-modern-logo-for-a-website-named-stockmarket-all-in-one-the-logo-includes-an-abstract-graphic-element-representing-growth-and-stock-mark-3@2x.png",
  "dalle-20241212-173604--a-sleek-and-modern-logo-for-a-website-named-stockmarket-all-in-one-the-logo-includes-an-abstract-graphic-element-representing-growth-and-stock-mark-1@2x.png",
  "page-2@3x.png",
  "photo-20241214-234849@2x.png",
  "screenshot-104-1@2x.png",
  "screenshot-104-2@2x.png",
  "screenshot-115-1@2x.png",
  "1-rankdelta-11@2x.png",
  "2-rankdelta-1@2x.png",
  "screenshot-373-1@2x.png",
  "screenshot-95-1@2x.png",
  "photo-1@2x.png",
  "home-page@3x.png",
  "screenshot-412-1@2x.png",
  "super-trend-1@2x.png",
  "rsi-1@2x.png",
  "macd-1@2x.png",
  "bollinger-bands-1@2x.png",
  "1-rankdelta-1@2x.png",
  "volume-and-vwap-1@2x.png",
];

fs.mkdirSync(publicDir, { recursive: true });
for (const name of required) {
  const dest = path.join(publicDir, name);
  if (!fs.existsSync(dest)) {
    fs.writeFileSync(dest, tinyPng);
  }
}
