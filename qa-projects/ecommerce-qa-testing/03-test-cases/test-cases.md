# Test Cases — SauceDemo (24 cases)

Full steps for the Priority-1 cases are in the notes under the table. The CSV version (`test-cases.csv`) is the importable source of truth.

| ID | Requirement | Area | Title | Priority | Result | Defect |
|----|-------------|------|-------|----------|--------|--------|
| TC-001 | REQ-01 | Login | Valid login with standard_user | P1 | Pass |  |
| TC-002 | REQ-02 | Login | Locked-out user sees locked-out error | P1 | Pass |  |
| TC-003 | REQ-02 | Login | Wrong password shows credential mismatch error | P1 | Pass |  |
| TC-004 | REQ-02 | Login | Empty username shows Username is required | P2 | Pass |  |
| TC-005 | REQ-03 | Inventory | Inventory lists exactly 6 products with prices | P1 | Pass |  |
| TC-006 | REQ-04 | Inventory | Sort by price low to high orders prices ascending | P2 | Pass |  |
| TC-007 | REQ-04 | Inventory | Sort by name Z to A reverses the list | P3 | Pass |  |
| TC-008 | REQ-05 | Inventory | Product detail opens and Back returns to list | P2 | Pass |  |
| TC-009 | REQ-06 | Cart | Add one item — cart badge shows 1 | P1 | Pass |  |
| TC-010 | REQ-06 | Cart | Add two items — cart badge shows 2 | P1 | Pass |  |
| TC-011 | REQ-06 | Cart | Remove item from inventory page clears the badge | P2 | Pass |  |
| TC-012 | REQ-07 | Cart | Cart page lists the selected items and prices | P1 | Pass |  |
| TC-013 | REQ-07 | Cart | Remove item from the cart page | P2 | Pass |  |
| TC-014 | REQ-07 | Cart | Continue Shopping returns to inventory | P3 | Pass |  |
| TC-015 | REQ-08 | Checkout | Checkout with valid first/last name and zip continues to Overview | P1 | Pass |  |
| TC-016 | REQ-08 | Checkout | Empty first name shows First Name is required | P1 | Pass |  |
| TC-017 | REQ-09 | Checkout | Overview total equals item total plus 8 percent tax | P1 | Pass |  |
| TC-018 | REQ-10 | Checkout | Finish shows Thank you for your order and clears the cart | P1 | Pass |  |
| TC-019 | REQ-10 | Checkout | Back Home returns to inventory after completion | P3 | Pass |  |
| TC-020 | REQ-11 | Logout | Logout from side menu returns to login page | P2 | Pass |  |
| TC-021 | REQ-12 | Inventory | problem_user: every product shows its own correct image | P2 | Fail | BUG-001 |
| TC-022 | REQ-12 | Cart | problem_user: Add to Cart works for all 6 products | P2 | Fail | BUG-002 |
| TC-023 | REQ-01 | Login | performance_glitch_user can log in (slow response noted) | P3 | Pass |  |
| TC-024 | REQ-11 | Navigation | About link in side menu opens the Sauce Labs site | P3 | Pass |  |

## Worked example — TC-017 (checkout totals)
**Precondition:** logged in as `standard_user`, Sauce Labs Backpack ($29.99) and Sauce Labs Bike Light ($9.99) in the cart.
1. Open the cart and click **Checkout**.
2. Enter First Name `Ravi`, Last Name `Kalagara`, Zip `75038`, click **Continue**.
3. Read Item total, Tax, and Total on the Overview page.
**Expected:** Item total $39.98 · Tax $3.20 (8%) · Total $43.18. **Actual (practice run):** matched — Pass.

## Worked example — TC-002 (locked-out user)
1. On the login page enter username `locked_out_user` and password `secret_sauce`.
2. Click **Login**.
**Expected:** error *“Epic sadface: Sorry, this user has been locked out.”* and no login. **Actual:** matched — Pass.
