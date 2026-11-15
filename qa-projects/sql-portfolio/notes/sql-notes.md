# SQL Notes — What Each Pattern Is For (QA view)

| Pattern | File | How a QA engineer uses it |
|---------|------|---------------------------|
| SELECT / WHERE | 01–02 | Verify exactly the records a UI action should have created |
| JOIN | 03 | Follow a record across tables the way the app does (order → customer → items) |
| GROUP BY / HAVING | 04 | Reconcile totals: counts and sums in the DB vs the UI/report |
| Subquery | 05 | Find records relative to a computed value (above-average, biggest order) |
| Validation queries | 06 | Data-quality checks: duplicates, orphans, empty orders, impossible values |
