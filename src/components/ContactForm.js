import React, { useState, useEffect } from 'react';
import { Button, Container, Form, Image} from 'react-bootstrap';

const ContactForm = ({ contact, onSubmit }) => {
  const [formData, setFormData] = useState({
    id: contact ? contact.id : null,
    name: contact ? contact.name : '',
    phoneNumber: contact ? contact.phoneNumber : '',
    email: contact ? contact.email : '',
    photo: contact ? contact.photo : null,
  });
  const [formErrors, setFormErrors] = useState({});
  const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];

  useEffect(() => {
    setFormData({
      id: contact ? contact.id : null,
      name: contact ? contact.name : '',
      phoneNumber: contact ? contact.phoneNumber : '',
      email: contact ? contact.email : '',
      photo: contact ? contact.photo : null,
    });
  }, [contact]);

  const validateForm = (contacts) => {
    const errors = {};

    if (!formData.name || formData.name.trim() === '') {
      errors.name = 'Name is required';
    } else {
      const isDuplicateName = contacts.some(
        (contact) => contact.name.trim().toLowerCase() === formData.name.trim().toLowerCase()
      );
      if (isDuplicateName) {
        errors.name = 'Name must be unique';
      }
    }

    if (!formData.email || formData.email.trim() === '') {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
    } else {
      const isDuplicateEmail = contacts.some(
        (contact) => contact.email.trim().toLowerCase() === formData.email.trim().toLowerCase()
      );
      if (isDuplicateEmail) {
        errors.email = 'Email must be unique';
      }
    }

    if (!formData.phoneNumber || formData.phoneNumber.trim() === '') {
  errors.phoneNumber = 'Phone number is required';
} else if (!/^\(\d{2}\) \d{5}-\d{4}$/.test(formData.phoneNumber)) {
  errors.phoneNumber = 'Invalid phone number format. Please use (XX) XXXXX-XXXX';
}


    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData({
          ...formData,
          photo: event.target.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm(storedContacts)) {
      const newContact = {
        id: formData.id || new Date().getTime(),
        name: formData.name,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        photo: formData.photo,
      };

      onSubmit(newContact);
      storedContacts.push(newContact);
      localStorage.setItem('contacts', JSON.stringify(storedContacts));
      window.location.href = '/';
    }
  };

  return (
    <Container className="mt-4">
      <h2>{contact ? 'Edit Contact' : 'Add Contact'}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            isInvalid={!!formErrors.name}
          />
          <Form.Control.Feedback type="invalid">{formErrors.name}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="phoneNumber">
          <Form.Label>Phone Number:</Form.Label>
          <Form.Control
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            isInvalid={!!formErrors.phoneNumber}
          />
          <Form.Control.Feedback type="invalid">{formErrors.phoneNumber}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label className="form_email">Email:</Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!formErrors.email}
          />
          <Form.Control.Feedback type="invalid">{formErrors.email}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="photo">
          <Form.Label>Photo:</Form.Label>
          <Form.Control type="file" name="photo" onChange={handlePhotoChange} />
          {formData.photo && (
            <Image
              src={formData.photo}
              alt={formData.name}
              style={{ width: '50px', height: '50px', marginTop: '10px' }}
              thumbnail
            />
          )}
        </Form.Group>
        <Button type="submit" variant="primary">
          Save
        </Button>
      </Form>
    </Container>
  );
};

export default ContactForm;