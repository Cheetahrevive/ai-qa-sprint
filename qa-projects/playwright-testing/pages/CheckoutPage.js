class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstName = page.locator("#first-name");
    this.lastName = page.locator("#last-name");
    this.postalCode = page.locator("#postal-code");
    this.continueButton = page.locator("#continue");
    this.finishButton = page.locator("#finish");
    this.error = page.locator('[data-test="error"]');
    this.completeHeader = page.locator(".complete-header");
  }
  async fillInfo({ firstName, lastName, zip }) {
    if (firstName) await this.firstName.fill(firstName);
    if (lastName) await this.lastName.fill(lastName);
    if (zip) await this.postalCode.fill(zip);
    await this.continueButton.click();
  }
  async summaryTotal() {
    const text = await this.page.locator(".summary_total_label").textContent();
    return parseFloat(text.replace("Total: $", ""));
  }
  async finish() { await this.finishButton.click(); }
}
module.exports = { CheckoutPage };
