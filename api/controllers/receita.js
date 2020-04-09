var Database = require('./db')

module.exports.addMed = (nUtente,med) => {
    return Database.queryObject("insert into receita (n_utente,med) values ("+nUtente+",'"+med+"')", {}, {outFormat: ""});
}

module.exports.rmMed = (nUtente,med) => {
    return Database.
    queryObject("delete from receita where n_utente = :utente and med = :med", {utente:nUtente, med:med}, {outFormat: ""});
}

module.exports.resetRec = (nUtente) => {
    return Database.
    queryObject("delete from receita where n_utente = :utente", {utente:nUtente}, {outFormat: ""});
}