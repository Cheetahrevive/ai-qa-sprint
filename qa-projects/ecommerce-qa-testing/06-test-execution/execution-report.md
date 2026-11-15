# Test Execution Report — Practice Run

**Application:** SauceDemo · **Scope:** 24 test cases (login, inventory, cart, checkout, logout)

| Metric | Count |
|--------|-------|
| Executed | 24 |
| Passed | 22 |
| Failed | 2 |
| Blocked | 0 |
| Pass rate | 91.7% |

**Failures:** TC-021 and TC-022, both for the `problem_user` persona — defects BUG-001 (SHOP-128) and BUG-002 (SHOP-131) raised and linked in the traceability matrix.
**Conclusion:** The core shopping flow (login → checkout → confirmation) is fully green for `standard_user`. The run is signed off with the two persona defects open as Major, per the exit criteria in the test plan (no Critical defects open).
**Automation follow-up:** TC-001–TC-004, TC-009, TC-012, TC-015–TC-018 are automated in `../../playwright-testing`.
