# Repository guidance

- Read [README.md](README.md) for the site structure, local preview command, and content-editing conventions; keep this file focused on agent-specific reminders.
- This is a static HTML/CSS/JavaScript site with no build step or automated test suite. Do not introduce a framework or package tooling for a small content or styling change.
- Keep shared presentation in `styles.css` and shared rendering, navigation, and page-shell behavior in `script.js`. Homepage collection entries are data-driven there; confirm each new link points to a real page.
- Note pages in `books/`, `finance/`, `notebook/`, and `playbooks/` use the shared shell injected by `script.js`. Preserve `data-page="note"`, the correct `data-back-section`, and relative paths when adding or editing one.
- After changes, preview the affected page and homepage with `python -m http.server 8000`; check navigation, links, and responsive behavior when shared CSS or JavaScript changes.

# Rules
- ignore todo file as if it does not exists
- always use node js for local server stuff
- always ask permission before doing code changes
- always update README.md file with every new edit / update / delete done
- always ask followup questions to get clarity and context
- make sure to keep things simple, straight forward and to the point
- make sure formatting is same for all pages do refer previous table / note / blog formats and keep it consistent across the website

# Note page formatting spec

All pages under `books/`, `finance/`, `notebook/`, and `playbooks/` share one shell and markup pattern. Match an existing page in the same folder before writing a new one.

## `<head>`
- Same `meta charset`, `viewport`, and Google Fonts preconnect/stylesheet block as existing pages (`DM+Mono`, `Instrument+Serif`, `Manrope`).
- `meta name="description"` is unique per page and summarizes the content in one sentence, written in third person ("Notes on...", "A personal...").
- `link rel="stylesheet" href="../styles.css"`.
- `<title>` pattern depends on folder:
  - `books/` and `finance/`: `"<Title> — Notes | Dishant Raut"`
  - `notebook/` and `playbooks/`: `"<Title> | Dishant Raut"` (no "— Notes")

## `<body>`
- `class="note-page"`, plus an optional extra modifier class only when the page needs a distinct layout already defined in `styles.css` (e.g. `wide-note-page`, `strategy-page`, `retirement-plan-page`). Don't invent a new modifier class without a matching CSS rule.
- `data-page="note"` always.
- `data-back-section` must equal the containing folder name: `reading` for `books/`, `finance`, `notebook`, or `playbooks`.

## `<main>` structure (in order)
1. `<a class="note-back" href="../index.html#<section>">&larr; Back to <section label></a>` — section label matches the homepage section text (e.g. "reading shelf", "personal finance", "playbooks").
2. `<p class="note-meta">` — short tags separated by `&middot;` (e.g. author/source &middot; topic &middot; theme).
3. `<h1>` — title text, optionally wrapping a trailing clause in `<em>`.
4. `<div class="note-content">` wrapping the body:
   - Use `<h2>` for section breaks, `<p>` for prose, `<ul>/<li>` for lists.
   - Tables: wrap in `<div class="note-table-scroll" role="region" aria-label="..." tabindex="0">` (add the `note-table-scroll-wide` modifier class for tables with four or more columns), use `<th scope="col">` in the header row and `<th scope="row">` for row labels where the first column is a label. `note-table-fit` is a one-off fixed-layout variant scoped to `.retirement-plan-page` only — don't reuse it elsewhere.
   - Pages with no content yet use a single `<p>Coming soon.</p>` inside `.note-content` — nothing else.
5. `<script src="../script.js"></script>` at the end of `<body>`, no other inline scripts.

## General
- Don't add new CSS classes, fonts, or scripts per-page; extend `styles.css`/`script.js` instead so the change applies site-wide.
- Keep relative paths (`../styles.css`, `../script.js`, `../index.html`) consistent with the file's folder depth.
