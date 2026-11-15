# Builds the database from schema + data, runs every query file, and
# verifies the QA data-validation checks (queries/06) all come back clean.
# Run: python3 scripts/run_all.py
import os, sqlite3, sys

BASE = os.path.join(os.path.dirname(__file__), "..")

def read(rel):
    with open(os.path.join(BASE, rel), encoding="utf-8") as f:
        return f.read()

def statements(sql):
    # Split a .sql file into individual statements, dropping comment-only lines.
    out = []
    for chunk in sql.split(";"):
        lines = [ln for ln in chunk.splitlines() if not ln.strip().startswith("--")]
        stmt = "\n".join(lines).strip()
        if stmt:
            out.append(stmt)
    return out

def main():
    db = sqlite3.connect(":memory:")
    db.executescript(read("schema/01_create_tables.sql"))
    db.executescript(read("data/02_insert_sample_data.sql"))
    counts = {t: db.execute(f"SELECT COUNT(*) FROM {t}").fetchone()[0]
              for t in ("customers", "products", "orders", "order_items")}
    print("Row counts:", counts)
    assert counts == {"customers": 8, "products": 10, "orders": 12, "order_items": 16}, counts

    failures = []
    for name in sorted(os.listdir(os.path.join(BASE, "queries"))):
        if not name.endswith(".sql"):
            continue
        print(f"\n=== queries/{name} ===")
        for stmt in statements(read(f"queries/{name}")):
            rows = db.execute(stmt).fetchall()
            print(f"  -> {len(rows)} row(s); first: {rows[0] if rows else '-'}")
            if name.startswith("06"):
                # Validation queries: a healthy database returns a single 0
                # or no rows at all.
                for row in rows:
                    if any(isinstance(v, (int, float)) and v != 0 for v in row):
                        failures.append((name, stmt[:60], row))
    if failures:
        print("\nDATA VALIDATION FAILURES:", failures)
        sys.exit(1)
    print("\nAll queries ran. Data-validation checks: CLEAN (0 issues).")

if __name__ == "__main__":
    main()
