# Jones Automation Exercise

This project contains the automated tests for the Jones home assignment.

The automation was implemented using Playwright with JavaScript.

## Requirements

Before running the project, make sure the following are installed:

- Node.js
- npm

## Installation

Clone the repository and install the project dependencies:

```bash
npm install
```

Install the Playwright browsers:

```bash
npx playwright install
```

## Running the Tests

### Chromium - Headless Mode

```bash
npm test
```

Runs the automated tests on Chromium in headless mode.

### Chromium - Headed Mode

```bash
npm run test:headed
```

Runs the automated tests on Chromium with the browser visible.

### All Browsers

```bash
npm run test:all
```

Runs the automated tests on all configured browsers:

- Chromium
- Firefox
- WebKit

## Project Structure

```text
jones-automation-exercise/
├── pages/
│   └── callback.page.js
├── tests/
│   └── callback-form.spec.js
├── utils/
│   └── screenshot.js
├── screenshots/
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md
```

## Test Coverage

The automated tests cover:

- Landing page loading
- Page title validation
- Callback form completion
- Number of Employees selection
- Screenshot capture before submitting the form
- Form submission
- Thank You page validation

## Project Structure and Approach

A small Page Object Model is used to separate the page locators and actions from the test scenarios.

The base URL and browser configuration are defined in `playwright.config.js`.

The `utils` directory contains a small helper used to add a timestamp to screenshot filenames, preventing screenshots from previous test executions from being overwritten.

## Screenshots

A full-page screenshot is captured after filling the callback form and before clicking the **Request a call back** button, as required by the exercise.

The screenshot filename contains a timestamp, for example:

```text
callback-form-before-submit-2026-08-10T12-30-45-123Z.png
```

Screenshots are saved under the `screenshots` directory.
