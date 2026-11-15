const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");
const { InventoryPage } = require("../pages/InventoryPage");
const { standardUser, products } = require("../test-data/users");

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login(standardUser.username, standardUser.password);
});

test.describe("Inventory (TC-005 to TC-009)", () => {
  test("TC-005 inventory lists 6 products", async ({ page }) => {
    const inv = new InventoryPage(page);
    await expect(inv.items).toHaveCount(6);
  });
  test("TC-006 sort by price low to high", async ({ page }) => {
    const inv = new InventoryPage(page);
    await inv.sortBy("lohi");
    const prices = await inv.productPrices();
    expect(prices).toEqual([...prices].sort((a, b) => a - b));
  });
  test("TC-007 sort by name Z to A", async ({ page }) => {
    const inv = new InventoryPage(page);
    await inv.sortBy("za");
    const names = await inv.productNames();
    expect(names).toEqual([...names].sort().reverse());
  });
  test("TC-009 adding an item shows badge 1, removing clears it", async ({ page }) => {
    const inv = new InventoryPage(page);
    await inv.addToCart(products.backpack.slug);
    await expect(inv.cartBadge).toHaveText("1");
    await inv.removeFromCart(products.backpack.slug);
    await expect(inv.cartBadge).toHaveCount(0);
  });
});
