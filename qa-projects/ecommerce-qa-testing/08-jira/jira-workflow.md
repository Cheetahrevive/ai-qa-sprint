# Tracking Issues in Jira — How This Project Uses It

## Issue types
- **Epic** SHOP-101 “SauceDemo practice release” — groups all work below.
- **Story** — a user-visible capability (see `01-requirements/user-stories.md`).
- **Task** — QA work itself: SHOP-115 “Write test cases”, SHOP-116 “Execute regression run”.
- **Bug** — a defect found in execution (SHOP-128, SHOP-131), always linked to the failing test case and requirement.

## Workflow (board columns)
`To Do → In Progress → In Review → Done`
Bugs use: `Open → In Progress → Fixed → Retest → Closed` (reopen returns them to In Progress).

## Rules this portfolio follows
1. A test case is not “done” until its result is recorded and, on failure, a bug is linked.
2. A bug is not closed on a developer's word — it is retested with the original test case.
3. Every bug carries: steps to reproduce, expected vs actual, severity, environment, and evidence.
4. The traceability matrix (`07-traceability/`) is the report Jira cannot give on its own: requirement → case → defect.

## Ticket list
The full ticket set for this project is in `jira-tickets.csv` (importable into Jira via Settings → System → External System Import → CSV).
