var Database = require('../controllers/db')

module.exports.insertUtente = (nome,sexo,data,nUtente) => {
    return Database.queryObject("insert into utente (nome,n_utente,data_nascimento,sexo) values('"+nome+"',"+nUtente+",to_date('"+ data +"','yyyy/mm/dd'),'" + sexo+ "')", {}, {outFormat: ""});
}