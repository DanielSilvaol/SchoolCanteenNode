const User = require('../models/user');

exports.createUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = new User({ username, password });
        await user.save();
        res.status(201).send('Usuário criado com sucesso');
    } catch (err) {
        res.status(400).send(err.message);
    }
};
