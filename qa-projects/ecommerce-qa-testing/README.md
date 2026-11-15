# ecommerce-qa-testing

Manual QA testing portfolio covering requirements, test cases, defect tracking, execution reports, and Jira/testing traceability.

**Application under test:** [SauceDemo](https://www.saucedemo.com) — a practice e-commerce store (login → inventory → cart → checkout → order complete).

## Structure
| Folder | Contents |
|--------|----------|
| `01-requirements/` | Functional requirements + user stories |
| `02-test-plan/` | Test plan and test strategy |
| `03-test-cases/` | 24 test cases in Markdown and CSV (importable into Jira / TestRail / Zephyr) |
| `04-test-data/` | Test users and test data used by the cases |
| `05-defects/` | Defect log + a full sample defect report |
| `06-test-execution/` | Execution report for the practice run |
| `07-traceability/` | Requirements → test cases → defects traceability matrix |
| `08-jira/` | How work is tracked in Jira: workflow, board, and the ticket list |

## How this connects to the rest of the portfolio
- The highest-value cases here (login, cart, checkout) are automated in [`../playwright-testing`](../playwright-testing).
- The data layer behind an order like this is validated in [`../sql-portfolio`](../sql-portfolio).
- The API layer is covered in [`../postman-api-testing`](../postman-api-testing).
