import React from "react";

const ContactCard = ({ contact }) => {
    return (
        <div className="card my-2">
            <div className="card-body">
                <h5 className="card-title">{contact.full_name}</h5>
                <p className="card-text">
                    <strong>Email:</strong> {contact.email}<br />
                    <strong>Phone:</strong> {contact.phone}<br />
                    <strong>Address:</strong> {contact.address}
                </p>
                <button className="btn btn-primary mr-2">Edit</button>
                <button className="btn btn-danger">Delete</button>
            </div>
        </div>
    );
};

export default ContactCard;