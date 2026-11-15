# Test Plan — SauceDemo Release Practice Run

## 1. Objective
Verify the core shopping flow of SauceDemo (login, inventory, cart, checkout) works as specified in `01-requirements/requirements.md`, and log any defects in Jira.

## 2. Scope
**In scope:** Login (all 6 demo personas), inventory and sorting, product detail, cart, checkout (both steps), order completion, logout.
**Out of scope:** Real payment processing (demo store has none), native mobile apps, performance/load testing beyond an observation note for `performance_glitch_user`.

## 3. Test types
Functional · Negative · Boundary (empty fields) · Usability observation · Regression of the core flow.

## 4. Entry / exit criteria
- Entry: site reachable, test users available (see `04-test-data/test-data.md`).
- Exit: all Priority-1 cases executed; no open Critical defects; execution report published.

## 5. Deliverables
Test cases, defect log, execution report, traceability matrix (this folder set).

## 6. Risks
| Risk | Mitigation |
|------|------------|
| Demo site data resets between sessions | Re-run setup steps per case; do not depend on saved cart state |
| Persona users (`problem_user`) intentionally contain bugs | Log defects against REQ-12 instead of blocking the run |
