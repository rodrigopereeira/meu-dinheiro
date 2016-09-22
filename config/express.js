var express = require("express");
var consign = require('consign');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('./public'));
app.use(bodyParser.json());

//1.0 inserindo modulos de api e rotas pelo consign e passando o servidor como parametro

//criando modulo para acesso externo
module.exports = app;
