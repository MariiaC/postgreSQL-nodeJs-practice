// конфігурація БД
// оскільки Pool - клас, необхідно створити об*єкт класу

const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "user123",
    host: "localhost",
    port: "5432",
    database:"node_postgres"
});

module.exports = pool;
