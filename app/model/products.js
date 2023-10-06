const connection = require('./index')

class Product {
  constructor({
    id,
    name,
    price,
    description,
    category,
    image,
    brand,
    gender,
    size,
    quantity = null, // Menggunakan null daripada false untuk parameter opsional
  }) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.category = category;
    this.size = size;
    this.image = image;
    this.brand = brand;
    this.gender = gender;
    this.quantity = quantity; // Menetapkan quantity langsung, bisa saja 0
  }

  static async getById(id) {
    try {
      const sqlQuery = 'SELECT * FROM products WHERE id = ? LIMIT 1';
      const result = await connection.query(sqlQuery, [id]);

      if (result.length === 0) {
        throw new Error('Produk tidak ditemukan');
      }

      return new Product(result[0]);
    } catch (err) {
      throw err;
    }
  }

  // Metode statis lainnya (getAll, getAllByCategory, getAllBySize, getAllByBrand, getAllByGender, getBySearch) bisa diperbarui dengan cara yang serupa.

  static async getAll() {
    try {
      const sqlQuery = 'SELECT * FROM products';
      const result = await connection.query(sqlQuery);
      return result.map((product) => new Product(product));
    } catch (err) {
      throw err;
    }
  }

  // Metode statis lainnya dapat mengikuti pola yang sama untuk penanganan kesalahan yang lebih baik dan kode yang lebih bersih.
}

module.exports = Product;
