

exports.getContacts = (req, res) => {
    // Lógica para obtener todos los contactos
    res.status(200).json({ success: true, data: "Todos los contactos" });
};

exports.createContact = (req, res) => {
    // Lógica para crear un nuevo contacto
    res.status(201).json({ success: true, data: "Contacto creado" });
};

exports.updateContact = (req, res) => {
    // Lógica para actualizar un contacto existente
    res.status(200).json({ success: true, data: `Contacto ${req.params.id} actualizado` });
};

exports.deleteContact = (req, res) => {
    // Lógica para eliminar un contacto existente
    res.status(200).json({ success: true, data: `Contacto ${req.params.id} eliminado` });
};