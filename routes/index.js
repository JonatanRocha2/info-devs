const { Router } = require("express");
const express = require("express");

const routes = express.Router();

const indexController = require("../controllers/index");

routes.get("/", indexController.exibirHome);

routes.get("/home", indexController.redirectHome);

routes.get("/categoria", indexController.exibirCategoria);

routes.get("/carrinho", indexController.exibirCarrinho);

routes.get("/produtos", indexController.exibirProdutos);

routes.get("/login", indexController.exibirLogin);

routes.get("/usuario", indexController.exibirUsuario);

routes.get("/finalizacaoCompra", indexController.exibirFinalizacaoCompra);

routes.get("/conectores", indexController.exibirConectores);

routes.get("/smartphone", indexController.exibirSmartphone);

routes.get("/computador", indexController.exibirComputador);

routes.get("/impressora", indexController.exibirImpressora);

routes.get("/monitor", indexController.exibirMonitor);

module.exports = routes;


 
  
   