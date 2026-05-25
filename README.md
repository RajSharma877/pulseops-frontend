# PulseOps ⚡

[![Next.js](https://img.shields.io/badge/Next.js-15%2F16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-0F172A?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)
[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Recharts](https://img.shields.io/badge/Charts-Recharts-22B573?style=for-the-badge)](https://recharts.org)

**PulseOps** is a premium, real-time SRE (Site Reliability Engineering) and DevOps observability dashboard featuring agentic **AI-powered incident analysis**. It provides developers, systems engineers, and operations teams with instant insights into application health, automated root-cause analysis, and predictive anomaly detection.

Designed with high-end glassmorphism aesthetics, a deep-dark color scheme, fluid micro-interactions, and real-time visualization, PulseOps bridges the gap between raw telemetry and actionable, AI-driven operations.

---

## ✨ Key Features

- **🧠 AI-Powered Incident Analysis**
  - Seamlessly uploads raw log sequences (`INFO`, `WARN`, `ERROR`) to an Agentic AI Backend.
  - Automatically summarizes operational threats, predicts potential outages, and recommends steps for resolution.
  - Features high-risk event detection alerts powered by dynamic UI states.

- **📈 Real-Time Observability Charts**
  - Interactive, fluid time-series visualization using **Recharts**.
  - Tracks and plots critical system performance indicators simultaneously: **CPU Usage (%)**, **Memory Usage (%)**, and **API Latency (ms)**.

- **📊 High-Level Metrics Summary**
  - Instant status cards depicting key performance indicators (KPIs) with delta statistics showing recent spikes or changes.
  - Built-in dynamic aggregate **Risk Score** indicator for immediate threat assessment.

- **⚡ Unified Operations Hub**
  - Dedicated **Live Log Stream** panel displaying system messages in real-time.
  - **Incident Timeline** mapping critical status transitions chronologically.
  - **Recent Alerts** monitor flashing critical events requiring immediate triage.
  - Sleek, modern **Sidebar Navigation** offering logical structure for system operators.

---

## 🛠️ Technology Stack

PulseOps is engineered using a modern, performant, and type-safe frontend stack:

- **Core Framework**: [Next.js](https://nextjs.org/) (App Router architecture, React 19)
- **Styling & Theme**: [Tailwind CSS v4](https://tailwindcss.com/) with custom post-css configuration and harmonious high-contrast slate/violet color scheme
- **Visualization**: [Recharts](https://recharts.org/) for beautiful, responsive charting
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) & [Base UI](https://base-ui.com/) primitives
- **Icons**: [Lucide React](https://lucide.dev/) for high-resolution vector indicators
- **HTTP Client**: [Axios](https://axios-http.com/) for reliable communication with SRE agents

---

## 🚀 Getting Started

To run PulseOps locally, follow these simple setup steps:

### 1. Clone & Install Dependencies
First, make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

```bash
# Clone the repository
git clone https://github.com/RajSharma877/pulseops-frontend.git

# Navigate into the project folder
cd pulseops-frontend

# Install project dependencies
npm install
```

### 2. Configure Backend API
PulseOps connects to an AI Agentic Backend to run telemetry diagnostics and log analysis. Ensure that your API agent is running at:
`http://127.0.0.1:8000`

If you need to change this endpoint, modify `lib/api.ts`:
```typescript
import axios from "axios";

const API = axios.create({
  baseURL: "YOUR_BACKEND_ENDPOINT", // e.g. http://127.0.0.1:8000
});

export default API;
```

### 3. Run the Development Server
Launch the local development environment:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to explore the dashboard.

### 4. Build for Production
To build the optimized production-ready bundle:

```bash
npm run build
npm run start
```

---

## 📁 Repository Structure

```text
pulseops-frontend/
├── app/
│   ├── globals.css         # Custom utility tokens & premium dark-mode styling
│   ├── layout.tsx          # App entry point & fonts loading
│   └── page.tsx            # SRE dashboard home page grid layout
├── components/
│   ├── IncidentsAnalysis.tsx # AI-Agent integration & log analysis component
│   ├── LogsPanel.tsx       # Live diagnostic log console
│   ├── RecentAlerts.tsx    # Live notifications & critical warnings list
│   ├── Sidebar.tsx         # Sleek glassmorphism sidebar menu
│   ├── StatsCard.tsx       # Dashboard metric KPI cards
│   ├── SystemOverview.tsx  # Interactive multi-metric chart (Recharts)
│   ├── Timeline.tsx        # Event sequence and time-series history
│   └── Topbar.tsx          # Search bar, system status, & user profiles
├── lib/
│   ├── api.ts              # Axios custom client pointing to backend agent
│   ├── dummy_data.ts       # Fallback mock logs, alerts, & chart metrics
│   └── utils.ts            # Tailboxed styling merging utility functions
├── tailwind.config.ts      # Tailwind token mappings
└── tsconfig.json           # Strict TypeScript configuration
```

---

## 🤝 Contributing

Contributions to improve PulseOps are highly welcome!
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

Developed with 💜 by [Raj Sharma](https://github.com/RajSharma877).
