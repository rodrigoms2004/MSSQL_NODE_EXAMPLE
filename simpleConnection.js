const config = require('./config/config.json')


const knex = require('knex')({
    client: config.mssqlPool[0].client,
    connection: {
        host : config.mssqlPool[0].connection.host,
        user : config.mssqlPool[0].connection.user,
        password : config.mssqlPool[0].connection.password,
        database : config.mssqlPool[0].connection.database
    }
})

knex.select().table('Inventory').then(result => {
    console.log(result)
}).catch(error => {
    console.log(error)
})

