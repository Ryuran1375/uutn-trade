const mongoose = require('mongoose');

// Definición del esquema de Item
const itemSchema = new mongoose.Schema({
    categoria: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    }
});

// Creación del modelo Item
const categories = mongoose.model('categories', itemSchema);

module.exports = categories;