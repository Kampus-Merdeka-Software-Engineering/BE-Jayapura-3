import connection from "../db/connections.js";
import crypto from "crypto";

export default class User {
  constructor(id = false, username, password, email) {
    this.id = !id ? crypto.randomUUID() : id;
    this.username = username;
    this.password = password;
    this.email = email;
  }

  static UserFromDb(id, username, password, email) {
    return new User(id, username, password, email);
  }

  static findByID(id) {
    return new Promise((resolve, reject) => {
      const sqlQuery = `SELECT * FROM users WHERE id = '${id}' LIMIT 1`;
      connection.query(sqlQuery, (err, result) => {
        if (err) return reject(err);
        if (result.length === 0) return resolve(null);

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
  static findByUsername(username) {
    return new Promise((resolve, reject) => {
      const sqlQuery = `SELECT * FROM users WHERE username = '${username}' LIMIT 1`;
      connection.query(sqlQuery, (err, result) => {
        if (err) return reject(err);
        if (result.length === 0) return resolve(null);

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
    values ('${this.id}', '${this.username}', '${this.password}', '${this.email}') 
    ON DUPLICATE KEY UPDATE id = '${this.id}', username = '${this.username}', password = '${this.password}', email = '${this.email}'`;

      connection.query(sqlQuery, (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      });
    });
  }

  update(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
  }
}
