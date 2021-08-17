const { Router } = require("express");
const express = require("express");

const routes = express.Router();

const indexController = require("../controllers/index");

routes.get("/", indexController.redirectHome);

routes.get("../src/views/home", indexController.exibirtHome);

routes.get("../src/views/categoria", indexController.exibirCategoria);

routes.get("../src/views/carrinho", indexController.exibirCarrinho);

routes.get("../src/views/produtos", indexController.exibirProdutos);

routes.get("../src/views/login", indexController.exibirLogin);

routes.get("../src/views/usuario", indexController.exibirUsuario);

routes.get("../src/views/finalizacaoCompra", indexController.exibirfinalizacaoCompra);

routes.get("../src/views/conectores", indexController.exibirConectores);

routes.get("../src/views/smartphone", indexController.exibirSmartphone);

routes.get("../src/views/computador", indexController.exibirComputador);

routes.get("../src/views/impressora", indexController.exibirImpressora);

routes.get("../src/views/monitor", indexController.exibirMonitor);

module.exports = routes;


 
  
   