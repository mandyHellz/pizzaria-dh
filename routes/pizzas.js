const { Router } = require("express");
const { Categoria } = require('../database/models');

const PizzaController = require("../controllers/PizzaController");
const verificarIdMiddleware = require("../middlewares/verificarId");

const router = Router();

router.get("/", async function (request, response) {
  const pizzas = await PizzaController.listarTodos();

  return response.render("pizzas", { pizzas, title: "Homepage" });
});

router.get("/cadastrar", async (req, res) => {
  const categorias = await Categoria.findAll();

  res.render("criarNovaPizza", { title: "Criar nova pizza", categorias })
});

router.get("/editar/:id", async (req, res) => {
  const { id } = req.params;
  const pizza = await PizzaController.buscarPizzaPeloId(id);
  res.render("editarPizza", { pizza })
});

router.get("/:id", verificarIdMiddleware, PizzaController.buscarPizzaPeloId);

router.post("/", async function (request, response) {
  const { sabor, categoria, preco } = request.body;

  await PizzaController.criarUmaPizza(sabor, categoria, preco);

  response.status(201).redirect("/pizzas");
});

router.put("/:id", verificarIdMiddleware, async function (request, response) {
  const { id } = request.params;
  const { sabor, categoria, preco } = request.body;

  try {
    await PizzaController.editarUmaPizza(id, sabor, categoria, preco);
    return response.redirect('/pizzas');
  } catch {
    return res.status(400).json({ err });
  }
});

router.delete("/:id", verificarIdMiddleware, async function (request, response) {
  const { id } = request.params;

  await PizzaController.deletarUmaPizza(id);

  return response.redirect("/pizzas");
});

module.exports = router;
