import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";
import { loadEnvConfig } from "@next/env";

// @ts-ignore Load environment variables
// process.env.NODE_ENV = "test";
loadEnvConfig(process.cwd());

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  testDir: "./tests",
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000,
  },
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Do not retry */
  retries: 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: "http://localhost:3000",

    /* Save trace for all tests. See https://playwright.dev/docs/trace-viewer */
    trace: "on",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "Desktop Chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: "test-results/",

  /* Run your local dev server before starting the tests */
  webServer: {
    command: "npm run build && npm run start",
    url: "http://localhost:3000",
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
};

export default config;
