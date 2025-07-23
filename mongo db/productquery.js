// productQueries.js

// 1. Find all the information about each product
print("1. All products:");
db.products.find({}).forEach(printjson);

// 2. Find the product price which are between 400 to 800
print("\n2. Products with price between 400 and 800:");
db.products.find({ product_price: { $gte: 400, $lte: 800 } }).forEach(printjson);

// 3. Find the product price which are NOT between 400 to 600
print("\n3. Products with price NOT between 400 and 600:");
db.products.find({
  $or: [
    { product_price: { $lt: 400 } },
    { product_price: { $gt: 600 } }
  ]
}).forEach(printjson);

// 4. List the four products which are greater than 500 in price
print("\n4. First 4 products with price > 500:");
db.products.find({ product_price: { $gt: 500 } }).limit(4).forEach(printjson);

// 5. Find the product name and product material of each product
print("\n5. Product name and material:");
db.products.find({}, { product_name: 1, product_material: 1, _id: 0 }).forEach(printjson);

// 6. Find the product with a row id of 10
print("\n6. Product with id = 10:");
db.products.find({ id: 10 }).forEach(printjson);

// 7. Find only the product name and product material
print("\n7. Product name and material:");
db.products.find({}, { product_name: 1, product_material: 1, _id: 0 }).forEach(printjson);

// 8. Find all products which contain the value of "soft" in product material
print("\n8. Products with 'soft' in material:");
db.products.find({ product_material: /soft/i }).forEach(printjson);

// 9. Find products with product color "indigo" and product price 492.00
print("\n9. Products with color 'indigo' and price 492.00:");
db.products.find({ product_color: "indigo", product_price: 492.00 }).forEach(printjson);

// 10. Delete the products with price 28
print("\n10. Deleting products with price = 28...");
const result = db.products.deleteMany({ product_price: 28 });
printjson(result);