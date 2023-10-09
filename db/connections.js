import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "mysql-capstone-rasikhamuthia-db1c.aivencloud.com",
  user: "avnadmin",
  password: "AVNS_GVq0YXk1yeugDoOaFhR",
  database: "defaultdb",
  port: 14566,
});

connection.connect((error) => {
  if (error) throw error;
  console.log("Database connected");
});

export default connection;

export function destroyConnection() {
  connection.end();
}
