const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");
const { InventoryPage } = require("../pages/InventoryPage");
const { CartPage } = require("../pages/CartPage");
const { CheckoutPage } = require("../pages/CheckoutPage");
const { standardUser, checkoutInfo, products } = require("../test-data/users");

async function startCheckout(page) {
  const login = new LoginPage(page);
  await login.goto();
  await login.login(standardUser.username, standardUser.password);
  const inv = new InventoryPage(page);
  await inv.addToCart(products.backpack.slug);
  await inv.addToCart(products.bikeLight.slug);
  await inv.openCart();
  await new CartPage(page).checkout();
  return new CheckoutPage(page);
}

test.describe("Checkout (TC-015 to TC-018)", () => {
  test("TC-016 empty first name shows First Name is required", async ({ page }) => {
    const checkout = await startCheckout(page);
    await checkout.fillInfo({ firstName: "", lastName: checkoutInfo.lastName, zip: checkoutInfo.zip });
    await expect(checkout.error).toContainText("First Name is required");
  });
  test("TC-017 + TC-018 overview total is item total + 8% tax, finish completes the order", async ({ page }) => {
    const checkout = await startCheckout(page);
    await checkout.fillInfo(checkoutInfo);
    const itemTotal = products.backpack.price + products.bikeLight.price;   // 39.98
    const expectedTotal = Math.round(itemTotal * 1.08 * 100) / 100;          // 43.18 with 8% tax
    expect(await checkout.summaryTotal()).toBeCloseTo(expectedTotal, 2);
    await checkout.finish();
    await expect(checkout.completeHeader).toHaveText("Thank you for your order!");
  });
});
