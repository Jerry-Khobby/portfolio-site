// Case study content. Each section's `type` picks how CaseStudySection draws it.
const sikatrack = {
  title: "SikaTrack",
  summary:
    "A personal-finance tracker built from the mobile-money SMS already on your phone.",
  repo: "https://github.com/Jerry-Khobby/SikaTrack",
  meta: [
    { label: "Role", value: "Sole engineer" },
    { label: "Status", value: "In progress", inProgress: true },
    { label: "Wallets", value: "MTN MoMo, GhanaPay" },
    { label: "Hosting", value: "Oracle Cloud ARM" },
  ],
  sections: [
    {
      type: "text",
      title: "The problem",
      paragraphs: [
        "Most everyday money in Ghana moves through mobile money. Budgeting apps like Mint and YNAB connect to banks, so they can't see it, and typing every payment in by hand is a habit nobody keeps.",
        "Every MoMo payment already sends an SMS. SikaTrack reads those messages, turns each into a transaction, sorts spending into categories, finds payments that charge every month and tracks budgets, **with nothing entered by hand**.",
      ],
    },
    {
      type: "flow",
      title: "How it fits together",
      flow: {
        steps: ["Android app", "Backend API", "Data pipeline", "Postgres warehouse"],
        firstArrow: "SMS →",
        returnNote:
          "transactions, summaries, budgets and alerts back to the app; the warehouse also feeds Metabase",
      },
    },
    {
      type: "rows",
      title: "The three layers",
      items: [
        {
          dir: "mobile/",
          name: "Android app",
          body: "Expo and React Native in TypeScript, organised by atomic design. Reads MoMo SMS on the device and uploads them; a UI spec maps every screen to its endpoint.",
          tags: ["Expo", "React Native", "TypeScript"],
        },
        {
          dir: "backend/",
          name: "HTTP API",
          body: "Sign-in by SMS code, SMS uploads, transactions, spending summaries, budgets, recurring payments and notifications, with a documented contract and data model.",
          tags: ["FastAPI", "PostgreSQL", "Docker", "Caddy"],
        },
        {
          dir: "data-engineering/",
          name: "SMS-to-transactions pipeline",
          body: "Airflow parses, cleans, deduplicates and categorises messages from a RustFS lake into a Postgres star schema, and detects recurring payments automatically.",
          tags: ["Airflow", "Python", "RustFS", "Metabase"],
        },
      ],
    },
    {
      type: "points",
      title: "Decisions",
      items: [
        {
          title: "Read SMS, not bank feeds",
          body: "MoMo has no open feed for personal apps, but every transaction already lands on the phone as text. Parsing it is the only way to see everything without manual entry.",
        },
        {
          title: "Quality gates on every load",
          body: "The same SMS can arrive twice and formats drift between providers, so deduplication, quality checks and lineage run on each load, with email alerts for failures and drift.",
        },
        {
          title: "CI only where it changed",
          body: "GitHub Actions runs per folder: linting, format, type checks and tests for the backend; tests and a DAG-load check for the pipeline.",
        },
        {
          title: "One free server",
          body: "Backend and pipeline run in Docker on a single Oracle Cloud ARM machine behind Caddy HTTPS, with sign-in codes sent by SMS through Arkesel.",
        },
      ],
    },
    {
      type: "labeled",
      title: "Where it stands",
      items: [
        { state: "done", text: "Backend API with SMS sign-in and uploads, in Docker behind HTTPS" },
        { state: "done", text: "Pipeline with quality gates, lineage, recurring-payment detection and alerts" },
        { state: "done", text: "Path-filtered CI and the app's launch and sign-in screens" },
        { state: "next", text: "Onboarding and the Home, Transactions, Spending and Budgets tabs" },
      ],
    },
  ],
};

export { sikatrack };
