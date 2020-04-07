const Database = module.exports

'use strict';
const oracledb = require('oracledb');

const oracleDbRelease = function(conn) {
  conn.release(function (err) {
    if (err)
      console.log(err.message);
  });
};

function queryObject(sql, bindParams, options) {
    options['outFormat'] = oracledb.OBJECT;
    options.isAutoCommit = true;

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

Database.getMeds = () => {
    return queryObject("select * from prf_medicamentos where rxcui is not null", {}, {outFormat: ""});
}

Database.insertUtente = (nome,sexo,data,nUtente) => {
    return queryObject("insert into utente (nome,n_utente,data_nascimento,sexo) values('"+nome+"',"+nUtente+",to_date('"+ data +"','yyyy/mm/dd'),'" + sexo+ "')", {}, {outFormat: ""});
}

module.exports.queryObject = queryObject;