module.exports = function (sequelize, DataTypes) {
  const Categoria = sequelize.define('Categoria', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'categorias'
  });

  Categoria.associate = models => {
    Categoria.hasMany(models.Pizza, {
      foreignKey: 'categoria_id',
      as: 'pizzas'
    });
  };

  return Categoria;
}