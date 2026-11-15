const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");
const { standardUser, lockedOutUser } = require("../test-data/users");

test.describe("Login (TC-001 to TC-004)", () => {
  test("TC-001 valid login lands on inventory", async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(standardUser.username, standardUser.password);
    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator(".inventory_item")).toHaveCount(6);
  });
  test("TC-002 locked-out user sees the locked-out error", async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(lockedOutUser.username, lockedOutUser.password);
    await expect(login.error).toContainText("this user has been locked out");
  });
  test("TC-003 wrong password shows a mismatch error", async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(standardUser.username, "wrong_password");
    await expect(login.error).toContainText("Username and password do not match");
  });
  test("TC-004 empty username shows Username is required", async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login("", standardUser.password);
    await expect(login.error).toContainText("Username is required");
  });
});
