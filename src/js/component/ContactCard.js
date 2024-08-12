import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const ContactCard = ({ contact }) => {
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate(`/edit-contact/${contact.id}`);
    };

    const { actions } = useContext(Context);

    const handleDelete = () => {

        // agregare una pequeña confirmacion antes de eliminar
        if (window.confirm(`estas seguro de querer eliminarlo ${contact.full_name}?`)) {
            actions.deleteContact(contact.id);
        }
    };

    return (
        <div className="card my-2">
            <div className="card-body">
                <h5 className="card-title">{contact.full_name}</h5>
                <p className="card-text">
                    <strong>Email:</strong> {contact.email}<br />
                    <strong>Phone:</strong> {contact.phone}<br />
                    <strong>Address:</strong> {contact.address}
                </p>
                <button className="btn btn-primary mr-2" onClick={handleEdit}>Edit</button>
                <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
};

export default ContactCard;