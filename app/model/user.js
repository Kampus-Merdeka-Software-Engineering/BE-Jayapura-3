const connection = require("./index");
const crypto = require("crypto");

class User {
  constructor(id, username, password, email) {
    this.id = id || crypto.randomUUID();
    this.username = username;
    this.password = password;
    this.email = email;
  }

  static UserFromDb(id, username, password, email) {
    return new User(id, username, password, email);
  }

  static findByUsername(username) {
    return new Promise((resolve, reject) => {
      const sqlQuery = `SELECT * FROM users WHERE username = ? LIMIT 1`;
      connection.query(sqlQuery, [username], (err, result) => {
        if (err) return reject(err);
        if (result.length === 0) return reject("User not found");

        return resolve(
          User.UserFromDb(
            result[0].id,
            result[0].username,
            result[0].password,
            result[0].email
          )
        );
      });
    });
  }

  save() {
    return new Promise((resolve, reject) => {
      const sqlQuery = `INSERT INTO users (id, username, password, email) 
      values (?, ?, ?, ?) 
      ON DUPLICATE KEY UPDATE username = VALUES(username), password = VALUES(password), email = VALUES(email)`;

      connection.query(
        sqlQuery,
        [this.id, this.username, this.password, this.email],
        (err, result) => {
          if (err) return reject(err);
          return resolve(result);
        }
      );
    });
  }

  update(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
  }
}

module.exports = User;
