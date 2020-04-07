var Database = require('../controllers/db')

module.exports.getMeds = () => {
    return Database.getMeds("select * from prf_medicamentos where rxcui is not null", {}, {outFormat: ""});
}

