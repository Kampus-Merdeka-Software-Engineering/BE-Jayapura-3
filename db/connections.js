import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Lupasandi0.",
  database: "capstone_project",
});

connection.connect((error) => {
  if (error) throw error;
  console.log("Database connected");
});

export default connection;

export function destroyConnection() {
  connection.end();
}

// const { Sequelize } = require('sequelize');
// require('dotenv').config()

// const sequelize = new Sequelize(process.env.MYSQLDATABASE, process.env.MYSQLUSER, process.env.MYSQLPASSWORD, {
//     host: process.env.MYSQLHOST,
//     port: process.env.MYSQLPORT,
//     dialect: 'mysql'
// });

// module.exports = sequelize;