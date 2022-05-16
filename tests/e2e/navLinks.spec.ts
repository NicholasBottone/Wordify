import { test, expect } from "@playwright/test";

test("Test clicking on navbar links without login", async ({ page }) => {
  // Go to http://localhost:3000/
  await page.goto("http://localhost:3000/");

  // Click nav button Today's Stats
  await Promise.all([
    page.waitForNavigation({ url: "http://localhost:3000/daily-info" }),
    page.locator("nav >> text=Today's Stats").click(),
  ]);

  // Assert that text is present: must be logged in
  await expect(page.locator("main")).toContainText("must be logged in");

  // Click nav button Friends
  await Promise.all([
    page.waitForNavigation({ url: "http://localhost:3000/friends" }),
    page.locator("nav >> text=Friends").click(),
  ]);

  // Assert that text is present: must be logged in
  await expect(page.locator("main")).toContainText("must be logged in");

  // Click nav logo
  await Promise.all([
    page.waitForNavigation({ url: "http://localhost:3000/" }),
    page.locator("nav >> text=Wordify").click(),
  ]);

  // Click nav button About
  await Promise.all([
    page.waitForNavigation({ url: "http://localhost:3000/about" }),
    page.locator("nav >> text=About").click(),
  ]);

  // Click nav button Privacy Policy
  await Promise.all([
    page.waitForNavigation({ url: "http://localhost:3000/privacy" }),
    page.locator("nav >> text=Privacy Policy").click(),
  ]);

  // Click GitHub icon
  await page.locator("nav >> a >> svg").click();
  await expect(page).toHaveURL("https://github.com/NicholasBottone/Wordify");
});
