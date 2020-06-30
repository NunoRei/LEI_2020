require('dotenv').config({path: './cloud.env'});
var express = require('express');
const cloudinary = require('cloudinary').v2;
const formData = require('express-form-data');
const cors = require('cors');
var router = express.Router();
var medicamentos = require('../controllers/medicamento');
var utentes = require('../controllers/utente');
var receita = require('../controllers/receita');
var axios = require('axios');

var multer = require('multer')
var upload = multer({dest:'uploads/'})
var fs = require('fs')
var path = require('path')

router.use(function(req, res, next) {
  formData.parse()
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Access-Control-Expose-Headers", "Location");
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

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET
})

router.post('/image-upload', upload.array('image'), (req, res) => {

  const values = Object.values(req.files)
  const promises = values.map(image => cloudinary.uploader.upload(image.path))
  
  Promise
    .all(promises)
    .then(results => {
      fs.readdir('uploads', (err, files) => {
        if (err) throw err;
  
        for (const file of files) {
          fs.unlink(path.join('uploads', file), err => {
            if (err) throw err;
          });
        }
      }) 
      res.json(results)
    })

   
})

router.get('/utente', (req,res) =>{
  nUtente = req.query.nUtente

  utentes.infoUtente(nUtente)
    .then(dados => {
      res.json(dados.rows[0])
    })
    .catch(erro => {
      res.jsonp(erro)
    })
})

router.get('/recUtente',(req,res) =>{
  nUtente=req.query.nUtente;

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
  sexo=req.body.sexo
  data=req.body.data
  nUtente=req.body.nUtente
  cc_id=req.body.cc_id
  sns=req.body.sns
  morada=req.body.morada
  codigo_postal=req.body.codigo_postal
  localidade=req.body.localidade
  telemovel=req.body.telemovel
  email=req.body.email
  obs=req.body.obs

  
  utentes.insertUtente(nome,sexo,data,nUtente,cc_id,sns,morada,
    codigo_postal,localidade,telemovel,email,obs)
    .then(dados => {
      res.jsonp(dados)
    })
    .catch(erro => {
      res.jsonp(erro)
    })
})

router.put('/updateUtente', (req,res)=>{

  nome=req.body.nome
  sexo=req.body.sexo
  data=req.body.data
  nUtente=req.body.nUtente
  cc_id=req.body.cc_id
  sns=req.body.sns
  morada=req.body.morada
  codigo_postal=req.body.codigo_postal
  localidade=req.body.localidade
  telemovel=req.body.telemovel
  email=req.body.email
  obs=req.body.obs

  utentes.updateUtente(nome,sexo,data,nUtente,cc_id,sns,morada,
    codigo_postal,localidade,telemovel,email,obs)
    .then(dados => {
      res.end(JSON.stringify(dados));
    })
    .catch(erro => {
      res.jsonp(erro)
    })
})

router.put('/updatePicture', (req,res)=>{

  nUtente=req.body.nUtente
  PicUrl=req.body.PicUrl

  utentes.updatePicture(nUtente,PicUrl)
    .then(dados => {
      res.end(JSON.stringify(dados));
    })
    .catch(erro => {
      res.jsonp(erro)
    })
})

router.put('/updateState', (req,res)=>{

  nUtente=req.body.nUtente
  Estado=req.body.Estado

  utentes.updateState(nUtente,Estado)
    .then(dados => {
      res.end(JSON.stringify(dados));
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

  for(i=0;i<rxcuis.length;i++)
  {
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
