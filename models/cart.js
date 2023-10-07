import Product from "./products.js";
import connection from "../db/connections.js";

export default class Cart {
  constructor(user_id, products) {
    this.user_id = user_id;
    this.products = products;
  }

  static addToCart(user_id, product_id, quantity, size) {
    return new Promise((resolve, reject) => {
      const sqlQuery = `INSERT INTO carts (user_id, product_id, quantity,size) VALUES ('${user_id}', '${product_id}', '${quantity}',${size})`;
      connection.query(sqlQuery, (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      });
    });
  }

  static updateCart(user_id, product_id, quantity) {
    return new Promise((resolve, reject) => {
      const sqlQuery = `UPDATE carts SET quantity = '${quantity}' WHERE user_id = '${user_id}' AND product_id = '${product_id}'`;
      connection.query(sqlQuery, (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      });
    });
  }

  static removeFromCart(user_id, product_id) {
    return new Promise((resolve, reject) => {
      const sqlQuery = `DELETE FROM carts WHERE user_id = '${user_id}' AND product_id = '${product_id}'`;
      connection.query(sqlQuery, (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      });
    });
  }

  static checkout(user_id) {
    return new Promise((resolve, reject) => {
      const sqlQuery = `DELETE FROM carts WHERE user_id = '${user_id}'`;
      connection.query(sqlQuery, (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      });
    });
  }

  static getUserCart(user_id) {
    return new Promise((resolve, reject) => {
      const sqlQuery = `SELECT * FROM carts JOIN products ON products.id = carts.product_id WHERE user_id = '${user_id}'`;
      connection.query(sqlQuery, (err, result) => {
        if (err) return reject(err);
        const products = [];

        result.forEach((product) => {
          products.push(
            new Product(
              product.id,
              product.name,
              product.price,
              product.description,
              product.category,
              product.image,
              product.brand,
              product.gender,
              product.sizes,
              product.size,
              product.quantity
            )
          );
        });

        return resolve(products);
      });
    });
  }
}
