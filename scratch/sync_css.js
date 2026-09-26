const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '..', 'css', 'components.css');
const publicCssPath = path.join(__dirname, '..', 'public', 'css', 'components.css');

let css = fs.readFileSync(cssPath, 'utf8');

// Replace desktop .vv-editorial-container definition
const containerTarget = /\.vv-editorial-container\s*\{[\s\S]*?\}/;
const containerReplacement = `.vv-editorial-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 24px 0 24px !important;
  display: flow-root !important;
}`;

css = css.replace(containerTarget, containerReplacement);

// Replace desktop .vv-editorial-hero-row definition
const heroRowTarget = /\.vv-editorial-hero-row\s*\{[\s\S]*?\}/;
const heroRowReplacement = `.vv-editorial-hero-row {
  margin-top: 0 !important;
  margin-bottom: 20px !important;
}`;

css = css.replace(heroRowTarget, heroRowReplacement);

// Check if tablet media query has .vv-editorial-container
if (css.includes('@media (max-width: 1024px)')) {
  css = css.replace(
    /(@media\s*\(max-width:\s*1024px\)\s*\{[\s\S]*?\.vv-editorial-page\s*\{[\s\S]*?\})/,
    `$1\n  .vv-editorial-container {\n    padding-top: 30px !important;\n  }`
  );
}

// Check if mobile media query has .vv-editorial-container
if (css.includes('@media (max-width: 768px)')) {
  css = css.replace(
    /(@media\s*\(max-width:\s*768px\)\s*\{[\s\S]*?\.vv-editorial-page\s*\{[\s\S]*?\})/,
    `$1\n  .vv-editorial-container {\n    padding-top: 22px !important;\n  }`
  );
}

fs.writeFileSync(cssPath, css, 'utf8');
fs.writeFileSync(publicCssPath, css, 'utf8');

console.log('Successfully updated both css/components.css and public/css/components.css!');
