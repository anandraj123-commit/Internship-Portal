# Services pages

- `/service` uses the supplied `service/index.html` listing.
- `/service/[slug]` renders six service details using the supplied root `index.html?p=2133.html` UI/UX detail layout. All service content is in `data/services.json`; `data/services.js` only exposes the catalogue and a slug lookup. Only one detail HTML template was supplied; the other services reuse it.
- All routes use `components/Header.jsx` and `components/Navbar.jsx`. Services links target `/service`; detail pages include a linked service sidebar.
- Existing public theme CSS is reused unchanged. The services export's blue theme variables are replaced with the existing Home yellow/orange variables.
- `scripts/migrate-services.mjs` extracts only services components from the supplied files. It preserves existing public assets, adding only missing source assets. Running it regenerates the extracted components.
- Build: `npm run build`.
- Browser verification: start on port 3100 and run `node scripts/check-services.mjs` (set `CHROME_PATH` if needed).

The shared Header also renders `components/HeaderStyles.jsx`, which contains the About Us header's original main, sticky, and mobile CSS with its media queries. This avoids relying on each page export to include header styles. Regenerate it with `node scripts/extract-header-styles.mjs`. `node scripts/check-header.mjs` compares computed header layout and appearance on About, Services, and a service detail at desktop, tablet, and mobile widths.


## Editing service data

Edit `data/services.json` to update listing text, card icons/descriptions/Read more labels, service URLs, detail text, feature icons/descriptions, responsive images/gallery links, and FAQ questions/answers/initial state. Keep `slug`, `href`, and numeric `id` unique. The same JSON feeds listing cards, static detail routes, and the service sidebar. CSS classes and structural wrappers stay in the components to preserve the supplied design.

`ServiceCards.jsx` maps the catalogue into the original grid markup, including its masonry sizing element and hover styles. `DetailContent.jsx` retains the supplied detail HTML structure; images and FAQs also read from JSON. Header and navbar continue using the shared components.

Checks: `npm run build`, `node scripts/check-service-markup.mjs`, and `node scripts/check-json-services.mjs`. The markup check compares against hashes captured before the JSON refactor; intentional future copy changes require updating those snapshots. The browser check starts and stops its own preview on port 3210.
