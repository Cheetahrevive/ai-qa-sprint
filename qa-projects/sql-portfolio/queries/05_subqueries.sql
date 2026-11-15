-- 05: Subqueries — a query inside a query.
-- Products priced above the average product price:
SELECT product_name, price FROM products
WHERE price > (SELECT AVG(price) FROM products) ORDER BY price DESC;
-- Customers who ordered a Mechanical Keyboard (product 8):
SELECT first_name, last_name FROM customers
WHERE customer_id IN (SELECT o.customer_id FROM orders o
                      JOIN order_items oi ON oi.order_id = o.order_id
                      WHERE oi.product_id = 8);
-- The single largest order by value:
SELECT order_id, ROUND(SUM(quantity * unit_price),2) AS order_total
FROM order_items GROUP BY order_id ORDER BY order_total DESC LIMIT 1;
