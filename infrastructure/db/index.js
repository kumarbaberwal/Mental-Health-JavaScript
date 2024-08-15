const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: 'Kumar',
    host: 'localhost',
    port: 5432,
    database: 'songs'
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};
