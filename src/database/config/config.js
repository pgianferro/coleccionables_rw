const {DB_DATABASE} = require('../../../configdos')
const {DB_MYSQLHOST} = require('../../../configdos')
const {DB_MYSQLPASSWORD} = require('../../../configdos')
const {DB_MYSQLUSER} = require('../../../configdos')
const {DB_MYSQLPORT} = require('../../../configdos')

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
