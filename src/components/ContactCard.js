// src/components/ContactCard.js
import React from "react";
import { Link } from "react-router-dom";


const ContactCard = ({ contact, onDelete }) => {
  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card">
      <img src={contact.photo} className="card-img-top" alt={contact.name} />
      <div className="card-body">
        <h5 className="card-title">{contact.name}</h5>
        <p className="card-text">Número de Contato: {contact.contactNumber}</p>
        <p className="card-text">Endereço de E-mail: {contact.email}</p>
        <Link to={`/contacts/${contact.id}`} className="btn btn-primary me-2">
          Detalhes
        </Link>
        <button className="btn btn-danger" onClick={() => onDelete(contact.id)}>
          Excluir
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
