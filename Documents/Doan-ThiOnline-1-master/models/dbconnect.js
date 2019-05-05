const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'root@123',
        database: 'ThiOnline',
        port: 3306
    }
});
module.exports = knex;