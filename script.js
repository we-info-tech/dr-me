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
    category: "craft",
    date: "Published",
    status: "Read now",
    title: "Software engineering is a craft skill, not just a technical one",
    link: "notebook/software-engineering-is-a-craft.html",
  },
  {
    category: "thinking",
    date: "Published",
    status: "Read now",
    title: "Decision-making frameworks: matching the process to the problem",
    link: "notebook/decision-making-frameworks.html",
  },
  {
    category: "thinking",
    date: "Published",
    status: "Read now",
    title: "Identifying high-performing teams: the metrics that actually signal it",
    link: "notebook/identifying-high-performing-teams.html",
  },
  {
    category: "technology",
    date: "Published",
    status: "Read now",
    title: "Coding is dead? AI missed the funeral",
    link: "notebook/coding-is-dead-ai-missed-the-funeral.html",
  },
  {
    category: "ai",
    date: "Published",
    status: "Read now",
    title: "AI-Ready Organization: an enterprise AI readiness framework",
    link: "notebook/ai-ready-organization.html",
  },
  {
    category: "engineering-management",
    date: "Published",
    status: "Read now",
    title: "The Engineering Judgement Framework: from execution to technical authority",
    link: "notebook/engineering-judgement-framework.html",
  },
];

const readingCards = [
  {
    slug: "the-intelligent-investor",
    type: "Finance / Value investing",
    title: "The Intelligent<br />Investor",
    description:
      "Benjamin Graham's case for margin of safety, treating \"Mr. Market\" as a mood swing rather than a signal, and staying a disciplined defensive investor.",
    author: "Benjamin Graham",
    meta: "Value / Margin of safety",
    href: "books/the-intelligent-investor.html",
  },
  {
    slug: "simple-wealth-inevitable-wealth",
    type: "Finance / Wealth building",
    title: "Simple Wealth,<br />Inevitable Wealth",
    description:
      "Nick Murray's reminder that wealth is freedom, not a number, and that owning great companies beats chasing yield or timing volatility.",
    author: "Nick Murray",
    meta: "Ownership / Risk",
    href: "books/simple-wealth-inevitable-wealth.html",
  },
  {
    slug: "your-money-or-your-life",
    type: "Finance / Life design",
    title: "Your Money<br />or Your Life",
    description:
      "Vicki Robin and Joe Dominguez's nine-step program for trading life energy consciously, the book that launched the FIRE movement.",
    author: "Robin & Dominguez",
    meta: "FIRE / Life energy",
    href: "books/your-money-or-your-life.html",
  },
];

const financeCards = [
  {
    slug: "portfolio-blocks",
    type: "Personal finance / Portfolio construction",
    title: "A Portfolio,<br />Built in Blocks",
    description:
      "My Portfolio Building Blocks: a personal framework built from investments with distinct roles.",
    author: "Dishant Raut",
    meta: "Portfolio / Allocation",
    href: "finance/portfolio-blocks.html",
  },
  {
    slug: "freedom-investing",
    type: "Personal finance / Investing philosophy",
    title: "Freedom Investing<br />vs. Active Investing",
    description:
      "Why I prefer long-term, index-led investing that compounds in the background while I focus on skills, business, and life.",
    author: "Dishant Raut",
    meta: "Index / Long-term wealth",
    href: "finance/freedom-investing.html",
  },
  {
    slug: "why-etfs",
    type: "Personal finance / ETF strategy",
    title: "Why ETFs,<br />Not Stocks or Active Funds?",
    description:
      "Why I prefer index ETFs for long-term equity exposure, and the trade-offs I consider against stocks and mutual funds.",
    author: "Dishant Raut",
    meta: "ETFs / Index investing",
    href: "finance/why-etfs.html",
  },
  {
    slug: "insurance-wealth-protection",
    type: "Personal finance / Insurance",
    title: "Seven Covers,<br />One Safety Net",
    description:
      "How different insurance layers can protect income, savings, family, and long-term wealth from major financial shocks.",
    author: "Dishant Raut",
    meta: "Insurance / Wealth protection",
    href: "finance/insurance-wealth-protection.html",
  },
  {
    slug: "seven-portfolio-reviews",
    type: "Personal finance / Portfolio management",
    title: "Why I Review My Portfolio<br />Seven Times a Year",
    description:
      "Why I use planned review windows and metric-based decisions instead of reacting to the market every day.",
    author: "Dishant Raut",
    meta: "Review / Discipline",
    href: "finance/seven-portfolio-reviews.html",
  },
  {
    slug: "money-lessons",
    type: "Personal finance / Investing",
    title: "Money / Business<br />Lessons",
    description:
      "Personal principles on health, insurance, and wealth, alongside lessons on skills, income, compounding, and financial freedom.",
    author: "Dishant Raut",
    meta: "Money / Business",
    href: "finance/money-lessons.html",
  },
  {
    slug: "wrappers-capitalism-real-innovation",
    type: "Business / Innovation",
    title: "Wrappers, Capitalism<br />& Real Innovation",
    description:
      "Why real innovation is usually a better-articulated wrapper around existing tools, not a from-scratch invention — and the skills that make wrappers work.",
    author: "Varun Mayya",
    meta: "Product / Systems thinking",
    href: "finance/wrappers-capitalism-real-innovation.html",
  },
];

const noteShellConfig = {
  reading: { sectionLabel: "Reading", sectionHref: "../index.html#reading", contactHref: "../index.html#contact" },
  finance: { sectionLabel: "Finance", sectionHref: "../index.html#finance", contactHref: "../index.html#contact" },
  notebook: { sectionLabel: "Writing", sectionHref: "../index.html#writing", contactHref: "../index.html#contact" },
  playbooks: { sectionLabel: "Playbooks", sectionHref: "../index.html#playbooks", contactHref: "../index.html#contact" },
};

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

  articleList.innerHTML = visibleArticles
    .map((article) => {
      const label = categoryLabels[article.category] || article.category;
      const statusText = article.status || article.date;
      const content = `
        <p class="article-meta">${label}<br>${statusText}</p>
        <h3>${article.title}</h3>
        <span class="article-arrow" aria-hidden="true">${article.link ? "↗" : "•"}</span>
      `;

      if (article.link) {
        return `<a class="article" href="${article.link}" aria-label="Read ${article.title}">${content}</a>`;
      }

      return `<article class="article is-disabled" aria-label="${article.title}" aria-disabled="true">${content}</article>`;
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
      (card) => `
        <article class="${cardType}-card">
          <p class="${cardType}-number">${String(cards.indexOf(card) + 1).padStart(2, "0")}</p>
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

function renderHomeCollections() {
  renderCardGrid("#reading-grid", readingCards, "book");
  renderCardGrid("#finance-grid", financeCards, "finance");
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
    <nav class="site-nav" aria-label="Main navigation">
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

  body.insertBefore(header, body.firstChild);
  body.appendChild(footer);
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
    allFilters.forEach((button) => button.classList.remove("is-active"));
    filter.classList.add("is-active");
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
injectNotePageShell();