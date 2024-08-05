const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Definición del esquema de User
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String, // o puedes usar Buffer si prefieres almacenar la imagen directamente en la base de datos
        required: false
    }
});


// Método para comparar la contraseña ingresada con la hasheada
userSchema.methods.comparePassword = function(password) {
    return bcrypt.compare(password, this.password);
};

// Creación del modelo User
const user = mongoose.model('user', userSchema);

module.exports = user;
