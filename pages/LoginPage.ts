import { expect, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  private get userInput(): Locator {
    return this.byName('login');
  }
  private get passInput(): Locator {
    return this.byName('password');
  }
  private get submitButton(): Locator {
    return this.page.getByRole('button', { name: /iniciar sesi|log in/i });
  }
  private get errorAlert(): Locator {
    return this.page.locator('.alert-danger');
  }

  async open() {
    await this.goto('/web/login');
  }

  async login(user: string, pass: string) {
    await this.userInput.fill(user);
    await this.passInput.fill(pass);
    await this.submitButton.click();
  }

  async expectLoginError() {
    await expect(this.errorAlert).toBeVisible();
    await expect(this.page).toHaveURL(/login/);
  }
}
