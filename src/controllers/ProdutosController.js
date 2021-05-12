const Produto = require('../models/Produto');

module.exports = {
  async index(req, res) {
    const produtos = await Produto.find();
    return res.json(produtos);
  },

  async create(req, res) {
    const { nome_produto, descricao_produto, preco_produto, qtd_produto } = req.body;
    const produtoExists = await Produto.findOne({ nome_produto });

    if (!produtoExists) {
      const data = { nome_produto, descricao_produto, preco_produto, qtd_produto };
      const produto = await Produto.create(data);

      return res.status(201).json(produto);
    } else {
      return res.status(400).json({ message: 'Produto já cadastrado!' })
    }
  },

  async details(req, res) {
    const { _id } = req.params;
    const produto = await Produto.findOne({ _id });
    return res.json(produto);
  },

  async delete(req, res) {
    const { _id } = req.params;
    const produto = await Produto.findByIdAndDelete({ _id });

    return res.json(produto);
  },

  async update(req, res) {
    const { _id, nome_usuario, email_usuario, tipo_usuario, senha_usuario } = req.body;

    const data = { _id, nome_usuario, email_usuario, tipo_usuario, senha_usuario };

    const produto = await Produto.findOneAndUpdate({ _id }, data, { new: true });

    res.json(produto);
  },
}