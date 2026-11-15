-- 06: QA data-validation queries — the checks a QA engineer runs against a database.
-- Each query must return 0 rows / 0 count on healthy data (run_all.py asserts this).
-- 1. Duplicate customer emails (email is supposed to be unique):
SELECT email, COUNT(*) AS n FROM customers GROUP BY email HAVING n > 1;
-- 2. Orders pointing at a customer who does not exist (orphans):
SELECT COUNT(*) AS orphan_orders FROM orders o
LEFT JOIN customers c ON c.customer_id = o.customer_id WHERE c.customer_id IS NULL;
-- 3. Order items pointing at a missing order or product:
SELECT COUNT(*) AS orphan_items FROM order_items oi
LEFT JOIN orders o ON o.order_id = oi.order_id
LEFT JOIN products p ON p.product_id = oi.product_id
WHERE o.order_id IS NULL OR p.product_id IS NULL;
-- 4. Invalid values: negative stock, non-positive quantity or price:
SELECT COUNT(*) AS bad_values FROM products WHERE stock < 0 OR price <= 0;
SELECT COUNT(*) AS bad_quantities FROM order_items WHERE quantity <= 0 OR unit_price <= 0;
-- 5. Orders with no items at all:
SELECT COUNT(*) AS empty_orders FROM orders o
LEFT JOIN order_items oi ON oi.order_id = o.order_id WHERE oi.order_item_id IS NULL;
