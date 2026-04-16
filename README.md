# Project Portfolio Showcase

Personal portfolio built with React and Tailwind utilities, focused on project cards, category filtering, README modal previews, and contact information.

## Features

- Responsive project grid with category filters
- Project card actions for README and GitHub
- Optional Live Demo action per project (shown only when `livedemo` exists)
- Readme modal with project details
- Skills and contact sections
- Animated hero and hover interactions

## Current Behavior Notes

- `ResumeCraft` includes a `livedemo` URL, so it shows a **Live Demo** button.
- Other projects do not have `livedemo`, so they do not show that button.
- The Certifications section has been removed from the Skills area.

## Project Structure

```text
ProjectPage/
  public/
    index.html
  src/
    App.css
    App.js
    index.js
    ProjectPage.jsx
  build/
  package.json
  postcss.config.js
  tailwind.config.js
  README.md
```

## Getting Started

### Prerequisites

- Node.js 16+
- npm

### Install

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

You can also use:

```bash
npm start
```

### Build

```bash
npm run build
```

## Scripts

- `npm run dev` - starts development server
- `npm start` - starts development server
- `npm run build` - production build
- `npm test` - test runner
- `npm run eject` - CRA eject

## Customizing Project Cards

Project data is in `src/ProjectPage.jsx` under `PROJECTS`.

Example with optional live demo:

```js
{
  id: 1,
  name: "ResumeCraft",
  tagline: "Resume / CV Builder Dashboard",
  description: "...",
  tech: ["Next.js", "Tailwind CSS", "React"],
  category: "Web App",
  github: "https://github.com/username/repo",
  livedemo: "https://your-demo-url.vercel.app/", // optional
  color: "#6EE7B7",
  icon: "📄",
  readme: "..."
}
```

If `livedemo` is missing, the Live Demo button will not render.
