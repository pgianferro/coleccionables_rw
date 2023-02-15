const {DB_DATABASE} = require('../../../config')
const {DB_MYSQLHOST} = require('../../../config')
const {DB_MYSQLPASSWORD} = require('../../../config')
const {DB_MYSQLUSER} = require('../../../config')
const {DB_MYSQLPORT} = require('../../../config')

module.exports = {
  "development": {
    "username": 'root',
    "password": '',
    "database": "coleccionables_db",
    "host": "127.0.0.1",
    "port":8889,
    "dialect": "mysql",
    "logging": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": DB_MYSQLUSER,
    "password": DB_MYSQLPASSWORD,
    "database": DB_DATABASE,
    "port": DB_MYSQLPORT,
    "host": DB_MYSQLHOST,
    "dialect": "mysql"
  }
}
