import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const ContactEditForm = ({ contact, onSubmit }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState('');
  const navigate = useNavigate(); 
  const { id } = useParams();

  useEffect(() => {
    setName(contact.name);
    setPhoneNumber(contact.phoneNumber);
    setEmail(contact.email);
    setPhoto(contact.photo);
  }, [contact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const editedContact = {
      id,
      name,
      phoneNumber,
      email,
      photo,
    };
    onSubmit(editedContact);
    navigate('/'); 
  };

  return (
    <div>
      <h2>Edit Contact</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </Form>
    </div>
  );
};

export default ContactEditForm;
