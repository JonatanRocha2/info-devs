const indexController = {

    exibirHome: (req, res) => {
      res.render("src/views/home");
    },
  
    redirectHome: (req, res) => {
      res.redirect("/");
    },
  
    exibirCategoria: (req, res) => {
      res.render("src/views/categoria");
    },
  
    exibirCarrinho: (req, res) => {
        res.render("src/views/carrinho");
    },

    exibirProdutos: (req, res) => {
        res.render("src/views/produtos");
    },

    exibirLogin: (req, res) => {
      res.render("src/views/login");
    },

    exibirUsuario: (req, res) => {
    res.render("src/views/Usuario");
    },

    exibirFinalizacaoCompra: (req, res) => {
        res.render("src/views/finalizacaoCompra");
    },

    exibirConectores: (req, res) => {
      res.render("src/views/conectores");
    },

    exibirSmartphone: (req, res) => {
      res.render("src/views/smartphone");
    },

    exibirComputador: (req, res) => {
      res.render("src/views/computador");
   },

    exibirImpressora: (req, res) => {
      res.render("src/views/impressora");
   },

    exibirMonitor: (req, res) => {
      res.render("src/views/monitor");
   },
    
  };
  
  module.exports = indexController;