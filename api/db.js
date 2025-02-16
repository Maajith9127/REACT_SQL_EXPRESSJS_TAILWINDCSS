import mysql from "mysql2"
import dotenv from "dotenv";

dotenv.config();
console.log(process.env.SQLPASS);
export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:process.env.SQLPASS,
    database: "test",
  });

// Check database connection
  db.connect((err) => {
    if (err) {
      console.error("❌ MySQL Connection Failed:", err);
      return;
    }
    console.log("✅ Connected to MySQL Database!");
  });


