const Contact = require('../models/Contact');

// Obtener todos los contactos del usuario autenticado
exports.getContacts = async (req, res) => {
    try {
        console.log('Usuario autenticado ID:', req.user.id); // Depuración

        const contacts = await Contact.find({ user: req.user.id });
        res.status(200).json({
            success: true,
            data: contacts
        });
    } catch (error) {
        console.error('Error al obtener los contactos:', error);
        res.status(500).json({
            success: false,
            message: 'Error al obtener los contactos'
        });
    }
};

// Crear un nuevo contacto
exports.createContact = async (req, res) => {
    try {
        const contact = await Contact.create({
            user: req.user.id,
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone
        });
        res.status(201).json({
            success: true,
            data: contact
        });
    } catch (error) {
        console.error('Error al crear el contacto:', error);
        res.status(500).json({
            success: false,
            message: 'Error al crear el contacto'
        });
    }
};

// Actualizar un contacto existente
exports.updateContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!contact) {
            return res.status(404).json({ success: false, message: 'Contacto no encontrado' });
        }
        res.status(200).json({ success: true, data: contact });
    } catch (error) {
        console.error('Error al actualizar el contacto:', error);
        res.status(500).json({
            success: false,
            message: 'Error al actualizar el contacto'
        });
    }
};

// Eliminar un contacto existente
exports.deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        if (!contact) {
            return res.status(404).json({ success: false, message: 'Contacto no encontrado' });
        }
        res.status(200).json({ success: true, data: `Contacto con id ${req.params.id} eliminado` });
    } catch (error) {
        console.error('Error al eliminar el contacto:', error);
        res.status(500).json({
            success: false,
            message: 'Error al eliminar el contacto'
        });
    }
};
