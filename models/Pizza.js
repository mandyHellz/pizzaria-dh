const { Pizza } = require('../database/models');

const PizzaModel = {
  findById: (id) => Pizza.findByPk(id),
  findAll: () => Pizza.findAll(),
  criarUmaPizza: ({ sabor, categoria, preco }) => Pizza.create({ sabor, categoria, preco }),
  update: (id, { sabor, categoria, preco }) => {
    return Pizza.update({
      sabor,
      categoria,
      preco
    }, { where: { id } });
  },
  destroy: (id) => Pizza.destroy({ where: { id } })
};

module.exports = PizzaModel;
