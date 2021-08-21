module.exports = function(sequelize, DataTypes) {
  const Pizza = sequelize.define('Pizza', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER.UNSIGNED
    },
    sabor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    categoria: {
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
    }
  });

  return Pizza;
}