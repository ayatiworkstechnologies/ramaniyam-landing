import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "cpanel_db_user",
  password: "cpanel_db_password",
  database: "cpanel_db_name",
  waitForConnections: true,
  connectionLimit: 10,
});

export default pool;
