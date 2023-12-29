import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "mysql-23dbfc2c-narendrapamungkas07-97ea.a.aivencloud.com",
  user: "avnadmin",
  password: "AVNS_d9nZNjN1OD2JvKCdkLK",
  database: "defaultdb",
  port:15110,
});

connection.connect((error) => {
  if (error) throw error;
  console.log("Database connected");
});

export default connection;

export function destroyConnection() {
  connection.end();
}
