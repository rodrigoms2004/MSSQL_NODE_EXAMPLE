'use strict'

const {
    mssqlPool
}   = require('../config/config.json')

const knex = require('knex')

const connection = (id) => {
    try {
        const connection = knex(mssqlPool[id])
        return connection
    } catch (e) {
        return e
    }
}

module.exports = {
    connection
}