var knex = require('knex')({
    client: 'mysql2',
    connection: {
        host : 'database-2.clusseigsge6.us-east-2.rds.amazonaws.com',
        user : 'barbss',
        password : 'Ba661998',
        database : 'dbAgenda',
        port: 3306 
    }
});
module.exports = knex;
