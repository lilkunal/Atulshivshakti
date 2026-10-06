import { expect, test } from "@playwright/test";

test.describe("Atul Shiv Shakti — consultation", () => {
  test("WhatsApp consult is the booking path", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: /Atul Shiv Shakti/i }).first()).toBeVisible();
    const wa = page.locator('a[href*="wa.me"]');
    await expect(wa.first()).toBeVisible();
    const href = await wa.first().getAttribute("href");
    expect(href || "").toMatch(/Namaste|Atul/i);
  });

  test("kundli section is on the page", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("#kundli")).toBeAttached();
    await page.locator('a[href="#kundli"]').first().click();
    await expect(page.locator("#kundli")).toBeVisible();
  });
});
