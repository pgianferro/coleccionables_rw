const {DB_DATABASE} = require('../../../config')
const {DB_MYSQLHOST} = require('../../../config')
const {DB_MYSQLPASSWORD} = require('../../../config')
const {DB_MYSQLUSER} = require('../../../config')
const {DB_MYSQLPORT} = require('../../../config')

module.exports = {
  "development": {
    "username": DB_MYSQLUSER,
    "password": DB_MYSQLPASSWORD,
    "database": DB_DATABASE,
    "port": DB_MYSQLPORT,
    "host": DB_MYSQLHOST,
    "dialect": "mysql",
    "logging": false
  },
  "test": {
    "username": DB_MYSQLUSER,
    "password": DB_MYSQLPASSWORD,
    "database": DB_DATABASE,
    "port": DB_MYSQLPORT,
    "host": DB_MYSQLHOST,
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
