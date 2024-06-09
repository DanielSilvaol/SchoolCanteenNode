const Client = require('../models/client');

exports.createClient = async (req, res) => {
    const { name, email, phone } = req.body;
    try {
        const client = new Client({ name, email, phone });
        await client.save();
        res.status(201).send('Cliente criado com sucesso');
    } catch (err) {
        res.status(400).send(err.message);
    }
};
