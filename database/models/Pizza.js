module.exports = function (sequelize, DataTypes) {
  const Pizza = sequelize.define('Pizza', {
    sabor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    preco: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    categoria_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    }
  });

  Pizza.associate = models => {
    Pizza.belongsTo(models.Categoria, {
      foreignKey: 'categoria_id',
      as: 'categoria'
    })
  };

  return Pizza;
}