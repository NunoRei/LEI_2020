var Database = require('./db')

module.exports.getMeds = () => {
    return Database.queryObject("select * from prf_medicamentos where rxcui is not null", {}, {outFormat: ""});
}
