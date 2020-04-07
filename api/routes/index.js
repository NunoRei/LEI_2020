var express = require('express');
var router = express.Router();
var Database = require('../controllers/db')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/meds',(req,res) =>{
  Database.getMeds()
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

  console.log(data)

  Database.insertUtente(nome,sexo,data,nUtente)
    .then(dados => {
      res.jsonp(dados)
    })
    .catch(erro => {
      res.jsonp(erro)
    })
})


module.exports = router;
