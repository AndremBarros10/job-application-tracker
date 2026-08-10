# Job Application Tracker

A web app for tracking job applications through a Kanban-style board — move applications through stages like **Applied**, **Interviewing**, **Offered**, and **Rejected** as your search progresses.

> **Status:** Early development. Core scaffolding is in place; the Kanban board and application data model are actively being built.

## Tech Stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [ESLint](https://eslint.org/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm

### Installation

```bash
git clone https://github.com/<your-username>/job-application-tracker.git
cd job-application-tracker
npm install
```

### Development

Start the dev server with hot module reloading:

```bash
npm run dev
```

### Other Scripts

```bash
npm run build    # Type-check and build for production
npm run preview  # Preview the production build locally
npm run lint      # Run ESLint
```

## Project Structure

```
src/
├── App.tsx       # Root application component
├── main.tsx      # Application entry point
└── Styles.css    # Global styles
```

## Roadmap

- [ ] Kanban board with Applied / Interviewing / Offered / Rejected columns
- [ ] Add, edit, and delete job applications
- [ ] Persist application data
- [ ] Drag-and-drop between stages

## License

No license has been chosen yet.
