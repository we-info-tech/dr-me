# Dishant Raut personal site

This project is a small static portfolio and writing site built with plain HTML, CSS, and JavaScript.

## Structure

- `index.html` — homepage with perspective, work, writing, playbooks, reading, finance, and contact sections
- `styles.css` — all shared styling and responsive behavior
- `script.js` — content data and rendering for writing, reading, and finance cards; note-page shell injection; article filtering, mobile navigation, and shared year rendering
- `books/` — reading notes pages
- `finance/` — finance notes pages
- `notebook/` — notebook / thinking pages

The current content inventory includes three reading notes, two finance notes, and one published notebook article. Additional writing entries are intentionally marked as coming soon in `script.js`.

## Local preview

Open `index.html` in a browser, or serve the folder with a simple static server:

```bash
python -m http.server 8000
```

Then visit: http://localhost:8000

## Editing conventions

- Keep the visual system in `styles.css` and avoid scattering layout changes across files.
- Update the relevant content arrays in `script.js` when adding or reordering writing articles, reading cards, or finance cards.
- Keep note pages marked with `data-page="note"` and set `data-back-section` to `reading`, `finance`, or `notebook`; `script.js` uses these values to inject the shared header and footer.
- Use semantic markup (`section`, `article`, `nav`, etc.) to preserve accessibility.
- Add descriptive text to new links and use real page destinations when possible.

## Notes for maintainers

- This is intentionally static and does not currently use a build step.
- If a section becomes large, move repeated content into a structured data model rather than copying HTML.
- The site loads Google Fonts and a hero image from external URLs; offline previews may use fallback fonts and omit the remote image.
- Prefer real pages or purposeful email/contact destinations over placeholder links. `#contact` is appropriate when an item intentionally starts a project conversation.
