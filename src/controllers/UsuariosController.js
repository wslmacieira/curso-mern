const Usuario = require('../models/Usuario');

module.exports = {
  index(req, res) {
    res.json({ message: 'GET' })
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
}