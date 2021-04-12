const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'movie_store_db',
  password: 'postgresdb',
  port: 5432,
});

client
  .connect()
  .then(() => console.log('connected'))
  .catch((err) => console.error('connection error', err.stack));
