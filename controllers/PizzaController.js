const { v4 } = require("uuid");
const PizzaModel = require("../models/Pizza");

const PizzaController = {
  buscarPizzaPeloId: (id) => {
    try {
      const pizza = PizzaModel.findById(id);
      console.log(pizza)
  
      return pizza;
    } catch (error) {
      return res.status(400).json({ error });
    }
  },
  listarTodos: () => PizzaModel.findAll(),
  criarUmaPizza: (sabor, categoria, preco) => {
    const pizza = PizzaModel.create({
      id: v4(),
      sabor,
      categoria,
      deleted: false,
      preco: Number(preco)
    });

    return pizza;
  },
  editarUmaPizza: (id, sabor, categoria, preco) => {
    const pizza = PizzaModel.update(id, {
      sabor,
      categoria,
      preco,
    });

    return pizza;
  },
  deletarUmaPizza: (id) => PizzaModel.destroy(id),
};

module.exports = PizzaController;
