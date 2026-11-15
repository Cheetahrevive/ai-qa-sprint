# API Test Scenarios — Simple Tool Rental API

| # | Scenario | Expected |
|---|----------|----------|
| 1 | GET /status | 200, body status = "UP" |
| 2 | GET /tools | 200, non-empty array; every tool has id, name, category, price, available |
| 3 | GET /tools/{valid id} | 200, that tool |
| 4 | GET /tools/{unknown id} | 404 |
| 5 | POST /api-clients with name + email | 201, an accessToken is returned and saved |
| 6 | POST /api-clients missing email | 400 |
| 7 | POST /orders with token | 201, created = true, orderId returned |
| 8 | POST /orders without token | 401 |
| 9 | GET /orders with token | 200, my order is in the list |
| 10 | DELETE /orders/{id} with token | 204, and the order no longer appears in GET /orders |

Scenarios 1–5, 7–10 run in `tests/run-api-tests.js` against the local mock; all 10 are in the Postman collection for use against the live API.
