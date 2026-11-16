# Site review

Review of the static site (HTML, CSS, JavaScript), ordered from simplest to hardest fix. Reviewed on 2026-11-16.

## Medium (design or behavior decisions)

Items 17–22 are done (see README.md).

## Hard (structural work)

23. **Data model is split.** The playbook cards are hardcoded in `index.html`, while reading, finance, life and writing are data-driven in `script.js`. Move playbooks into `script.js`.
24. **Table of contents and anchors for long notes.** `ai-ready-organization` (13 numbered topics) and other long pages have no in-page navigation or heading `id`s.
25. **External dependencies.** The hero image comes from Unsplash, and fonts come from Google with no local fallback. External source links in notes can rot, so add a "last checked" date.
26. **Content duplication.** Retirement appears in three pages (`finance/retirement-by-design`, `notebook/life-after-retirement`, `life/my-life-after-freedom`) with different titles and sections. Define one canonical page per theme and link the others to it.

## Open questions

- Start with items 1–16 as one batch?
- Use plain Node (no packages) for the local server, and update the README as changes land?
- For item 17, add a hamburger on note pages or an always-visible compact nav?
