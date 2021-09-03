const { findAll } = require('../models/Categoria');

exports.listarTodos = () => findAll();