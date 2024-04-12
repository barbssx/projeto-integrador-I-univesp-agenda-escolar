var knex = require('knex')({
    client: 'mysql',
    connection: {
        host : '',
        user : '',
        password : '',
        database : '',
        port: 3306 
    }
});
module.exports = knex;

//Dados ocultados por segurança 