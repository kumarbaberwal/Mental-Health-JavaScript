const { query } = require('express');
const {Pool} = require('pg');
const { user, password, host, port, database } = require('pg/lib/defaults');


const pool = new Pool({
    user: 'postgres',
    password: 'admin',
    host: 'localhost',
    port: 5432,
    database: 'postgres'
})


module.export = {
    query: (text, params) => pool.query(text, params),
}