const connection = require('./index');
const Product = require('./products.js');

class Cart {
  constructor(user_id) {
    this.user_id = user_id;
  }

  static async addToCart(user_id, product_id, quantity) {
    try {
      const sqlQuery = 'INSERT INTO carts (user_id, product_id, quantity) VALUES (?, ?, ?)';
      const result = await connection.query(sqlQuery, [user_id, product_id, quantity]);
      return result;
    } catch (err) {
      throw err;
    }
  }

  static async updateCart(user_id, product_id, quantity) {
    try {
      const sqlQuery = 'UPDATE carts SET quantity = ? WHERE user_id = ? AND product_id = ?';
      const result = await connection.query(sqlQuery, [quantity, user_id, product_id]);
      return result;
    } catch (err) {
      throw err;
    }
  }

  static async removeFromCart(user_id, product_id) {
    try {
      const sqlQuery = 'DELETE FROM carts WHERE user_id = ? AND product_id = ?';
      const result = await connection.query(sqlQuery, [user_id, product_id]);
      return result;
    } catch (err) {
      throw err;
    }
  }

  static async getUserCart(user_id) {
    try {
      const sqlQuery = `
        SELECT products.* 
        FROM carts 
        JOIN products ON products.id = carts.product_id 
        WHERE carts.user_id = ?`;
      const result = await connection.query(sqlQuery, [user_id]);

      const products = result.map((product) => {
        return new Product(
          product.id,
          product.name,
          product.price,
          product.description,
          product.category,
          product.image,
          product.brand,
          product.gender,
          product.size,
          product.quantity
        );
      });

      return products;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = Cart;
