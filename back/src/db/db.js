const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "new_password",
  database: "dbinlaze",
});
module.exports = pool;