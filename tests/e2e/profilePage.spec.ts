import { test } from "@playwright/test";
import get2fa from "../2fa";

test("Login and visit profile page", async ({ page }) => {
  // Go to http://localhost:3000/
  await page.goto("http://localhost:3000/");

  // Click text=Login
  await Promise.all([
    page.waitForNavigation(),
    page.locator("text=Login").click(),
  ]);

  // Fill [aria-label="Email or phone"]
  await page
    .locator('[aria-label="Email or phone"]')
    .fill("mymocktesterwowie@gmail.com");

  // Press Enter
  await Promise.all([
    page.waitForNavigation(),
    page.locator('[aria-label="Email or phone"]').press("Enter"),
  ]);

  // Fill [aria-label="Enter your password"]
  await page
    .locator('[aria-label="Enter your password"]')
    .fill("37}`Z^G]Zab26_#b");

  // Press Enter
  await Promise.all([
    page.waitForNavigation(),
    page.locator('[aria-label="Enter your password"]').press("Enter"),
  ]);

  // Fill [aria-label="Enter code"]
  await page.locator('[aria-label="Enter code"]').fill(get2fa());

  // Press Enter
  await Promise.all([
    page.waitForNavigation({ url: "http://localhost:3000/" }),
    page.locator('[aria-label="Enter code"]').press("Enter"),
  ]);

  // Click a[role="button"]:has-text("Wowie Tester")
  await page.locator('a[role="button"]:has-text("Wowie Tester")').click();

  // Click a:has-text("Profile")
  await Promise.all([
    page.waitForNavigation({ url: "http://localhost:3000/profile" }),
    page.locator('a:has-text("Profile")').click(),
  ]);
});
