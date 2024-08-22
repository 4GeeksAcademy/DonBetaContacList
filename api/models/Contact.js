const mongoose = require('mongoose');

// Definir el esquema de contacto
const ContactSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// Crear el modelo de contacto usando el esquema
const Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;
