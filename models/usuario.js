const {model, Schema} = require('mongoose');


const UsuarioShema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],

    },
    apellido: {
        type: String,
        required: [true, 'El apellido es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatorio'],
    },
    password: {
        type: String,
        required: true,
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    estado: {
        type: Boolean,
        default: true
    },
});






module.exports = model('Usuarios', UsuarioShema);
