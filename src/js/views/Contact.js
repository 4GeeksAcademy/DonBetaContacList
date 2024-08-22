import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import ContactCard from "../component/ContactCard.js";
import { Link } from "react-router-dom";

const Contact = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getContacts();
    }, []);


    return (
        <div className="container">
            <h1 className="my-4">Contacts</h1>
            <Link to="/add-contact" className="btn btn-success mb-4">Add New Contact</Link>
            <div className="row">
                {store.contacts.length > 0 ?
                    (store.contacts.map(contact => (
                        <ContactCard key={contact.id} contact={contact} />
                    ))
                    ) : (<p>Sin Contactos en tu lista, Puedes agregar contactos </p>

                    )}
            </div>
        </div>
    );
};
export default Contact;