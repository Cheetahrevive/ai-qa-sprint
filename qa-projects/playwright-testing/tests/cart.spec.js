const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");
const { InventoryPage } = require("../pages/InventoryPage");
const { CartPage } = require("../pages/CartPage");
const { standardUser, products } = require("../test-data/users");

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login(standardUser.username, standardUser.password);
});

test.describe("Cart (TC-012, TC-013)", () => {
  test("TC-012 cart lists the items that were added", async ({ page }) => {
    const inv = new InventoryPage(page);
    await inv.addToCart(products.backpack.slug);
    await inv.addToCart(products.bikeLight.slug);
    await inv.openCart();
    const cart = new CartPage(page);
    await expect(cart.items).toHaveCount(2);
    await expect(page.locator(".inventory_item_name")).toContainText([products.backpack.name, products.bikeLight.name]);
  });
  test("TC-013 removing an item in the cart leaves the other item", async ({ page }) => {
    const inv = new InventoryPage(page);
    await inv.addToCart(products.backpack.slug);
    await inv.addToCart(products.bikeLight.slug);
    await inv.openCart();
    const cart = new CartPage(page);
    await cart.removeItem(products.bikeLight.slug);
    await expect(cart.items).toHaveCount(1);
    await expect(page.locator(".inventory_item_name")).toHaveText(products.backpack.name);
  });
});
