# FS Pokedex

A small React pokedex application built for CI/CD practice in the Full Stack Open course. The app fetches Pokemon data from [PokeAPI](https://pokeapi.co/), renders a list view, and lets you open individual Pokemon pages with stats and abilities.

## Features

- Browse the first 50 Pokemon from PokeAPI
- Open a dedicated page for each Pokemon
- View base stats and abilities
- Navigate between previous and next Pokemon
- Run unit tests with Jest and integration tests with Playwright
- Build and serve the production bundle with Express

## Tech Stack

- React
- React Router
- Axios
- Webpack
- Express
- Jest + Testing Library
- Playwright
- GitHub Actions

## Getting Started

### Prerequisites

- Node.js
- npm

CI currently uses Node.js `24` in the deployment workflow and `lts/*` in the Playwright workflow.

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm start
```

The app runs on `http://localhost:8080`.

### Build the production bundle

```bash
npm run build
```

### Start the production server

```bash
npm run start-prod
```

The production server serves the built app from `dist/` on `http://localhost:5001` by default.

## Available Scripts

- `npm start` - starts the webpack development server on port `8080`
- `npm run build` - creates a production bundle in `dist/`
- `npm run start-prod` - starts the Express server from [`app.js`](/c:/Users/umidr/FullStackOpen%20Projects/ci-cd/fs-pokedex/app.js)
- `npm test` - runs Jest tests
- `npm run test:e2e` - runs Playwright end-to-end tests
- `npm run eslint` - runs ESLint across `.js` and `.jsx` files

## Testing

### Unit tests

Jest tests live in `test/` and cover:

- top-level app data fetching and error handling
- Pokemon list rendering
- Pokemon detail rendering, stats, abilities, and navigation links

Run them with:

```bash
npm test
```

### End-to-end tests

Playwright tests live in `e2e-tests/`. They:

- open the front page
- verify list content is shown
- navigate to a Pokemon detail page

Run them with:

```bash
npm run test:e2e
```

The Playwright config starts the app automatically with:

```bash
npm run build && npm run start-prod
```

## CI/CD

This project includes two GitHub Actions workflows:

### Deployment pipeline

File: [`.github/workflows/pipeline.yml`](/c:/Users/umidr/FullStackOpen%20Projects/ci-cd/fs-pokedex/.github/workflows/pipeline.yml)

On pushes and pulls to `main`, the workflow:

1. Checks out the code
2. Installs dependencies
3. Runs ESLint
4. Runs Jest tests
5. Builds the app
6. Triggers deployment through `RENDER_DEPLOY_HOOK`

### Playwright workflow

File: [`.github/workflows/playwright.yml`](/c:/Users/umidr/FullStackOpen%20Projects/ci-cd/fs-pokedex/.github/workflows/playwright.yml)

On pushes and pull requests to `main` or `master`, the workflow:

1. Installs dependencies
2. Installs Playwright browsers
3. Runs the end-to-end suite
4. Uploads the Playwright report as an artifact

## Project Structure

```text
.
|-- .github/workflows/
|-- e2e-tests/
|-- public/
|-- src/
|-- test/
|-- app.js
|-- build_step.sh
|-- package.json
|-- playwright.config.js
|-- webpack.config.js
```

## Notes

- The frontend fetches data from the public PokeAPI service, so an internet connection is required when running the app normally.
- The Express server exposes `/version`.
- There is also a `/health` route in [`app.js`](/c:/Users/umidr/FullStackOpen%20Projects/ci-cd/fs-pokedex/app.js), but it currently throws an error and should be fixed before relying on it for health checks.
- On this Windows machine, `npm` in PowerShell required using `npm.cmd` because PowerShell script execution is disabled.
