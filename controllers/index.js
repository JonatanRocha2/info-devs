const indexController = {

    exibirHome: (req, res) => {
      res.render("home");
    },
  
    redirectHome: (req, res) => {
      res.redirect("/");
    },
  
    exibirCategoria: (req, res) => {
      res.render("categoria");
    },
  
    exibirCarrinho: (req, res) => {
        res.render("carrinho");
    },

    exibirProdutos: (req, res) => {
        res.render("produtos");
    },

    exibirLogin: (req, res) => {
      res.render("login");
    },

    exibirUsuario: (req, res) => {
    res.render("usuario");
    },

    exibirFinalizacaoCompra: (req, res) => {
        res.render("finalizacaoCompra");
    },

    exibirConectores: (req, res) => {
      res.render("conectores");
    },

    exibirSmartphone: (req, res) => {
      res.render("smartphone");
    },

    exibirComputador: (req, res) => {
      res.render("computador");
   },

    exibirImpressora: (req, res) => {
      res.render("impressora");
   },

    exibirMonitor: (req, res) => {
      res.render("monitor");
   },
    
  };
  
  module.exports = indexController;