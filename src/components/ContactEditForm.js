
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button, Alert, Image } from 'react-bootstrap';

const ContactEditForm = ({ contacts }) => {
  const { id } = useParams();
  const contact = contacts.find((contact) => contact.id === parseInt(id));

  const [editedContact, setEditedContact] = useState({
    name: contact.name,
    phoneNumber: contact.phoneNumber,
    email: contact.email,
  });

  const [savedMessage, setSavedMessage] = useState('');

  useEffect(() => {
    
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storedContacts) {
      const storedContact = storedContacts.find((c) => c.id === parseInt(id));
      if (storedContact) {
        setEditedContact(storedContact);
      }
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const updatedContacts = contacts.map((c) =>
      c.id === parseInt(id) ? editedContact : c
    );
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));

    
    saveChanges();

    console.log('Contact edited:', editedContact);
  };

  const saveChanges = () => {
   
    setSavedMessage('Contato atualizado com sucesso!');
   
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <Card className="mx-auto" style={{ width: '18rem'}}>
            <Image src={contact.photo} alt={contact.name} className='img-fluid' />
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    value={editedContact.name}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="formPhoneNumber" className='mt-3'>
                  <Form.Label>Contato</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter phone number"
                    name="phoneNumber"
                    value={editedContact.phoneNumber}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="formEmail" className='mt-3'>
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={editedContact.email}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className='mt-3'>
                  Salvar
                </Button>
              </Form>
              {savedMessage && (
                <Alert variant="success" className='mt-5'>
                  {savedMessage}
                </Alert>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactEditForm;
