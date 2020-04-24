var Database = require('./db')

module.exports.addMed = (nUtente,med) => {
    return Database.queryObject("insert into receita (n_utente,med) values ("+nUtente+",'"+med+"')", {}, {outFormat: ""});
}

module.exports.rmMed = (nUtente,med) => {
    return Database.
    queryObject("delete from receita where n_utente =" +nUtente+ " and med ='"+med+"'", {}, {outFormat: ""});
}

module.exports.resetRec = (nUtente) => {
    return Database.
    queryObject("delete from receita where n_utente = :utente", {utente:nUtente}, {outFormat: ""});
}

module.exports.utenteRec = (nUtente) => {
    return Database.
    queryObject("select receita.med, prf_medicamentos.DESC_C, prf_medicamentos.RXCUI from receita inner join prf_medicamentos ON receita.med = prf_medicamentos.codigo where receita.n_utente= :utente", {utente:nUtente}, {outFormat: ""});
}