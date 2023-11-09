const Pool = require('pg').Pool;

const {
  DB_USER = 'postgres',
  DB_PASSWORD,
  DB_HOST,
  DB_PORT = 5432,
  DATABASE_NAME,
} = process.env;

const pool = new Pool({
  user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
  database: DATABASE_NAME,
});

module.exports = pool;
