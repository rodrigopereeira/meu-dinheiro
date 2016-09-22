var express = require("express");
var consign = require('consign');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 3000;


app.use(express.static('./public'));
app.use(bodyParser.json());

//1.0 inserindo modulos de api e rotas pelo consign e passando o servidor como parametro

//criando modulo para acesso externo
module.exports = app;


app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
