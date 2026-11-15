class CartPage {
  constructor(page) {
    this.page = page;
    this.items = page.locator(".cart_item");
    this.checkoutButton = page.locator("#checkout");
    this.continueShoppingButton = page.locator("#continue-shopping");
  }
  async removeItem(slug) { await this.page.locator(`#remove-${slug}`).click(); }
  async checkout() { await this.checkoutButton.click(); }
}
module.exports = { CartPage };
