# postman-api-testing

Postman and JavaScript API testing practice using the **Simple Tool Rental API**.

## What is here
| Path | Contents |
|------|----------|
| `collections/` | `simple-tool-rental-api.postman_collection.json` — import into Postman; every request carries `pm.test(...)` JavaScript assertions |
| `environments/` | `dev.postman_environment.json` — `baseUrl` and `accessToken` variables |
| `mock-server/` | `server.js` — a local, dependency-free copy of the Tool Rental API so the tests run anywhere |
| `tests/` | `run-api-tests.js` — the same checks as the Postman scripts, runnable with plain Node |
| `notes/` | The test scenarios and expected status codes |

## Run it two ways
**A. In Postman:** import the collection + environment, set `baseUrl` to `https://simple-tool-rental-api.glitch.me`, run the collection in order (the *Create API client* request saves a token the order requests reuse).

**B. Locally, no network or Postman needed:**
```bash
npm test
```
This starts the mock server, runs 10 API checks (status, tools list, tool by ID, auth token flow, create/get/delete order, and the 401/404 negative cases), and prints PASS/FAIL per check.

> Honest status note: the public glitch.me demo of this API has become unreliable (it redirects instead of serving the API). The collection is unchanged — it is the standard practice collection for this API — and the mock server implements the same endpoints and data shape, so the JavaScript tests are fully working and verifiable locally.
