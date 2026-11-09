# ai-qa-sprint

A 12-week, hands-on path from enterprise QA automation into AI quality
engineering — built in the open, one working test at a time.

**Sprint:** Mon Nov 2, 2026 → Sun Jan 24, 2027 · ~1.5 hours/day

## What I'm building toward
Interview-ready AI QA / SDET work: Python API testing, LLM test harnesses,
prompt-testing regression sets, and RAG validation — on top of 13+ years of
enterprise QA automation (Playwright, Selenium, API and SQL validation, CI/CD).

## Milestones
- Fri Nov 20 — Python-for-QA checkpoint (Week 3)
- Fri Dec 11 — First LLM test harness (Week 6)
- Wed Dec 30 — RAG testing demo (Week 9)
- Sun Jan 24, 2027 — Interview-ready (Week 12)

## Weekly map
- Weeks 1–3: Python for QA, pytest, API testing, Git workflow
- Week 4: LLM APIs (OpenAI / Azure OpenAI) — Thanksgiving week, lighter load
- Week 5: Prompt testing
- Week 6: First LLM test harness
- Weeks 7–9: SQL / data validation, RAG basics, testing RAG
- Weeks 10–12: Review, Docker + CI/CD, mock interviews, portfolio polish

## Week 1 — Python setup + first QA scripts
- Install Python 3.12, VS Code, pytest, requests
- Fetch a public API and print the result count
- First pytest test: 200 status + one field value

## Week 2 — pytest + API testing
- test_post_status_headers_and_body — GET /posts/1 returns 200, a JSON content-type, and id / userId / title / body fields.
- test_posts_return_matching_id [1, 2, 3] — data-driven test (parametrize): each requested post id returns that same id.
- test_unknown_post_returns_404 — negative test: GET /posts/999999 returns 404.
Run: pytest tests/test_api_week2.py -q  (5 passed)

## Run the tests
pip install pytest requests
pytest tests/test_api.py -s -q
