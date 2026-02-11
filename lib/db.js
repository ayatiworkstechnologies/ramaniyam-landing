import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "ayati",
  database: "ramaniyam_db",
  waitForConnections: true,
  connectionLimit: 10,
});
// G6~0=g?RXN8N
export default pool;
