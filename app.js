const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: 'movie_store_db',
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

client
  .connect()
  .then(() => console.log('connected'))
  .catch((err) => console.error('connection error', err.stack));
