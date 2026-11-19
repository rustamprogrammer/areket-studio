# Oral defense outline

## Two minute walkthrough

1. **Purpose:** `areket.studio` presents a digital studio and three portfolio entries. Three pages share the same navigation and visual system.
2. **Home:** point out the TaxiPark screenshot, the project links and responsive composition. Move the pointer across the blue visual and closing section to show the light ribbons bending toward it.
3. **Projects:** the cards come from `data/projects.json` through `fetch()`. Search and category filters are implemented with jQuery. The detail dialog is custom HTML/JavaScript, not a Bootstrap modal. Its external button only appears when a public URL exists.
4. **Language and theme:** click RU/EN and dark/light, then reload. Both preferences persist in `localStorage`.
5. **Brief:** show errors for empty or invalid fields, then fill in a project request and open the prepared WhatsApp message. Return to show the saved history; only the five latest requests appear in the left column. Explain that the visitor confirms sending in WhatsApp.
6. **Mobile:** demonstrate the collapsible navigation and usable controls at a narrow viewport.

## Code ownership and logic

- `index.html`, `projects.html`, `contact.html`: semantic page structure and navigation.
- `assets/css/style.css`: responsive layout, custom visual language, feedback states and reduced motion.
- `assets/js/app.js`: shared state, localization, theme, project interactions, form validation and pointer-driven SVG paths.
- `data/projects.json`: project records separate from the interface.

## Theory practice

**What is the difference between HTML, CSS and JavaScript?** HTML provides structure, CSS presentation, and JavaScript behavior and data updates.

**Why use Bootstrap and custom CSS together?** Bootstrap gives a reliable responsive layout baseline and standard utilities. Custom CSS gives this site its own visual system.

**What does jQuery do here?** It handles event delegation and DOM updates for search, filters, dialog controls and the form.

**Why fetch JSON rather than hardcode project cards?** Content can be edited independently from markup, and the page renders from the returned records.

**What is localStorage?** Browser storage for small client-side values. It persists across reloads on the same origin and is not a server database.

**How does accessibility affect the implementation?** The pages use semantic landmarks, labels, alt text, a skip link, visible focus, a native `<dialog>` and a reduced-motion path.

**What happens when the JSON request fails?** The catalogue shows an error message with a recovery step instead of an empty page.
