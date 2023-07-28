
import React from "react";
import ContactForm from "../components/ContactForm";

const AddContact = () => {
  return (
    <div>
      <h1>Add Contact</h1>
      <ContactForm isEditing={false} />
    </div>
  );
};

export default AddContact;
