const { Router } = require("express");

const PizzaController = require("../controllers/PizzaController");
const verificarIdMiddleware = require("../middlewares/verificarId");

const router = Router();

router.get("/", async function(request, response) {
  const pizzas = await PizzaController.listarTodos();

  return response.render("pizzas", { pizzas, title: "Homepage" });
});

router.get("/cadastrar", (req, res) => {
  res.render("criarNovaPizza", { title: "Criar nova pizza"})
});

router.get("/editar/:id", (req, res) => {
  const { id } = req.params;
  const pizza = PizzaController.buscarPizzaPeloId(id);
  res.render("editarPizza", { pizza })
});

router.get("/:id", verificarIdMiddleware, PizzaController.buscarPizzaPeloId);

router.post("/", async function(request, response) {
  const { sabor, categoria, preco } = request.body;

  await PizzaController.criarUmaPizza(sabor, categoria, preco);

  response.status(201).redirect("/pizzas");
});

router.put("/:id", verificarIdMiddleware, function(request, response) {
  const { id } = request.params;
  const { sabor, categoria, preco } = request.body;

  PizzaController.editarUmaPizza(id, sabor, categoria, preco)

  return response.redirect("/pizzas");
});

router.delete("/:id", verificarIdMiddleware, async function(request, response) {
  const { id } = request.params;

  await PizzaController.deletarUmaPizza(id);

  return response.redirect("/pizzas");
});

module.exports = router;
