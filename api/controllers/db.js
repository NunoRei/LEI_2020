'use strict';
const oracledb = require('oracledb');
oracledb.autoCommit = true;

const oracleDbRelease = function(conn) {
  conn.release(function (err) {
    if (err)
      console.log(err.message);
  });
};

function queryObject(sql, bindParams, options) {
    options['outFormat'] = oracledb.OBJECT;
    
    return new Promise(function(resolve, reject) {
        oracledb.getConnection(
                  {
                    user          : "lei",
                    password      : "lei",
                    connectString : "//127.0.0.1:1521/orcl"
                })
        .then(function(connection){
            console.log("sql log: " + sql + " params " + bindParams);
            connection.execute(sql, bindParams, options)
            .then(function(results) {
                resolve(results);
                process.nextTick(function() {
                    oracleDbRelease(connection);
                });
            })
            .catch(function(err) {
                reject(err);
 
                process.nextTick(function() {
                    oracleDbRelease(connection);
                });
            });
        })
        .catch(function(err) {
            reject(err);
        });
    });
}

module.exports.queryObject = queryObject;