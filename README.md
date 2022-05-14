[![Repo License](https://img.shields.io/badge/license-AGPL--3.0-orange?style=plastic)](https://github.com/NicholasBottone/Wordify/blob/main/LICENSE)
[![Website](https://img.shields.io/website?style=plastic&url=https%3A%2F%2Fwordifygame.vercel.app%2F)](https://wordifygame.vercel.app/)
[![GitHub branch checks state](https://img.shields.io/github/checks-status/NicholasBottone/Wordify/main?style=plastic)](https://github.com/NicholasBottone/Wordify/actions/workflows/playwright.yml?query=branch%3Amain)

# Wordify

Play now: https://wordifygame.vercel.app/

A social word game web app! Built on Next.js, React, Mongoose, React-Bootstrap, React Icons, Passport, SWR, next-connect, and Playwright!

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Scripts

- To install dependencies: `npm install`
- To run the app on the development server: `npm run dev`
- To build the app for production: `npm run build`
- To run the app in production (after it has been built): `npm start`
- To run the test suites: `npm test`
- To run the linting rules: `npm run lint`

## Environment Variables

In order to run the app, you must set the following environment variables (in your `.env` file):

- `MONGODB_URL`: The URL of the MongoDB database.
- `GOOGLE_CLIENT_ID`: The Google OAuth client ID.
- `GOOGLE_CLIENT_SECRET`: The Google OAuth client secret.
- `CRON_API_KEY`: The API key for the cron job endpoint.

In order to run the app's tests, you must also set the following additional environment variables (in your `.env.test` file):

- `TEST_USERNAME`: The email address for a test Google account.
- `TEST_PASSWORD`: The password for a test Google account.
- `TEST_2FA`: The 2FA base32 encoded secret for a test Google account.

## Specification

[Specification](/Specifications.md)

## Getting Started

[Getting Started](/GettingStarted.md)

## Contributing

This project is licensed under the [AGPLv3](https://www.gnu.org/licenses/agpl-3.0.html) license. Feel free to contribute to the project by submitting pull requests or opening an issue.
