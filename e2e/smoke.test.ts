import { test, expect } from "@playwright/test";

test.describe("Portfolio Smoke Test", () => {
  test("should load the app and navigate correctly", async ({ page }) => {
    // Navigate to the app
    await page.goto("/");

    // Wait for React to hydrate and render the main components (Vite cold starts can be slow)
    const aboutHeading = page.getByRole("heading", { name: "About" });
    await expect(aboutHeading).toBeVisible({ timeout: 15000 });

    // Verify document title updates after hydration
    await expect(page).toHaveTitle(/Mohammed Hisham Haris \| About/);

    // Navigate to Contact tab (desktop)
    const contactTab = page.locator("aside button:has-text('Contact')");
    await contactTab.click();

    // Verify Contact form appears
    const formHeading = page.getByRole("heading", { name: "Contact" });
    await expect(formHeading).toBeVisible();

    // Verify form exists
    const nameInput = page.getByPlaceholder("Your name");
    await expect(nameInput).toBeVisible();
  });
});
