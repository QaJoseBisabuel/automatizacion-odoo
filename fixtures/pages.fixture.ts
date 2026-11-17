import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { DiscussPage } from "../pages/DiscussPage";

type Pages = { loginPage: LoginPage; discussPage: DiscussPage };

export const test = base.extend<Pages>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  discussPage: async ({ page }, use) => {
    await use(new DiscussPage(page));
  },
});

export { expect } from "@playwright/test";
