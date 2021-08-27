const { v4 } = require("uuid");
const PizzaModel = require("../models/Pizza");

const PizzaController = {
  buscarPizzaPeloId: (id) => {
    try {
      const pizza = PizzaModel.findById(id);

      return pizza;
    } catch (error) {
      return res.status(400).json({ error });
    }
  },
  listarTodos: () => PizzaModel.findAll(),
  criarUmaPizza: (sabor, categoria, preco) => {
    return PizzaModel.criarUmaPizza({ sabor, categoria, preco: Number(preco) })
  },
  editarUmaPizza: (id, sabor, categoria, preco) => {
    return PizzaModel.update(id, {
      sabor,
      categoria,
      preco,
    });
  },
  deletarUmaPizza: (id) => PizzaModel.destroy(id),
};

module.exports = PizzaController;
