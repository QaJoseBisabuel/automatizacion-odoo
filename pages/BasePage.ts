import { Page, Locator } from '@playwright/test';

export abstract class BasePage {
  constructor(protected readonly page: Page) {}

  async goto(path = '/') {
    await this.page.goto(path);
  }

  /** Localiza un input/elemento de Odoo por su atributo name. */
  protected byName(name: string): Locator {
    return this.page.locator(`[name="${name}"]`);
  }
}
