// Importa o módulo Router do Express, que permite a criação de rotas.
const { Router } = require("express");

const UsersController = require("../controllers/UsersController.js")

// Cria uma instância do Router para definir as rotas relacionadas aos usuários.
const userRoutes = Router();


const usersController = new UsersController();

// Define uma rota que responde a requisições HTTP do tipo POST no caminho "/".
userRoutes.post("/", usersController.create);

// Exporta as rotas definidas para que possam ser usadas em outros lugares do aplicativo.
module.exports = userRoutes;
