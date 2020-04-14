var express = require('express');
var router = express.Router();
var medicamentos = require('../controllers/medicamento');
var utentes = require('../controllers/utente');
var receita = require('../controllers/receita');
var axios = require('axios');

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/meds',(req,res) =>{
  medicamentos.getMeds()
    .then(dados => {
      res.jsonp(dados.rows)
    })
    .catch(erro => {
      res.jsonp(erro)
    })
})

router.get('/recUtente',(req,res) =>{
  nUtente=req.body.nUtente;

  receita.utenteRec(nUtente)
    .then(dados => {
      res.jsonp(dados.rows)
    })
    .catch(erro => {
      res.jsonp(erro)
    })
})

router.post('/newUtente',(req,res)=>{
  nome=req.body.nome
  nUtente=req.body.nUtente
  sexo=req.body.sexo
  data=req.body.data
  
  utentes.insertUtente(nome,sexo,data,nUtente)
    .then(dados => {
      res.jsonp(dados)
    })
    .catch(erro => {
      res.jsonp(erro)
    })
})

router.post('/addMed',(req,res)=>{
  nUtente=req.body.nUtente
  med=req.body.med

  receita.addMed(nUtente,med)
    .then(dados => {
      res.jsonp(dados)
    })
    .catch(erro => {
      res.jsonp(erro)
    })
})

router.delete('/rmMed',(req,res)=>{
  nUtente=req.body.nUtente
  med=req.body.med

  receita.rmMed(nUtente,med)
    .then(dados => {
      res.jsonp(dados)
    })
    .catch(erro => {
      res.jsonp(erro)
    })
})

router.delete('/resetRec',(req,res)=>{
  nUtente=req.body.nUtente

  receita.resetRec(nUtente)
    .then(dados => {
      res.jsonp(dados)
    })
    .catch(erro => {
      res.jsonp(erro)
    })
})

router.get('/interaction',(req,res)=>{
  rxcuis = req.body.rxcuis
  str=''

  for(i=0;i<rxcuis.length;i++){
    if(i==rxcuis.length-1)
      str+=rxcuis[i].toString()
    else
      str+=rxcuis[i].toString()+"+"
  }
  axios.get('https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis='+str)
  .then(dados => {
    res.jsonp(dados.data)
  })
  .catch(erro => {
    res.jsonp(erro)
  })
})

module.exports = router;
