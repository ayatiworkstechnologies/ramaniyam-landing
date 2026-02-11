import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "campaignprojects_user",
  password: "G6~0=g?RXN8N",
  database: "campaignprojects_db",
  waitForConnections: true,
  connectionLimit: 10,
});
// G6~0=g?RXN8N
export default pool;
