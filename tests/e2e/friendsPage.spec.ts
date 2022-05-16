import { test, expect } from "@playwright/test";
import { login } from "../2fa";

test("Test searching on the friends page and stats pages", async ({ page }) => {
  // Go to http://localhost:3000/
  await page.goto("http://localhost:3000/");

  // Login
  await login(page);

  // Click text=Today's Stats
  await Promise.all([
    page.waitForNavigation({ url: "http://localhost:3000/daily-info" }),
    page.locator("text=Today's Stats").click(),
  ]);

  // Click text=You must be logged in to view the daily puzzle summary.
  await expect(page.locator("main")).toContainText("must be logged in");

  // Click text=Friends
  await Promise.all([
    page.waitForNavigation({ url: "http://localhost:3000/friends" }),
    page.locator("text=Friends").click(),
  ]);

  // Click [placeholder="Search"]
  await page.locator('[placeholder="Search"]').click();

  // Fill [placeholder="Search"]
  await page.locator('[placeholder="Search"]').fill("bottone");

  // Assert text: "Nicholas Bottone" and "0 games won, 0 games played"
  await expect(page.locator("main")).toContainText("Nicholas Bottone");
  await expect(page.locator("main")).toContainText(
    "0 games won, 0 games played"
  );

  // Click text=Add Friend
  await page.locator("text=Add Friend").click();

  // Click a:has-text("Wordify")
  await Promise.all([
    page.waitForNavigation({ url: "http://localhost:3000/" }),
    page.locator('a:has-text("Wordify")').click(),
  ]);

  // Click a:has-text("Friends")
  await page.locator('a:has-text("Friends")').click();
  await expect(page).toHaveURL("http://localhost:3000/friends");

  // Assert text: Nicholas Bottone
  await expect(page.locator("main")).toContainText("Nicholas Bottone");

  // Click text=Unfriend
  await page.locator("text=Unfriend").click();

  // Click a[role="button"]:has-text("Wowie Tester")
  await page.locator('a[role="button"]:has-text("Wowie Tester")').click();

  // Click a:has-text("Profile")
  await Promise.all([
    page.waitForNavigation({ url: "http://localhost:3000/profile" }),
    page.locator('a:has-text("Profile")').click(),
  ]);

  // Assert text: have not played
  await expect(page.locator("main")).toContainText("have not played");

  // Click text=Statistics
  await Promise.all([
    page.waitForNavigation({ url: "http://localhost:3000/statistics" }),
    page.locator("text=Statistics").click(),
  ]);

  // Assert text: 0%
  await expect(page.locator("main")).toContainText("0%");

  // Assert text: 0 sec
  await expect(page.locator("main")).toContainText("0 sec");
});
