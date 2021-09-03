const { Categoria } = require('../database/models');

exports.findAll = () => Categoria.findAll();


