const pgp = require('pg-promise')({});
const db = pgp('postgres://localhost/movieapp');

const getDbConn = (function () {
  let dbConn = null;
  return function (dbAddr) {
    if (!dbConn) {
      dbConn = pgp({})(dbAddr)
    }
    return dbConn;
  }
})(); // IIFE

module.exports = {
  getDbConn,
}