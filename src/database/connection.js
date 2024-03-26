var knex = require('knex')({
    client: 'mysql2',
    connection: {
        host : 'localhost',  
        user : 'root', 
        password : 'Ba661998',  
        database : 'dbAgenda'       
     }
});
module.exports = knex