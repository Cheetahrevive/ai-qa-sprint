# Defect Report — BUG-001 (Jira: SHOP-128)

**Summary:** problem_user: product images do not match the products on the Inventory page
**Environment:** https://www.saucedemo.com · Chrome · Practice run
**Severity:** Major · **Priority:** P2 · **Found in test case:** TC-021 · **Requirement:** REQ-12

**Steps to reproduce**
1. Log in as `problem_user` / `secret_sauce`.
2. Compare each product image on the Inventory page with the product name and with the image shown for `standard_user`.

**Expected result:** Each product shows its own correct image, the same as for `standard_user`.
**Actual result:** Images are mismatched/repeated and do not correspond to the listed products.

**Impact:** A shopper cannot visually confirm what they are buying; undermines trust and breaks visual regression baselines.
**Attachments:** Screenshot pair (standard_user vs problem_user inventory) — naming: `BUG-001_inventory_compare.png`.
