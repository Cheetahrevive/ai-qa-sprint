-- 03: Joins — combining related tables.
-- Every order with the name of the customer who placed it:
SELECT o.order_id, c.first_name, c.last_name, o.order_date, o.status
FROM orders o JOIN customers c ON c.customer_id = o.customer_id ORDER BY o.order_id;
-- Every order line with product names and line totals:
SELECT oi.order_id, p.product_name, oi.quantity, oi.unit_price,
       ROUND(oi.quantity * oi.unit_price, 2) AS line_total
FROM order_items oi JOIN products p ON p.product_id = oi.product_id ORDER BY oi.order_id;
-- LEFT JOIN: customers who have never ordered
-- (in this data set every customer has ordered, so this returns 0 rows — which itself proves the check works):
SELECT c.first_name, c.last_name FROM customers c
LEFT JOIN orders o ON o.customer_id = c.customer_id WHERE o.order_id IS NULL;
