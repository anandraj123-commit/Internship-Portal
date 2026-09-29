# Apply Job

`/apply-job` is generated from the supplied `index.html?p=1151.html` export. It preserves the form layout, field labels, position options, CV file types, cover-letter field, page styling, and footer. It uses the existing shared Header and Navbar; Apply links are available in desktop, sticky, and mobile menus.

The page uses Home’s yellow/orange palette, including breadcrumbs, buttons, links and hover accents. Blue/cyan accents from the original export are replaced without changing layout. Header color variables remain scoped to the shared header.

Components are in `components/apply-job/`. `scripts/migrate-apply-job.mjs` regenerates these components and the page's legacy script manifest. `scripts/check-apply-job.mjs` verifies both desktop and mobile layouts, field entry, the position selector, CV file selection, and the old WordPress URL redirect. It does not submit an application.

The form retains its Contact Form 7 integration. This export does not include a local job-application backend or email delivery. Receiving applications requires connecting a working backend; selecting a CV in the browser does not deliver it.
