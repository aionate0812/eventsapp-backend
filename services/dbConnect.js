const pgp = require('pg-promise')({})
const db = pgp('postgres:localhost:5252/eventsapp')

module.exports = db

