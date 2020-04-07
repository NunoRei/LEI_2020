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



module.exports = router;
