import React, { useContext } from "react";
import { Context } from "../store/appContext";
import ContactCard from "../component/ContactCard";

const Contact = () => {
    const { store } = useContext(Context);

    return (
        <div className="container">
            <h1 className="my-4">Contacts</h1>
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