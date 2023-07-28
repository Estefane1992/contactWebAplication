
import React from "react";
import { useParams } from "react-router-dom";
import ContactForm from "../components/ContactForm";

const EditContact = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Edit contact</h1>
      <ContactForm isEditing={true} contactId={id} />
    </div>
  );
};

export default EditContact;
