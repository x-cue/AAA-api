const mysql = require("mysql2/promise")

// Create a pool of connections
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})
module.exports.pool = pool

// Example of using async/await to query the database
module.exports.query = async function query(
  query,
  params = []
) {
  try {
    const [rows, _fields] = await pool.execute(query, params)
    return rows
  } catch (error) {
    console.error("Error executing query:", error)
    throw error // Rethrow the error for handling in calling functions
  }
}
