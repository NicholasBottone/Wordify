import speakeasy from "speakeasy";
import { Page } from "@playwright/test";
// @ts-ignore
import base32 from "base32.js";

const SECRET_KEY = process.env.TEST_2FA!.toUpperCase().replace(/ /g, "");
const SECRET_KEY_BUFFER = Buffer.from(base32.decode(SECRET_KEY));

export function get2faToken() {
  return speakeasy.totp({
    // @ts-ignore
    secret: SECRET_KEY_BUFFER,
    encoding: "base32",
  });
}

export async function login(page: Page) {
  // Click text=Login
  await Promise.all([
    page.waitForNavigation(),
    page.locator("text=Login").click(),
  ]);

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

  // Fill [aria-label="Enter code"]
  await page.locator('[aria-label="Enter code"]').fill(get2faToken());

  // Press Enter
  await Promise.all([
    page.waitForNavigation({ url: "http://localhost:3000/" }),
    page.locator('[aria-label="Enter code"]').press("Enter"),
  ]);
}
