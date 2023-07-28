
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getContactById } from "../services/api";

const ContactDetails = () => {
  const { id } = useParams();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    getContactById(parseInt(id)).then((data) => setContact(data));
  }, [id]);

  return (
    <div>
      {contact ? (
        <div>
          <h1>{contact.name}</h1>
          <img src={contact.photo} className="img-thumbnail" alt={contact.name} />
          <p>Number: {contact.contactNumber}</p>
          <p>E-mail: {contact.email}</p>
          <Link to={`/contacts/${id}/edit`} className="btn btn-primary">Edit</Link>
        </div>
      ) : (
        <p>contact not found.</p>
      )}
    </div>
  );
};

export default ContactDetails;
