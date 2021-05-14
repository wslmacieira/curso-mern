const Usuario = require('../models/Usuario');
const jwt = require("jsonwebtoken");
const secret = "mysecretkey"

module.exports = {
  async index(req, res) {
    const users = await Usuario.find();
    return res.json(users);
  },

  async create(req, res) {
    const { nome_usuario, email_usuario, tipo_usuario, senha_usuario } = req.body;

    const userExists = await Usuario.findOne({ email_usuario });

    if (!userExists) {
      const data = { nome_usuario, email_usuario, tipo_usuario, senha_usuario };
      const user = await Usuario.create(data);

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

  async delete(req, res) {
    const { _id } = req.params;
    const user = await Usuario.findByIdAndDelete({ _id });
    return res.json(user);
  },

  async update(req, res) {
    const { _id, nome_usuario, email_usuario, tipo_usuario, senha_usuario } = req.body;

    const data = { _id, nome_usuario, email_usuario, tipo_usuario, senha_usuario };

    const user = await Usuario.findOneAndUpdate({ _id }, data, { new: true });

    res.json(user);
  },

  async login(req, res) {
    const { email, senha } = req.body;
    await  Usuario.findOne({ email_usuario: email, tipo_usuario: 1},(err, user) => {
      if(err) {
        console.error(err);
        res.status(200).json({ error: "Erro no servidor. Por favor, tente novamente!"});
      } else if(!user){
        res.status(200).json({status:2, error: "E-mail não encontrado!"});
      } else {
        user.isCorrectPassword(senha, async function(err, same){
          if(err) {
            res.status(200).json({error: "Erro no servidor. Por favor, tente novamente!"});
          } else if(!same) {
            res.status(200).json({status: 2, error: "A senha não confere!"});
          } else {
            const payload = { email };
            const token = jwt.sign(payload, secret, {
              expiresIn: '24h'
            })
            res.cookie('token', token, {httpOnly: true});
            res.status(200)
            .json({status:1, auth:true, token, id_client: user._id, user_name: user.nome_usuario});
          }
        });
      }
    });
  }
}