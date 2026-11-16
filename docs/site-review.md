# Site review

Review of the static site (HTML, CSS, JavaScript), ordered from simplest to hardest fix. Reviewed on 2026-11-16.

## Easy (small, contained changes)

11. **Empty homepage links.** The three work cards in `index.html` have `href=""` with `TODO` comments. Clicking one reloads the page. Point them to real pages or `#contact`.
12. **Missing head metadata.** There is no favicon, `theme-color`, canonical link, or Open Graph/Twitter tags on any page.
13. **Filter state.** The filter buttons have no `aria-pressed`. `#article-list` has no `aria-live`. The filter also has no empty-state message.
14. **Missing guidance on `life/`.** `AGENTS.md` doesn't list `life/` in its folder or `data-back-section` rules, or say what title pattern `life/` pages use. They currently use no "— Notes".
15. **Out-of-date README.**
    - The homepage section list omits Life.
    - It says additional writing entries are "coming soon" in `script.js`, but none exist.
    - It recommends `python -m http.server`, while `AGENTS.md` says to always use Node for the local server.
16. **Inconsistent metadata on the wrappers note.** `finance/wrappers-capitalism-real-innovation.html` is the only finance page whose `note-meta` has no author. The author, Varun Mayya, appears only on the homepage card. It also opens with an `<h2>` and has no intro paragraph.

## Medium (design or behavior decisions)

17. **Navigation lost on mobile note pages.** The shell injected by `injectNotePageShell` has no `.menu-button`. At 700px or narrower, `.site-nav` is `display: none` and nothing reopens it. Mobile readers lose the section and Contact links.
18. **Playbook pages are all placeholders.** All five pages in `playbooks/` say only "Coming soon." The homepage CTAs say "Get the playbook" and "Explore AccessOS". Either relabel them or fill the pages in.
19. **Disclaimers are inconsistent.** The homepage finance section has a disclaimer. Of the finance and book note pages, only `seven-portfolio-reviews`, `portfolio-blocks` and `insurance-wealth-protection` carry one. `why-etfs`, `freedom-investing` and `steps-toward-financial-freedom` have none. Moving it into the shared shell would cover all pages.
20. **Colour contrast.** Coral `#ff775f` on paper is about 2.4:1, which fails WCAG AA for `.note-content h3` and small coral text like `.strategy-number`. Paper text on the coral contact section has the same problem.
21. **No way back to the top on note pages.** `.back-to-top` exists only on `index.html`. Long notes such as `notebook/ai-ready-organization.html` have none.
22. **Little cross-linking.** Only one internal link exists between notes (`my-life-after-freedom` to `retirement-by-design`). Related notes should link to each other: `life-after-retirement`, `retirement-by-design`, `my-life-after-freedom`, `why-freedom`, and `freedom-investing` and `why-etfs`.

## Hard (structural work)

23. **Data model is split.** The playbook cards are hardcoded in `index.html`, while reading, finance, life and writing are data-driven in `script.js`. Move playbooks into `script.js`.
24. **Table of contents and anchors for long notes.** `ai-ready-organization` (13 numbered topics) and other long pages have no in-page navigation or heading `id`s.
25. **External dependencies.** The hero image comes from Unsplash, and fonts come from Google with no local fallback. External source links in notes can rot, so add a "last checked" date.
26. **Content duplication.** Retirement appears in three pages (`finance/retirement-by-design`, `notebook/life-after-retirement`, `life/my-life-after-freedom`) with different titles and sections. Define one canonical page per theme and link the others to it.

## Open questions

- Start with items 1–16 as one batch?
- Use plain Node (no packages) for the local server, and update the README as changes land?
- For item 17, add a hamburger on note pages or an always-visible compact nav?
