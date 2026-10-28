// `href` is the external repo or demo; `caseStudy` is an internal route.
const currentProjects = [
  {
    title: "SikaTrack",
    caseStudy: "/projects/sikatrack",
    href: "https://github.com/Jerry-Khobby/SikaTrack",
    thumb: "MoMo SMS\n→ FastAPI\n→ Airflow\n→ star schema",
    blurb:
      "A budgeting app for mobile-money users. It reads the MoMo SMS already on your phone, turns each one into a categorised transaction, spots recurring charges and tracks budgets, with nothing typed by hand.",
    status:
      "Backend, pipeline and CI are running; the Android app has launch and sign-in done, main tabs next.",
    tags: ["FastAPI", "Airflow", "PostgreSQL", "Expo", "Docker", "Metabase"],
  },
  {
    title: "Seatline",
    caseStudy: "",
    href: "https://github.com/Jerry-Khobby/ghana-bus-booking",
    thumb: "GR 4471-24\nAccra → Kumasi\nBay 6 · loading\nSeat B3 held",
    blurb:
      "Online booking for intercity buses in Ghana: see which bus is loading, pick a seat on a live map, pay with mobile money and board with a QR ticket. Agents and operators run the station from the same system.",
    status:
      "22 screens designed and the React frontend built; NestJS API, server-owned seat holds and Paystack next.",
    tags: ["React", "TypeScript", "NestJS", "Prisma", "Socket.IO", "Paystack"],
  },
];

const projects = [
  {
    title: "CampusBid",
    context: "Campus marketplace backend",
    href: "https://github.com/Jerry-Khobby/campus-bid-backend-web-app",
    thumb: "10+ modules\nescrow payments\n167 tests\n14 suites",
    blurb:
      "NestJS backend with an escrow-style Paystack flow, real-time chat over WebSockets and Redis caching, plus a Next.js frontend. Covered by 167 Jest unit tests and documented with Swagger.",
    tags: ["NestJS", "MongoDB", "Redis", "Socket.IO", "Paystack", "Jest"],
  },
  {
    title: "Sepsis Prediction API",
    context: "AI-integrated clinical backend",
    href: "https://github.com/Jerry-Khobby/early-prediction-sepsis-backend",
    thumb: "POST /predict\n→ CNN-LSTM\n→ risk + SHAP",
    blurb:
      "FastAPI service around a live CNN-LSTM model with manual and batch prediction, SHAP explanations on every result, and a Next.js dashboard for CSV upload and reports.",
    tags: ["FastAPI", "TensorFlow", "SHAP", "SQLAlchemy", "Next.js"],
  },
  {
    title: "Office Management System",
    context: "AmaliTech · enterprise data and API",
    href: "",
    thumb: "badge events\n→ ETL\n→ 50+ views\n→ RBAC API",
    blurb:
      "Multi-tenant schema across 10+ business domains, an attendance ETL from badge-reader events, seat-availability and no-show services, and role-specific KPI views.",
    tags: ["PostgreSQL", "SQL Views", "ETL", "REST", "RBAC"],
  },
  {
    title: "Music Streaming Pipeline",
    context: "Event-driven AWS",
    href: "https://github.com/Jerry-Khobby/Music-Streaming-Data-Pipeline",
    thumb: "S3 → EventBridge\n→ SQS → Step Fn\n→ Glue",
    blurb:
      "Ingests simulated streaming events and computes genre-level listening metrics in Glue, with CloudWatch logging, Slack alerts and Terraform-managed infrastructure.",
    tags: ["AWS Glue", "PySpark", "Step Functions", "Terraform"],
  },
  {
    title: "E-commerce Lakehouse",
    context: "Delta Lake on AWS",
    href: "https://github.com/Jerry-Khobby/Lakehouse-Architecture-for-E-Commerce-Transactions-",
    thumb: "S3\n→ quality checks\n→ Delta tables",
    blurb:
      "Loads transaction data into Delta Lake with Glue and PySpark after null, timestamp and duplicate checks, logging rejected records. Orchestrated by Step Functions with CI in GitHub Actions.",
    tags: ["Delta Lake", "PySpark", "Glue", "GitHub Actions"],
  },
  {
    title: "Heartbeat Monitoring",
    context: "Real-time streaming",
    href: "https://github.com/Jerry-Khobby/Real-Time-Customer-Heartbeat-Monitoring-System",
    thumb: "Kafka\n→ Spark Streaming\n→ Postgres\n→ Grafana",
    blurb:
      "Streams simulated heart-rate events through Kafka and Spark Structured Streaming, validates them and stores them in PostgreSQL, with live Grafana dashboards in Docker Compose.",
    tags: ["Kafka", "Spark", "PostgreSQL", "Grafana", "Docker"],
  },
  {
    title: "Collaborative Whiteboard",
    context: "Real-time backend",
    href: "https://github.com/Jerry-Khobby/real-time-collaborative-whiteboard",
    thumb: "rooms\ndraw events\nthrottled\n60 FPS",
    blurb:
      "Canvas rooms and draw-event broadcasting on NestJS and Socket.IO, with input throttling that holds 60 FPS under load, wired to a Next.js frontend.",
    tags: ["NestJS", "Socket.IO", "MongoDB", "Next.js"],
  },
];

export { currentProjects, projects };
