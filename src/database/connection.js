var knex = require('knex')({
    client: 'mysql2',
    connection: {
        host : '********.clusseigsge6.us-east-2.rds.amazonaws.com',
        user : 'barbss',
        password : '********',
        database : 'db*****',
        port: 3306 
    }
});
module.exports = knex;

//Dados ocultados por segurança 