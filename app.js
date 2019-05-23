const db = require('./db/mssql_config')

const serverId = 0

const testSQL = async () => {
    try {
        const connection = db.connection(serverId)

        const data = await connection.select().from('Inventory')
            .then(result => {
                return result
            }).catch(error => {
                return error
            })
        
        console.log(data)

    } catch (error) {
        console.log(error)
    }
}

testSQL()