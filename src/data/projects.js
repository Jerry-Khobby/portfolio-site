import campusbidShot from "../assets/projects/campusbid.jpg";
import seatlineShot from "../assets/projects/seatline.jpg";

// Links: `caseStudy` (internal route), `live` (deployed site) and `repo`.
// The title opens the first of those that exists; the others are listed
// under the description. `image` replaces the text thumbnail with a screenshot.
const currentProjects = [
  {
    title: "SikaTrack",
    caseStudy: "/projects/sikatrack",
    repo: "https://github.com/Jerry-Khobby/SikaTrack",
    thumb: "MoMo SMS\n→ FastAPI\n→ Airflow\n→ star schema",
    blurb:
      "A budgeting app for mobile-money users. It reads the MoMo SMS already on your phone, turns each one into a categorised transaction, spots recurring charges and tracks budgets, with nothing typed by hand.",
    status:
      "Backend, pipeline and CI are running; the Android app has launch and sign-in done, main tabs next.",
    tags: ["FastAPI", "Airflow", "PostgreSQL", "Expo", "Docker", "Metabase"],
  },
];

const projects = [
  {
    title: "Seatline",
    context: "Live · full-stack bus booking platform for Ghana",
    caseStudy: "/projects/seatline",
    live: "https://ghana-bus-booking.vercel.app",
    repo: "https://github.com/Jerry-Khobby/ghana-bus-booking",
    image: seatlineShot,
    blurb:
      "Book intercity bus seats in Ghana: separate apps for passengers, station agents and operators, for buses that leave on time or when full. A NestJS and PostgreSQL API (79 endpoints, 22 tables) where two people can never take the same seat, Paystack mobile money with signed webhooks, HMAC-signed QR tickets and live updates over Server-Sent Events, covered by 250+ automated tests.",
    tags: ["TypeScript", "NestJS", "React", "PostgreSQL", "Prisma", "Paystack", "Docker"],
  },
  {
    title: "CampusBid",
    context: "Live · campus marketplace",
    live: "https://campusbid-ecommerce-frontend-web-ap.vercel.app/home",
    repo: "https://github.com/Jerry-Khobby/campus-bid-backend-web-app",
    image: campusbidShot,
    blurb:
      "A marketplace where students buy from vendors on campus. NestJS backend with 10+ modules, an escrow-style Paystack flow, real-time chat over WebSockets and Redis caching, plus a Next.js frontend. Covered by 167 Jest unit tests across 14 suites and documented with Swagger.",
    tags: ["NestJS", "MongoDB", "Redis", "Socket.IO", "Paystack", "Jest"],
  },
  {
    title: "Sepsis Prediction API",
    context: "AI-integrated clinical backend",
    repo: "https://github.com/Jerry-Khobby/early-prediction-sepsis-backend",
    thumb: "POST /predict\n→ CNN-LSTM\n→ risk + SHAP",
    blurb:
      "FastAPI service around a live CNN-LSTM model with manual and batch prediction, SHAP explanations on every result, and a Next.js dashboard for CSV upload and reports.",
    tags: ["FastAPI", "TensorFlow", "SHAP", "SQLAlchemy", "Next.js"],
  },
  {
    title: "Office Management System",
    context: "AmaliTech · internal enterprise backend",
    thumb: "badge events\n→ ETL\n→ 50+ views\n→ RBAC API",
    blurb:
      "Multi-tenant schema across 10+ business domains, an attendance ETL that turns badge-reader events into daily status and punctuality records, seat-availability and no-show services, and 50+ role-specific endpoints with RBAC, auth guards and pagination.",
    tags: ["Java", "PostgreSQL", "SQL Views", "ETL", "JWT", "RBAC"],
  },
  {
    title: "Music Streaming Pipeline",
    context: "Event-driven AWS",
    repo: "https://github.com/Jerry-Khobby/Music-Streaming-Data-Pipeline",
    thumb: "S3 → EventBridge\n→ SQS → Step Fn\n→ Glue",
    blurb:
      "Ingests simulated streaming events and computes genre-level listening metrics in Glue, with CloudWatch logging, Slack alerts and Terraform-managed infrastructure.",
    tags: ["AWS Glue", "PySpark", "Step Functions", "Terraform"],
  },
  {
    title: "E-commerce Lakehouse",
    context: "Delta Lake on AWS",
    repo: "https://github.com/Jerry-Khobby/Lakehouse-Architecture-for-E-Commerce-Transactions-",
    thumb: "S3\n→ quality checks\n→ Delta tables",
    blurb:
      "Loads transaction data into Delta Lake with Glue and PySpark after null, timestamp and duplicate checks, logging rejected records. Orchestrated by Step Functions with CI in GitHub Actions.",
    tags: ["Delta Lake", "PySpark", "Glue", "GitHub Actions"],
  },
  {
    title: "Heartbeat Monitoring",
    context: "Real-time streaming",
    repo: "https://github.com/Jerry-Khobby/Real-Time-Customer-Heartbeat-Monitoring-System",
    thumb: "Kafka\n→ Spark Streaming\n→ Postgres\n→ Grafana",
    blurb:
      "Streams simulated heart-rate events through Kafka and Spark Structured Streaming, validates them and stores them in PostgreSQL, with live Grafana dashboards in Docker Compose.",
    tags: ["Kafka", "Spark", "PostgreSQL", "Grafana", "Docker"],
  },
  {
    title: "Collaborative Whiteboard",
    context: "Real-time backend",
    repo: "https://github.com/Jerry-Khobby/real-time-collaborative-whiteboard",
    thumb: "rooms\ndraw events\nthrottled\n60 FPS",
    blurb:
      "Canvas rooms and draw-event broadcasting on NestJS and Socket.IO, with input throttling that holds 60 FPS under load, wired to a Next.js frontend.",
    tags: ["NestJS", "Socket.IO", "MongoDB", "Next.js"],
  },
];

export { currentProjects, projects };
