const { Pizza } = require('../database/models');

const PizzaModel = {
  findById: (id) => Pizza.findByPk(id),
  findAll: () => Pizza.findAll(),
  criarUmaPizza: ({ sabor, categoria: categoria_id, preco }) => Pizza.create({ sabor, categoria_id, preco }),
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
