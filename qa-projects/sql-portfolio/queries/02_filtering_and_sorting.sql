-- 02: Filtering with WHERE, combining conditions, sorting with ORDER BY.
SELECT product_name, price FROM products WHERE price < 20 ORDER BY price ASC;
SELECT first_name, last_name, city FROM customers WHERE city = 'Irving';
SELECT order_id, status FROM orders WHERE status IN ('Shipped','Pending') ORDER BY order_date;
SELECT product_name, stock FROM products WHERE category = 'Clothing' AND stock > 30 ORDER BY product_name;
