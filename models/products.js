const mongoose = require('mongoose');

// Definición del esquema de Producto
const productoSchema = new mongoose.Schema({
    nombre_producto: {
        type: String,
        maxlength: 500,
        required: true
    },
    precio_producto: {
        type: String,
        maxlength: 500,
        required: true
    },
    descripcion_producto: {
        type: String,
        maxlength: 500,
        required: true
    },
    detalles_producto: {
        type: String,
        maxlength: 500,
        required: true
    },
    imagenes_producto: {
        type: String,
        maxlength: 500,
        required: false
    }
});

// Creación del modelo Producto
const products = mongoose.model('products', productoSchema);

module.exports = products;
