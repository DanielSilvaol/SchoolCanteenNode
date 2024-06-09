const Stock = require('../models/stock');

exports.createStock = async (req, res) => {
    const { product, quantity } = req.body;
    try {
        const stock = new Stock({ product, quantity });
        await stock.save();
        res.status(201).send('Estoque criado com sucesso');
    } catch (err) {
        res.status(400).send(err.message);
    }
};

exports.updateStock = async (req, res) => {
    const { id, quantity } = req.body;
    try {
        const stock = await Stock.findById(id);
        if (!stock) {
            return res.status(404).send('Produto não encontrado no estoque');
        }
        stock.quantity -= quantity;
        await stock.save();
        res.status(200).send('Estoque atualizado com sucesso');
    } catch (err) {
        res.status(400).send(err.message);
    }
};
