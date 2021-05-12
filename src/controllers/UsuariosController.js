const Usuario = require('../models/Usuario');

module.exports = {
  async index(req, res) {
    const users = await Usuario.find();
    return res.json(users);
  },

  async create(req, res) {
    const { nome_usuario, email_usuario, tipo_usuario, senha_usuario } = req.body;

    const userExists = await Usuario.findOne({ email_usuario });

    if (!userExists) {
      const user = { nome_usuario, email_usuario, tipo_usuario, senha_usuario };
      await Usuario.create(user);

      return res.status(201).json(user);
    } else {
      return res.status(400).json({ message: 'Usuario já cadastrado!' })
    }
  },

  async details(req, res) {
    const { _id } = req.params;
    const user = await Usuario.findOne({ _id });
    return res.json(user);
  },
}