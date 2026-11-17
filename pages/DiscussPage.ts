import { expect, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class DiscussPage extends BasePage {
  private get composer(): Locator {
    return this.page.locator(".o_ComposerTextInput_textarea");
  }
  private get sendButton(): Locator {
    return this.page.locator(".o_Composer_buttonSend");
  }

  async open() {
    await this.goto("/web#action=mail.action_discuss");
  }

  async openChannel(name: string) {
    await this.page.getByText(name, { exact: true }).click();
  }

  async sendMessage(text: string) {
    await this.composer.fill(text);
    await this.composer.press("Enter");
  }

  async expectMessage(text: string) {
    await expect(
      this.page.locator(".o_Message_content", { hasText: text }),
    ).toBeVisible();
  }
}
