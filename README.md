# Job Application Tracker

A web app for tracking job applications through a Kanban-style board — move applications through stages (**Applied**, **Phone Screen**, **Interview**, **Offer**, **Rejected**) as your search progresses.

> **Status:** In development. The board, application cards, add/edit flows, and drag-and-drop are working.

## Tech Stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
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
├── App.tsx                        # Root application component, board state + localStorage persistence
├── main.tsx                       # Application entry point
├── index.css                      # Global styles
├── types.ts                       # CardData / StageDef / Rect types
├── data/
│   └── seed_stages.ts             # Initial stage definitions
├── hooks/
│   └── useHorizontalScroll.ts     # Horizontal scroll behavior for the board
└── components/
    ├── Header.tsx                 # App header
    ├── KanbanBoard.tsx            # Board layout
    ├── KanbanColumn.tsx           # Single stage column
    ├── ApplicationCard.tsx        # Card summary view
    ├── CardOverlay.tsx            # Expanded card detail/edit view
    └── AddApplicationModal.tsx    # "Add Application" modal
```

## Features

- Kanban board with Applied / Phone Screen / Interview / Offer / Rejected columns
- Add applications via modal
- Expand a card to view and edit notes, rejection reason, and learning focus
- Drag and drop cards between stages, and reorder cards within a stage
- Board state persists to `localStorage`

## Roadmap

- [ ] Delete applications
- [ ] Edit core fields (company, role, date) after creation

## License

No license has been chosen yet.
