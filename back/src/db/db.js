const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.USERDB,
  host: "localhost",
  password: process.env.PASSWORDDB,
  database: process.env.DBNAME,
});
module.exports = pool;