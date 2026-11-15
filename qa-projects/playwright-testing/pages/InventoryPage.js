class InventoryPage {
  constructor(page) {
    this.page = page;
    this.items = page.locator(".inventory_item");
    this.cartBadge = page.locator(".shopping_cart_badge");
    this.cartLink = page.locator(".shopping_cart_link");
    this.sortSelect = page.locator(".product_sort_container");
  }
  async addToCart(slug) { await this.page.locator(`#add-to-cart-${slug}`).click(); }
  async removeFromCart(slug) { await this.page.locator(`#remove-${slug}`).click(); }
  async openCart() { await this.cartLink.click(); }
  async sortBy(value) { await this.sortSelect.selectOption(value); }
  async productNames() { return this.page.locator(".inventory_item_name").allTextContents(); }
  async productPrices() {
    const texts = await this.page.locator(".inventory_item_price").allTextContents();
    return texts.map((t) => parseFloat(t.replace("$", "")));
  }
}
module.exports = { InventoryPage };
