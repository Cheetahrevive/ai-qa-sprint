# playwright-testing

Playwright and JavaScript test automation practice using [SauceDemo](https://www.saucedemo.com).

Automates the highest-value manual cases from [`../ecommerce-qa-testing`](../ecommerce-qa-testing) (login, inventory, cart, checkout) using the **Page Object Model**.

## Run it
```bash
npm install
npx playwright install chromium
npm test            # headless run
npm run test:headed # watch it in a real browser window
```

## Structure
| Path | Contents |
|------|----------|
| `pages/` | Page objects: LoginPage, InventoryPage, CartPage, CheckoutPage |
| `tests/` | login.spec.js · inventory.spec.js · cart.spec.js · checkout.spec.js |
| `test-data/users.js` | Demo users and checkout data (shared with the manual project) |
| `playwright.config.js` | Base URL, browser, reporter, retries |

## Coverage map (manual case → automated test)
TC-001–TC-004 → login.spec.js · TC-005–TC-007, TC-009 → inventory.spec.js · TC-012–TC-013 → cart.spec.js · TC-015–TC-018 → checkout.spec.js
