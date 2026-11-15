# QA Projects — Hands-on Practice and Portfolio

Hands-on QA portfolio by **Ravi Kalagara** — Senior QA Automation Engineer / SDET (13+ years).
Each folder below is a complete, working project on its own. Together they show one full QA workflow:

**Requirements → Test Cases (Jira) → Manual Execution → API Testing (Postman) → SQL Validation → Web Automation (Playwright)**

| # | Project | What it shows | Stack |
|---|---------|---------------|-------|
| 1 | [python-projects](python-projects/) | Programming fundamentals, problem-solving, code organization, unit tests | Python, pytest |
| 2 | [ecommerce-qa-testing](ecommerce-qa-testing/) | Manual QA portfolio: requirements, test plan, test cases, defects, execution report, traceability, Jira workflow | Manual Testing, Jira |
| 3 | [sql-portfolio](sql-portfolio/) | Data retrieval, filtering, joins, aggregations, subqueries, QA data-validation queries | SQL (MySQL-style, runs on SQLite) |
| 4 | [javascript-fundamentals](javascript-fundamentals/) | Functions, arrays, objects, JSON, error handling, async programming | JavaScript, Node.js |
| 5 | [postman-api-testing](postman-api-testing/) | API testing practice on the Simple Tool Rental API — Postman collection + runnable JS tests + local mock server | Postman, JavaScript |
| 6 | [playwright-testing](playwright-testing/) | Web test automation on SauceDemo with Page Object Model | Playwright, JavaScript |

## The end-to-end story
The e-commerce app under test is [SauceDemo](https://www.saucedemo.com):
1. **ecommerce-qa-testing** holds its requirements, test cases, defects and Jira traceability.
2. **playwright-testing** automates the highest-value of those same test cases (login, cart, checkout).
3. **postman-api-testing** covers the API layer the same way a real project would.
4. **sql-portfolio** covers the database layer (orders, customers, payments validation).
5. **python-projects** and **javascript-fundamentals** are the programming base underneath the automation.

## Quick start (run everything)
```bash
# 1. Python
cd python-projects && pip install -r requirements.txt && python -m pytest -q

# 2. JavaScript fundamentals
cd ../javascript-fundamentals && npm test

# 3. SQL (builds a local database and runs every query)
cd ../sql-portfolio && python3 scripts/run_all.py

# 4. API tests (runs against a local mock of the Tool Rental API — no network needed)
cd ../postman-api-testing && npm test

# 5. Playwright (live, against saucedemo.com)
cd ../playwright-testing && npm install && npx playwright install chromium && npm test
```

## Skills demonstrated
Manual Testing · Jira · SQL · Postman (API Testing) · Playwright (Automation) · Python · JavaScript · GitHub
