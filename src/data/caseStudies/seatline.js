import seatlineLarge from "../../assets/projects/seatline-large.jpg";

// Case study content. Each section's `type` picks how CaseStudySection draws it.
const seatline = {
  title: "Seatline",
  summary:
    "Book intercity bus seats in Ghana: pick an exact seat, pay with mobile money or card, and board with a QR ticket.",
  live: "https://ghana-bus-booking.vercel.app",
  repo: "https://github.com/Jerry-Khobby/ghana-bus-booking",
  image: seatlineLarge,
  meta: [
    { label: "Role", value: "Sole engineer" },
    { label: "Status", value: "Live, Paystack test mode" },
    { label: "Stack", value: "React, NestJS, PostgreSQL" },
    { label: "Hosting", value: "Vercel, Render, Neon" },
  ],
  sections: [
    {
      type: "text",
      title: "The problem",
      paragraphs: [
        "Intercity travel in Ghana usually means going to the station early, queueing, and hoping a seat is left. Many buses don't leave at a fixed time either; **they leave when they're full**.",
        "Seatline brings both kinds of departure online. Passengers see real seat availability and pay with mobile money, the way most people in Ghana pay. Station agents see what's loading at their bay in real time and sell the remaining seats to walk-ins without double-booking anyone. Operators publish trips, track sales, and handle cancellations and refunds from one place.",
      ],
    },
    {
      type: "stats",
      title: "At a glance",
      items: [
        { value: "79", label: "API endpoints" },
        { value: "22", label: "Database tables" },
        { value: "250+", label: "Automated tests" },
        { value: "4", label: "User roles" },
      ],
    },
    {
      type: "rows",
      title: "Who uses it",
      items: [
        {
          dir: "passengers",
          name: "Book a seat from the phone",
          body: "Search trips, pick seats on a map drawn from the bus's real layout and hold 1–6 of them while paying with mobile money (MTN, Telecel, AirtelTigo) or card. Tickets arrive by email with a signed QR code and a PDF. Sign-in is a one-time code by email, no password.",
        },
        {
          dir: "station agents",
          name: "Run the bay in real time",
          body: "A live console for their bay shows the bus loading now and the seats left. Agents sell walk-in tickets for cash or mobile money, scan passengers on with the phone camera, and mark the trip departed. Fake, used and wrong-trip tickets are rejected.",
        },
        {
          dir: "operators",
          name: "Manage the fleet and timetable",
          body: "Draw seat layouts in a grid editor, manage routes, stations and bays, and publish fixed-time or leave-when-full trips. Invite staff, see sales reports with CSV export, and cancel a trip with automatic refunds for online buyers.",
        },
        {
          dir: "platform admin",
          name: "Onboard bus companies",
          body: "Add bus operators and send recovery sign-in links to their admins.",
        },
      ],
    },
    {
      type: "flow",
      title: "How it fits together",
      flow: {
        steps: ["React app · Vercel", "NestJS API · Render", "Postgres · Neon"],
        firstArrow: "/api →",
        returnNote:
          "seat and payment changes stream back over Server-Sent Events; Paystack webhooks and Brevo email sit behind provider interfaces",
      },
    },
    {
      type: "points",
      title: "Engineering highlights",
      items: [
        {
          title: "No double-booking under concurrency",
          body: "Taking a seat is a single conditional update (\"set held where still available\") inside a transaction, so two people clicking the same seat at the same moment can't both get it. Holds expire on their own while the passenger pays.",
        },
        {
          title: "Payments that tolerate retries",
          body: "Payment requests carry idempotency keys, so a retried or double-clicked payment never charges twice. Paystack webhooks are verified with an HMAC signature and recorded, so each one is processed only once.",
        },
        {
          title: "Email that survives outages",
          body: "Emails go to an outbox table and are sent in the background with retries, so a slow email provider never blocks a booking or a payment.",
        },
        {
          title: "Tamper-proof tickets",
          body: "QR codes are signed with HMAC. The scanner rejects forged codes, tickets already used and tickets for a different trip, and logs every scan.",
        },
        {
          title: "Secure sessions",
          body: "15-minute JWT access tokens with rotating refresh tokens in httpOnly cookies; reusing an old refresh token revokes the whole chain. One-time codes are hashed, expire and are rate-limited, and staff passwords use Argon2.",
        },
        {
          title: "Role-based access",
          body: "Passengers, agents, operator admins and platform admins each have their own guards, and operators only ever see their own data.",
        },
      ],
    },
    {
      type: "labeled",
      title: "Testing and delivery",
      items: [
        { state: "96", text: "unit tests across services, providers, signing and env checks (Vitest)" },
        { state: "158", text: "end-to-end API tests against a real Postgres database (Vitest + Supertest)" },
        { state: "27", text: "browser checks across the passenger, agent and operator journeys on the live site (Puppeteer)" },
        { state: "CI", text: "GitHub Actions runs lint, build, unit tests, migrations and end-to-end tests on every backend change" },
      ],
    },
    {
      type: "points",
      title: "What I learned",
      items: [
        {
          title: "Free hosting has limits",
          body: "Render's free plan blocks outgoing SMTP, so sign-in emails never arrived. I added a provider that sends over HTTPS (Brevo) behind the existing mailer interface.",
        },
        {
          title: "Cookies across two domains",
          body: "With the frontend and API on different domains, the refresh cookie would be third-party and blocked. Proxying /api through Vercel made it first-party.",
        },
        {
          title: "Keep slow work out of requests",
          body: "Sending email inside the payment request made replies time out. Moving email to a background outbox fixed it.",
        },
        {
          title: "Test against the real thing",
          body: "Scripted browser journeys on the live site caught bugs the API tests couldn't: requests firing before the session was restored, a date-parsing crash and a confirmation screen that disappeared too early.",
        },
      ],
    },
  ],
};

export { seatline };
