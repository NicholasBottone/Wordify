# Getting Started Guide

This guide details some of the design patterns and overall philosophies that should be followed while working on the Wordify project repository.

## IDE & Plugins

We use [Visual Studio Code](https://code.visualstudio.com/) with the following extensions: [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), and [SonarLint](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode). If you plan on running tests, install the [Playwright](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) extension.

## Git

The `main` branch is the production branch. Changes to the `main` branch are automatically deployed to the production website. Code should not be directly pushed to the `main` branch without first using a pull request and receiving an approving review from another contributor. Pull requests should be created and merged frequently to avoid any merge conflicts.

## TypeScript

We use strictly defined types as frequently as possible. We should never use `@ts-ignore`, and attempt to limit our use of the `any` type as much as possible. We can manually define types and interfaces as necessary to limit the use of the `any` type.

## React & Next.js

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

Any React file in the `pages` directory of the project will represent a publicly visible page, whereas any React file in the `components` directory of the project will represent a piece that can be used to build a page. All React files should end in the extension `.tsx` and should `export default` the component. Only one component should be exported from each file. Pages should refactor as much of their functionality to components as possible, leaving most of the logic in the component files.

Next.js features a routing system built-in. The routing system is used for navigation between multiple pages. The name of the file that the page is stored in inside the `pages` directory will define where that page can be accessed on the URL. For example, a file called `index.tsx` can be accessed from `example.com/`, whereas a file called `about.tsx` can be accessed from `example.com/about`.

The names of files in the `pages` directory should always start with a lowercase letter and should use hyphens (kabob case) to separate words in the event of multiple words (i.e., `about-us.tsx`). THe names of files in the components directory should always start with an uppercase letter and should use camel case to separate words (i.e., `SideMenu.tsx`).

Mention data fetching (TODO)

## Bootstrap

Use [React-Bootstrap](https://react-bootstrap.github.io/)! Avoid using CSS as much as possible (lol). If you want additional utility classes, use the classes from [Bootstrap](https://getbootstrap.com/).

## Icons

Use [React Icons](https://react-icons.github.io/react-icons/)!

## Animations

Use [react-spring](https://www.react-spring.io/)!

## Images

Include images (and other static files) in the `/public` directory and then reference them in your code from the `src` attribute.

## Testing

We use [Playwright](https://playwright.dev/) for end-to-end testing of the application. Playwright is a headless browser testing framework that allows you to test your application in a browser without having to install a browser. Install the [Playwright](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) extension in Visual Studio Code to more easily run the tests, record tests, and follow the test output. To run the tests from the terminal, run `npm test`. You must shut down your dev server before running the tests! You can read the Playwright reports and view the recorded trace outputs. It is highly recommended that you at minimum read the [Playwright Getting Started guide](https://playwright.dev/docs/intro).
