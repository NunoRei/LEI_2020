var Database = require('../controllers/db')

module.exports.insertUtente = (
    nome,
    sexo,
    data,
    nUtente,
    cc_id,
    sns,
    morada,
    codigo_postal,
    localidade,
    telemovel,
    email,
    obs
    ) => {

    var query = "insert into utente (nome,n_utente,data_nascimento,sexo,cc_id,"
                +"sns,morada,codigo_postal,localidade,telemovel,email,obs)"
                +" values('"+nome+"',"+nUtente+",to_date('"+ data +"','yyyy/mm/dd'),'" + sexo+ "','"+cc_id+"','"+sns+"','"+morada+"','"+codigo_postal+"','"+localidade+"','"+telemovel+"','"+email+"','"+obs+"')"
    
    return Database.queryObject(query, {}, {outFormat: ""});
}

module.exports.infoUtente = (number) => {
    return Database.queryObject("SELECT * FROM UTENTE WHERE N_UTENTE = :n", {n:number}, {outFormat: ""})
}

module.exports.updateUtente = (
    nome,
    sexo,
    data,
    nUtente,
    cc_id,
    sns,
    morada,
    codigo_postal,
    localidade,
    telemovel,
    email,
    obs
    ) => {

    var query = "update utente"
                +" set nome = '"+nome+"',"
                +" sexo = '"+sexo+"',"
                +" data_nascimento = to_date('"+ data +"','yyyy/mm/dd'),"
                +" cc_id = '"+cc_id+"',"
                +" sns = '"+sns+"',"
                +" morada = '"+morada+"',"
                +" codigo_postal = '"+codigo_postal+"',"
                +" localidade = '"+localidade+"',"
                +" telemovel = '"+telemovel+"',"
                +" email = '"+email+"',"
                +" obs = '"+obs+"',"
                +" data_atualizacao = CURRENT_DATE"
                +" where N_UTENTE = :n"
            
    return Database.queryObject(query, {n:nUtente}, {outFormat: ""});
}

module.exports.updatePicture = (
    nUtente,
    PicUrl
    ) => {

    var query = "update utente"
                +" set PICTURE = '"+PicUrl+"'"
                +" where N_UTENTE = :n"
            
    return Database.queryObject(query, {n:nUtente}, {outFormat: ""});
}

module.exports.updateState = (
    nUtente,
    estado
    ) => {

    var query = "update utente"
                +" set Estado = '"+estado+"'"
                +" where N_UTENTE = :n"
            
    return Database.queryObject(query, {n:nUtente}, {outFormat: ""});
}