const initialState = {
	contacts: [	]   // estado inicial, que sera con una lista vacia 
};

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: initialState,
		actions: {
			// para crear un nuevo contacto
			addContact: (newContact) => {
                const store = getStore();
                newContact.id = store.contacts.length + 1;
                setStore({ contacts: [...store.contacts, newContact] });
            },

			// para actualizar un contacto ya creado
			updateContact: (id, updatedContact) => {
				const store = getStore();
				const updatedContacts = store.contacts.map( contact =>
					contact.id === parseInt(id) ? { ...contact, ...updatedContact } : contact
				);
				setStore({ contacts: updatedContacts });
			},

			//para eliminar un contacto 
			deleteContact: (id) => {
				const store = getStore();
				const updatedContacts = store.contacts.filter(contact => contact.id !== id);
				setStore({ contacts: updatedContacts });
			}
		}
	};
};

export default getState;
