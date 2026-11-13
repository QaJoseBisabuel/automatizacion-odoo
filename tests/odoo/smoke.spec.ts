import { test, expect } from "../../fixtures/pages.fixture";

test("Odoo abre sesión iniciada @smoke", async ({ page }) => {
  // ("/oddo") es para versiones de la 17 en adelante
  await page.goto("/web");
  await expect(page).not.toHaveURL(/login/);
  await expect(page.getByText("Mitchell Admin")).toBeVisible();
});
