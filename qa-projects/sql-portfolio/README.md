# sql-portfolio

SQL practice portfolio demonstrating data retrieval, filtering, joins, aggregations, subqueries, and relational data analysis using MySQL-style SQL.

The SQL is written in standard/MySQL style and also runs unchanged on SQLite, so the whole portfolio is executable end-to-end:

```bash
python3 scripts/run_all.py
```
That script builds a fresh database from `schema/` + `data/`, runs every file in `queries/` in order, prints each result, and checks the QA data-validation queries return a clean database.

## Structure
| Folder | Contents |
|--------|----------|
| `schema/` | `01_create_tables.sql` — customers, products, orders, order_items |
| `data/` | `02_insert_sample_data.sql` — realistic e-commerce sample data |
| `queries/` | 01 basic select · 02 filtering & sorting · 03 joins · 04 aggregations · 05 subqueries · 06 QA data validation |
| `scripts/` | `run_all.py` — build + run + verify everything |
| `notes/` | Short study notes on what each query pattern is for |
