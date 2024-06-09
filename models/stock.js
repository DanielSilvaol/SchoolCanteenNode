const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    product: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
}, { collection: 'stocks' });

module.exports = mongoose.model('Stock', stockSchema);
