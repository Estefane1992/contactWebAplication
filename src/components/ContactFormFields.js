
import React from 'react';
import { Form } from 'react-bootstrap';

const ContactFormFields = ({ name, phoneNumber, email, photo, onNameChange, onPhoneNumberChange, onEmailChange, onPhotoChange }) => {
  return (
    <>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formPhoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="text"
          value={phoneNumber}
          onChange={(e) => onPhoneNumberChange(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formPhoto">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control
          type="text"
          value={photo}
          onChange={(e) => onPhotoChange(e.target.value)}
          required
        />
      </Form.Group>
    </>
  );
};

export default ContactFormFields;
