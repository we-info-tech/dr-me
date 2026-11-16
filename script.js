const categoryLabels = {
  all: "All notes",
  craft: "Craft",
  thinking: "Thinking",
  technology: "Technology",
  ai: "Applied AI",
  "engineering-management": "Engineering management",
};

const articles = [
  {
    category: "thinking",
    status: "Read now",
    title: "After Retirement: A Life Where Work Is Optional",
    link: "notebook/life-after-retirement.html",
  },
  {
    category: "craft",
    status: "Read now",
    title: "Software engineering is a craft skill, not just a technical one",
    link: "notebook/software-engineering-is-a-craft.html",
  },
  {
    category: "thinking",
    status: "Read now",
    title: "Decision-making frameworks: matching the process to the problem",
    link: "notebook/decision-making-frameworks.html",
  },
  {
    category: "thinking",
    status: "Read now",
    title: "Identifying high-performing teams: the metrics that actually signal it",
    link: "notebook/identifying-high-performing-teams.html",
  },
  {
    category: "technology",
    status: "Read now",
    title: "Coding is dead? AI missed the funeral",
    link: "notebook/coding-is-dead-ai-missed-the-funeral.html",
  },
  {
    category: "ai",
    status: "Read now",
    title: "AI-Ready Organization: an enterprise AI readiness framework",
    link: "notebook/ai-ready-organization.html",
  },
  {
    category: "engineering-management",
    status: "Read now",
    title: "The Engineering Judgement Framework: from execution to technical authority",
    link: "notebook/engineering-judgement-framework.html",
  },
];

const playbookCards = [
  {
    variant: "",
    type: "Digital playbook",
    title: "RAG Systems<br />That Answer",
    description:
      "A practical method for designing retrieval, chunking, evaluation, and citations so your AI answers from the right context.",
    audience: "For builders &amp; teams",
    meta: "RAG / Evaluation",
    href: "playbooks/rag-systems-that-answer.html",
  },
  {
    variant: "dark",
    type: "Digital playbook",
    title: "Cost-Optimized<br />AI Systems",
    description:
      "A practical guide to building useful AI workflows with the right model, retrieval, caching, evaluation, and cost controls.",
    audience: "For product &amp; tech teams",
    meta: "AI / RAG / FinOps",
    href: "playbooks/cost-optimized-ai-systems.html",
  },
  {
    variant: "coral",
    type: "Digital playbook",
    title: "Production AI<br />Without Surprises",
    description:
      "A working playbook for observability, guardrails, prompt versioning, fallback paths, and safe AI delivery.",
    audience: "For engineering leaders",
    meta: "LLMOps / Guardrails",
    href: "playbooks/production-ai-without-surprises.html",
  },
  {
    variant: "blue",
    type: "Product playbook",
    title: "AccessOS",
    description:
      "A complete access-control framework for startups that need to scale their teams, permissions, and operations without losing control.",
    audience: "For scaling startups",
    meta: "Access / Control / Scale",
    href: "playbooks/accessos.html",
  },
  {
    variant: "paper",
    type: "Career playbook",
    title: "CTC: Campus<br />to Career",
    description:
      "A practical guide for new-age college students who want to turn their learning into a confident first step into the workforce.",
    audience: "For college students",
    meta: "Skills / Career / Work",
    href: "playbooks/ctc-campus-to-career.html",
  },
];

const readingCards = [
  {
    type: "Finance / Value investing",
    title: "The Intelligent<br />Investor",
    description:
      "Benjamin Graham's case for margin of safety, treating \"Mr. Market\" as a mood swing rather than a signal, and staying a disciplined defensive investor.",
    author: "Benjamin Graham",
    meta: "Value / Margin of safety",
    href: "books/the-intelligent-investor.html",
  },
  {
    type: "Finance / Wealth building",
    title: "Simple Wealth,<br />Inevitable Wealth",
    description:
      "Nick Murray's reminder that wealth is freedom, not a number, and that owning great companies beats chasing yield or timing volatility.",
    author: "Nick Murray",
    meta: "Ownership / Risk",
    href: "books/simple-wealth-inevitable-wealth.html",
  },
  {
    type: "Finance / Life design",
    title: "Your Money<br />or Your Life",
    description:
      "Vicki Robin and Joe Dominguez's nine-step program for trading life energy consciously, the book that launched the FIRE movement.",
    author: "Robin & Dominguez",
    meta: "FIRE / Life energy",
    href: "books/your-money-or-your-life.html",
  },
  {
    type: "Behavioral economics / Decision design",
    title: "Nudge",
    description:
      "Richard H. Thaler and Cass R. Sunstein's guide to choice architecture, making better decisions easier, and preserving freedom of choice.",
    author: "Thaler & Sunstein",
    meta: "Choice architecture / Sludge",
    href: "books/nudge.html",
  },
];

const financeCards = [
  {
    type: "Personal finance / Financial freedom",
    title: "Steps Toward<br />Financial Freedom",
    description:
      "A practical framework for strengthening financial foundations and understanding seven levels of financial freedom.",
    author: "Dishant Raut",
    meta: "Financial foundations / Freedom",
    href: "finance/steps-toward-financial-freedom.html",
  },
  {
    type: "Personal finance / Retirement planning",
    title: "Retirement<br />by Design",
    description:
      "A personal plan to trade work hours for greater choice, with a ₹20 crore enough number and a much larger lifetime ambition.",
    author: "Dishant Raut",
    meta: "Retirement / Life design",
    href: "finance/retirement-by-design.html",
  },
  {
    type: "Personal finance / Portfolio construction",
    title: "A Portfolio,<br />Built in Blocks",
    description:
      "My Portfolio Building Blocks: a personal framework built from investments with distinct roles.",
    author: "Dishant Raut",
    meta: "Portfolio / Allocation",
    href: "finance/portfolio-blocks.html",
  },
  {
    type: "Personal finance / Investing philosophy",
    title: "Freedom Investing<br />vs. Active Investing",
    description:
      "Why I prefer long-term, index-led investing that compounds in the background while I focus on skills, business, and life.",
    author: "Dishant Raut",
    meta: "Index / Long-term wealth",
    href: "finance/freedom-investing.html",
  },
  {
    type: "Personal finance / ETF strategy",
    title: "Why ETFs,<br />Not Stocks or Active Funds?",
    description:
      "Why I prefer index ETFs for long-term equity exposure, and the trade-offs I consider against stocks and mutual funds.",
    author: "Dishant Raut",
    meta: "ETFs / Index investing",
    href: "finance/why-etfs.html",
  },
  {
    type: "Personal finance / Insurance",
    title: "Seven Covers,<br />One Safety Net",
    description:
      "How different insurance layers can protect income, savings, family, and long-term wealth from major financial shocks.",
    author: "Dishant Raut",
    meta: "Insurance / Wealth protection",
    href: "finance/insurance-wealth-protection.html",
  },
  {
    type: "Personal finance / Portfolio management",
    title: "Why I Review My Portfolio<br />Seven Times a Year",
    description:
      "Why I use planned review windows and metric-based decisions instead of reacting to the market every day.",
    author: "Dishant Raut",
    meta: "Review / Discipline",
    href: "finance/seven-portfolio-reviews.html",
  },
  {
    type: "Personal finance / Investing",
    title: "Money / Business<br />Lessons",
    description:
      "Personal principles on health, insurance, and wealth, alongside lessons on skills, income, compounding, and financial freedom.",
    author: "Dishant Raut",
    meta: "Money / Business",
    href: "finance/money-lessons.html",
  },
  {
    type: "Business / Innovation",
    title: "Wrappers, Capitalism<br />& Real Innovation",
    description:
      "Why real innovation is usually a better-articulated wrapper around existing tools, not a from-scratch invention — and the skills that make wrappers work.",
    author: "Varun Mayya",
    meta: "Product / Systems thinking",
    href: "finance/wrappers-capitalism-real-innovation.html",
  },
];

const lifeCards = [
  {
    type: "Life / Personal growth",
    title: "Uniqueness Is<br />a Combination",
    description:
      "Why originality grows from shared foundations, and how our changing experiences and needs shape a distinctive mix of ideas and skills.",
    author: "Dishant Raut",
    meta: "Originality / Synthesis",
    href: "life/uniqueness-is-a-combination.html",
  },
  {
    type: "Life / Life design",
    title: "Three Decisions<br />That Shape a Life",
    description:
      "How the choices of where to live, what to do, and whom to build a life with shape a person's long-term trajectory.",
    author: "Dishant Raut",
    meta: "Place / Work / Partnership",
    href: "life/three-decisions-that-shape-a-life.html",
  },
  {
    type: "Life / Life design",
    title: "Why Freedom?<br />What Is It?",
    description:
      "Why financial freedom matters to me: more choice over my time, independence from the herd, less scarcity-driven panic, and greater mobility.",
    author: "Dishant Raut",
    meta: "Freedom / Life design",
    href: "life/why-freedom.html",
  },
  {
    type: "Life / Migration",
    title: "Why People Change<br />Nationality",
    description:
      "A framework for understanding why people leave their home country \u2014 security, opportunity, or tax and control \u2014 and how to choose where to go.",
    author: "Dishant Raut",
    meta: "Framework / Migration",
    href: "life/why-change-nationality.html",
  },
  {
    type: "Life / Life design",
    title: "How I Plan to Live<br />After 40, in Freedom",
    description:
      "A personal plan for a typical day after 40: mornings for family and friends, afternoons for calls and deep work, evenings for health and family.",
    author: "Dishant Raut",
    meta: "Freedom / Daily design",
    href: "life/my-life-after-freedom.html",
  },
];

const noteShellConfig = {
  reading: { sectionLabel: "Reading", sectionHref: "../index.html#reading", contactHref: "../index.html#contact" },
  finance: { sectionLabel: "Finance", sectionHref: "../index.html#finance", contactHref: "../index.html#contact" },
  notebook: { sectionLabel: "Notebook", sectionHref: "../index.html#writing", contactHref: "../index.html#contact" },
  playbooks: { sectionLabel: "Playbooks", sectionHref: "../index.html#playbooks", contactHref: "../index.html#contact" },
  life: { sectionLabel: "Life", sectionHref: "../index.html#life", contactHref: "../index.html#contact" },
};

injectNotePageShell();
addHeadingIdsAndToc();

const articleList = document.querySelector("#article-list");
const filters = document.querySelectorAll(".filter");
const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".site-nav");

function renderArticles(category) {
  if (!articleList) {
    return;
  }

  const visibleArticles =
    category === "all"
      ? articles
      : articles.filter((article) => article.category === category);

  if (visibleArticles.length === 0) {
    articleList.innerHTML = '<p class="article-meta">No notes in this category yet.</p>';
    return;
  }

  articleList.innerHTML = visibleArticles
    .map((article) => {
      const label = categoryLabels[article.category] || article.category;
      const content = `
        <p class="article-meta">${label}<br>${article.status}</p>
        <h3>${article.title}</h3>
        <span class="article-arrow" aria-hidden="true">↗</span>
      `;

      return `<a class="article" href="${article.link}" aria-label="Read ${article.title}">${content}</a>`;
    })
    .join("");
}

function renderCardGrid(selector, cards, cardType) {
  const container = document.querySelector(selector);
  if (!container) {
    return;
  }

  container.innerHTML = cards
    .map(
      (card, index) => `
        <article class="${cardType}-card">
          <p class="${cardType}-number">${String(index + 1).padStart(2, "0")}</p>
          <a href="${card.href}">
            <p class="${cardType}-type">${card.type}</p>
            <h3>${card.title}</h3>
            <p class="${cardType}-description">${card.description}</p>
          </a>
          <div class="${cardType}-footer">
            <p>${card.author}<br />${card.meta}</p>
            <a href="${card.href}">Read the notes <span aria-hidden="true">↗</span></a>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderPlaybooks() {
  const container = document.querySelector("#playbook-grid");
  if (!container) {
    return;
  }

  container.innerHTML = playbookCards
    .map(
      (card, index) => `
        <article class="playbook-card${card.variant ? ` playbook-card--${card.variant}` : ""}">
          <p class="playbook-number">${String(index + 1).padStart(2, "0")}</p>
          <div>
            <p class="playbook-type">${card.type}</p>
            <h3>${card.title}</h3>
            <p class="playbook-description">${card.description}</p>
          </div>
          <div class="playbook-footer">
            <p>${card.audience}<br />${card.meta}</p>
            <a href="${card.href}">Coming soon <span aria-hidden="true">↗</span></a>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderHomeCollections() {
  renderPlaybooks();
  renderCardGrid("#reading-grid", readingCards, "book");
  renderCardGrid("#finance-grid", financeCards, "finance");
  renderCardGrid("#life-grid", lifeCards, "life");
}

function injectNotePageShell() {
  const body = document.body;
  if (!body || body.dataset.page !== "note") {
    return;
  }

  if (body.querySelector(".site-header") || body.querySelector("footer")) {
    return;
  }

  const config = noteShellConfig[body.dataset.backSection] || noteShellConfig.reading;

  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `
    <a class="wordmark" href="../index.html" aria-label="Dishant Raut home">DR<span>.</span></a>
    <button class="menu-button" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="site-nav">
      <span></span><span></span>
    </button>
    <nav class="site-nav" id="site-nav" aria-label="Main navigation">
      <a href="${config.sectionHref}">${config.sectionLabel}</a>
      <a href="${config.contactHref}">Contact</a>
    </nav>
  `;

  const footer = document.createElement("footer");
  footer.innerHTML = `
    <a class="wordmark" href="../index.html">DR<span>.</span></a>
    <p>&copy; <span data-year></span> Dishant Raut</p>
    <a href="https://www.linkedin.com/in/dishant-raut/" target="_blank" rel="noreferrer">LinkedIn &#8599;</a>
  `;

  const topLink = document.createElement("a");
  topLink.className = "back-to-top";
  topLink.href = "#top";
  topLink.setAttribute("aria-label", "Back to top");
  topLink.textContent = "\u2191";

  body.insertBefore(header, body.firstChild);
  body.appendChild(footer);
  body.appendChild(topLink);
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function addHeadingIdsAndToc() {
  const content = document.querySelector('body[data-page="note"] .note-content');
  if (!content) {
    return;
  }

  const headings = Array.from(content.querySelectorAll("h2, h3"));
  const used = new Set();
  headings.forEach((heading) => {
    if (!heading.id) {
      const base = slugify(heading.textContent) || "section";
      let id = base;
      for (let n = 2; used.has(id) || document.getElementById(id); n += 1) {
        id = `${base}-${n}`;
      }
      heading.id = id;
    }
    used.add(heading.id);
  });

  const sections = [];
  headings.forEach((heading) => {
    if (heading.tagName === "H2") {
      sections.push({ heading, children: [] });
    } else if (sections.length) {
      sections[sections.length - 1].children.push(heading);
    }
  });

  if (sections.length < 4) {
    return;
  }

  const link = (heading) => `<a href="#${heading.id}">${heading.innerHTML}</a>`;
  const toc = document.createElement("nav");
  toc.className = "note-toc";
  toc.setAttribute("aria-label", "On this page");
  toc.innerHTML = `
    <p class="note-toc-title">On this page</p>
    <ol>
      ${sections
        .map(
          ({ heading, children }) => `<li>${link(heading)}${
            children.length ? `<ol>${children.map((child) => `<li>${link(child)}</li>`).join("")}</ol>` : ""
          }</li>`,
        )
        .join("")}
    </ol>
  `;
  content.insertBefore(toc, content.firstChild);
}

function setMenuState(isOpen) {
  if (!menuButton || !navigation) {
    return;
  }

  navigation.classList.toggle("is-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
}

const allFilters = Array.from(filters || []);
allFilters.forEach((filter) => {
  filter.addEventListener("click", () => {
    allFilters.forEach((button) => {
      button.classList.remove("is-active");
      button.setAttribute("aria-pressed", "false");
    });
    filter.classList.add("is-active");
    filter.setAttribute("aria-pressed", "true");
    renderArticles(filter.dataset.filter);
  });
});

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.contains("is-open");
    setMenuState(!isOpen);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });

  document.addEventListener("click", (event) => {
    const clickedInsideNav = navigation.contains(event.target);
    const clickedToggle = menuButton.contains(event.target);

    if (!clickedInsideNav && !clickedToggle && navigation.classList.contains("is-open")) {
      setMenuState(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navigation.classList.contains("is-open")) {
      setMenuState(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 700 && navigation.classList.contains("is-open")) {
      setMenuState(false);
    }
  });
}

const backToTop = document.querySelector(".back-to-top");
if (backToTop) {
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("is-visible", window.scrollY > 400);
  });
}

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

renderHomeCollections();
renderArticles("all");