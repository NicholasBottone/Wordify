import { test, expect } from "@playwright/test";

test("Play puzzle as guest and lose", async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });

  // Go to http://localhost:3000/
  await page.goto("http://localhost:3000/");

  // Click text=Play as Guest
  await Promise.all([
    page.waitForNavigation({ url: "http://localhost:3000/game" }),
    page.locator("text=Play as Guest").click(),
  ]);

  await page.waitForSelector(".board");

  // Ensure that the timer is counting
  expect(await page.locator(".timer").textContent()).toBe("0");
  await page.waitForTimeout(1000);
  expect(await page.locator(".timer").textContent()).toBe("1");

  const letters = ["W", "O", "R", "D", "S"];

  for (let i = 0; i < 3; i++) {
    // Type each letter of the word WORDS on the keyboard
    for (const letter of letters) {
      await page.keyboard.type(letter);
    }
    // Press Enter
    await page.keyboard.press("Enter");

    // Click each letter of the word WORDS on the screen keyboard
    for (const letter of letters) {
      await page.locator(`.key >> text='${letter}'`).click();
    }
    // Click the button "ENTER"
    await page.locator(".key >> text=ENTER").click();
  }

  // Assert that the text "You failed!" is displayed
  await expect(page.locator(".gameOver")).toContainText("You failed!");

  // Assert that the text "Attempt: X / 6" is displayed
  await expect(page.locator(".gameOver")).toContainText("Attempt: X / 6");

  // Ensure that the timer has stopped counting
  const timer = await page.locator(".timer").textContent();
  await page.waitForTimeout(1500);
  expect(await page.locator(".timer").textContent()).toBe(timer);

  // Click text=Get a new word!
  await Promise.all([
    page.waitForNavigation({ url: "http://localhost:3000/game" }),
    page.locator("text=Get a new word!").click(),
  ]);
});
