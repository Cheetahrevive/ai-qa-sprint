-- 04: Aggregations — COUNT, SUM, AVG with GROUP BY and HAVING.
SELECT status, COUNT(*) AS order_count FROM orders GROUP BY status ORDER BY order_count DESC;
SELECT category, COUNT(*) AS product_count, ROUND(AVG(price),2) AS avg_price
FROM products GROUP BY category ORDER BY category;
SELECT c.first_name, c.last_name, ROUND(SUM(oi.quantity * oi.unit_price),2) AS total_spent
FROM customers c JOIN orders o ON o.customer_id = c.customer_id
JOIN order_items oi ON oi.order_id = o.order_id
WHERE o.status != 'Cancelled'
GROUP BY c.customer_id HAVING total_spent > 40 ORDER BY total_spent DESC;
