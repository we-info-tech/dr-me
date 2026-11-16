# Dishant Raut personal site

This project is a small static portfolio and writing site built with plain HTML, CSS, and JavaScript.

## Structure

- `.gitignore` — excludes local VS Code settings and the root `todo` file
- `index.html` — homepage with perspective, work, playbooks, reading, finance, notebook, life, and contact sections
- `styles.css` — all shared styling and responsive behavior, including underlined coral links inside note text
- `script.js` — content data and rendering for writing, reading, finance, and life cards; note-page shell injection; article filtering, mobile navigation, and shared year rendering
- `books/` — reading notes pages
- `finance/` — finance notes pages
- `life/` — life design and migration notes
- `notebook/` — notebook / thinking pages
- `docs/` — maintainer documents; `site-review.md` lists review findings ordered from simple to hard fixes

Simple review fixes (items 1–10 in `docs/site-review.md`) are applied: the homepage nav now lists About before Work and calls the section "Notebook"; the retirement card uses the note's page title; unused `slug`/`date` card data, the `is-disabled` article branch and its CSS were removed; `.global-status` is declared once; and `index.html` escapes `&` and adds `rel="noopener noreferrer"` to the contact link. `AGENTS.md` now covers the `life/` folder and points to the Node preview server below instead of Python.

The current content inventory includes four reading notes, including a combined note on both editions of *Nudge*, nine finance notes, five life notes (including a daily-schedule plan for life after 40, linked to Retirement by Design), seven notebook pages, and five playbooks. The retirement plan also covers systems, delegation, deep work, and how reclaimed time may be used. The financial-freedom note pairs a foundations funnel with an illustrated seven-level framework; the originality note includes a responsive diagram of how shared inputs become distinct ideas.

Items 11–16 in `docs/site-review.md` are applied: the three homepage work cards link to `#contact`; every page has `theme-color`, a canonical link to `https://dishantraut.me/`, an inline SVG favicon, and Open Graph/Twitter tags (the homepage reuses its hero image); the notebook filter buttons use `aria-pressed`, `#article-list` is an `aria-live` region, and an empty category shows a message; and the wrappers note now credits Varun Mayya and opens with an intro paragraph.

Items 17–22 are applied: the shell injected on note pages now includes the hamburger menu and a back-to-top button (`injectNotePageShell` runs before the menu and scroll handlers are wired); the five homepage playbook CTAs read "Coming soon" until the playbooks are written; `why-etfs`, `freedom-investing` and `steps-toward-financial-freedom` end with the same personal-note disclaimer as the homepage; coral text now uses `--coral-text` (`#b5361f`, about 5.3:1 on paper) and the contact section and second work visual use ink text on coral; and the retirement, freedom and ETF notes end with a "Related notes" list (`retirement-by-design`, `life-after-retirement`, `my-life-after-freedom`, `why-freedom`, `freedom-investing`, `why-etfs`).

## Local preview

Open `index.html` in a browser, or serve the folder with a small Node static server (no packages):

```bash
node -e "const h=require('http'),f=require('fs'),p=require('path'),t={'.html':'text/html','.css':'text/css','.js':'text/javascript'};h.createServer((q,r)=>{let u=decodeURIComponent(q.url.split('?')[0]);if(u.endsWith('/'))u+='index.html';const a=p.join(process.cwd(),u);f.readFile(a,(e,d)=>{if(e){r.statusCode=404;return r.end('Not found')}r.setHeader('Content-Type',t[p.extname(a)]||'application/octet-stream');r.end(d)})}).listen(8000)"
```

Then visit: http://localhost:8000

## Editing conventions

- Keep the visual system in `styles.css` and avoid scattering layout changes across files.
- Update the relevant content arrays in `script.js` when adding or reordering writing articles, reading cards, or finance cards.
- Keep note pages marked with `data-page="note"` and set `data-back-section` to the containing section: `reading`, `finance`, `notebook`, `playbooks`, or `life`; `script.js` uses these values to inject the shared header and footer.
- Use semantic markup (`section`, `article`, `nav`, etc.) to preserve accessibility.
- Add descriptive text to new links and use real page destinations when possible.

## Notes for maintainers

- This is intentionally static and does not currently use a build step.
- If a section becomes large, move repeated content into a structured data model rather than copying HTML.
- The site loads Google Fonts and a hero image from external URLs; offline previews may use fallback fonts and omit the remote image.
- Prefer real pages or purposeful email/contact destinations over placeholder links. `#contact` is appropriate when an item intentionally starts a project conversation.
