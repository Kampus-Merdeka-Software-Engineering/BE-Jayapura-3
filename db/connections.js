// import mysql from "mysql";

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Lupasandi0.",
//   database: "capstone_project",
// });

// connection.connect((error) => {
//   if (error) throw error;
//   console.log("Database connected");
// });

// export default connection;

// export function destroyConnection() {
//   connection.end();
// }

import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.MYSQLDATABASE, process.env.MYSQLUSER, process.env.MYSQLPASSWORD, {
  host: process.env.MYSQLHOST,
  port: process.env.MYSQLPORT,
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => {
    console.log('Koneksi ke database berhasil');
  })
  .catch((error) => {
    console.error('Tidak dapat terhubung ke database:', error);
  });

export default sequelize;

export function tutupKoneksi() {
  sequelize.close();
}