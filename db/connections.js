import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "byu",
});

connection.connect((error) => {
  if (error) throw error;
  console.log("Database connected");
});

export default connection;

export function destroyConnection() {
  connection.end();
}
