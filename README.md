# areket.studio — final interactive website

This is an independent course website. The local TaxiPark project was used as the portfolio reference explicitly supplied for this assignment.

## Run

From this directory:

```powershell
python -m http.server 8000
```

Open `http://localhost:8000/`. Serve the site through HTTP: the project catalogue is loaded with `fetch()` from `data/projects.json`. Bootstrap, jQuery and web fonts currently load from public CDNs, so those assets require internet access.

## Pages

| Page | Purpose |
| --- | --- |
| `index.html` | Studio introduction, services, selected work and process |
| `projects.html` | JSON project catalogue with live search, filters and a custom detail dialog |
| `contact.html` | Validated interactive brief saved only in this browser |

## Demonstration

1. On the home page, inspect the TaxiPark interface and use the project links.
2. Open Projects. Filter to “Systems”, search for “TechnoKhan”, open the custom project dialog, then follow the external project link.
3. Switch the language to English and the theme to dark; reload to show persistence.
4. Open the brief. Submit an empty form, correct its fields, save it and reload to show the local saved summary.
5. Resize to mobile, open the navigation, and check keyboard focus and reduced motion.

## Criteria map

| Criterion from the supplied PDF | Implementation |
| --- | --- |
| Structure and pages | Three linked HTML pages, shared navigation and footer |
| Design and usability | Shared type, color, spacing, custom project layouts and original CSS |
| Responsive and accessible | Breakpoints, semantic structure, skip link, labels, alt text, dialog and reduced motion |
| Bootstrap and custom styling | Bootstrap `container-fluid` layout, responsive baseline and custom site system |
| JavaScript and jQuery | Menu, localization, theme, project loading, search/filter, modal, validated brief and toast |
| JSON bonus | `data/projects.json` loaded through `fetch()` |
| Localization bonus | Site-wide RU/EN dictionary with a saved language choice |
| Other bonuses | Custom dialog, dark/light mode, search/filter, animated content update, toast and pointer-driven background |

The brief form is a course demonstration. It writes to `localStorage` only. No message is sent, and no production contact endpoint has been supplied. To use it for real inquiries, connect a backend and replace the explanatory note.

## Source and asset notes

- TechnoKhan: [technokhan.kz](https://technokhan.kz/). Its public title identifies ERP, POS and inventory functions.
- BigPro: [bigpro.kz](https://bigpro.kz/). Its content was unavailable during implementation, so the portfolio copy avoids unsupported functional claims.
- TaxiPark: screenshot and functional description from the user-supplied local TaxiPark project. The screenshot is embedded in `taxipark-preview.svg` for a portable single-file visual.
- The project preview adapts the `Variant 1` preset of [OriginKit’s Hover Image Reveal](https://www.originkit.dev/components/hover-image-reveal), and the service links adapt `Variant 1` of [Direction Hover](https://www.originkit.dev/components/directionhover). Their authenticated React source was reviewed, then the cursor-following reel and directional text swap were reimplemented in the assignment's plain JavaScript/jQuery stack.
- The blue project visual and orange closing panels use original SVG light ribbons inspired by [OriginKit’s Ribbon Glow, Variant 1](https://www.originkit.dev/components/ribbon-glow). The bands bend toward the pointer, then settle; on touch devices and with reduced motion they stay still. The implementation uses the visible preset as design reference and does not copy its WebGL source.
- Bootstrap 5.3.8, jQuery 3.7.1, Manrope and Barlow Condensed load from their public CDNs. Replace the CDN links with local licensed copies if offline delivery is required.

See `DEFENSE.md` for the oral defense outline.
