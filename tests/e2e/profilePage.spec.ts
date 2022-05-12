import { test, expect } from "@playwright/test";

test("Login and access profile page", async ({ page }) => {
  // Go to http://localhost:3000/
  await page.goto("http://localhost:3000/");

  // Click text=Login
  await Promise.all([
    page.waitForNavigation(),
    page.locator("text=Login").click(),
  ]);

  // Click [aria-label="Email or phone"]
  await page.locator('[aria-label="Email or phone"]').click();

  // Fill [aria-label="Email or phone"]
  await page
    .locator('[aria-label="Email or phone"]')
    .fill(process.env.TEST_USERNAME!);

  // Press Enter
  await Promise.all([
    page.waitForNavigation(),
    page.locator('[aria-label="Email or phone"]').press("Enter"),
  ]);

  // Fill [aria-label="Enter your password"]
  await page
    .locator('[aria-label="Enter your password"]')
    .fill(process.env.TEST_PASSWORD!);

  // Press Enter
  await Promise.all([
    page.waitForNavigation(),
    page.locator('[aria-label="Enter your password"]').press("Enter"),
  ]);

  // Click a[role="button"]:has-text("Wowie Tester")
  await page.locator('a[role="button"]:has-text("Wowie Tester")').click();

  // Click a:has-text("Profile")
  await Promise.all([
    page.waitForNavigation({ url: "http://localhost:3000/profile" }),
    page.locator('a:has-text("Profile")').click(),
  ]);

  // Click text=Home
  await page.locator("text=Home").click();
  await expect(page).toHaveURL("http://localhost:3000/");
});
