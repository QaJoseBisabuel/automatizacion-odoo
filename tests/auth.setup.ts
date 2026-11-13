import { test as setup, expect } from '../fixtures/pages.fixture';

const AUTH_FILE = 'playwright/.auth/user.json';

setup('login en Odoo', async ({ page, loginPage }) => {
  const user = process.env.ODOO_USER;
  const pass = process.env.ODOO_PASS;
  if (!process.env.ODOO_URL || !user || !pass) {
    throw new Error('Faltan ODOO_URL, ODOO_USER u ODOO_PASS en el archivo .env');
  }

  await loginPage.open();
  await loginPage.login(user, pass);
  await expect(page).toHaveURL(/\/odoo|\/web(?!\/login)/);

  await page.context().storageState({ path: AUTH_FILE });
});
