const { Pizza } = require('../database/models');

const pizzas = require("../database/pizzas.json");
const fs = require("fs");

const PizzaModel = {
  findById: (id) => Pizza.findByPk(id),
  findAll: () => Pizza.findAll(),
  criarUmaPizza: ({ sabor, categoria, preco}) => Pizza.create({ sabor, categoria, preco}),
  update: (id, { sabor, categoria, preco }) => {
    const pizzaEncontrada = PizzaModel.findById(id);

    pizzaEncontrada.sabor = sabor;
    pizzaEncontrada.categoria = categoria;
    pizzaEncontrada.preco = preco;

    fs.writeFileSync("./database/pizzas.json", JSON.stringify(pizzas));

    return pizzaEncontrada;
  },
  destroy: (id) => Pizza.destroy({ where: { id } })
};

module.exports = PizzaModel;
