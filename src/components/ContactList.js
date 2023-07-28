import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const ContactList = ({ contacts, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Contact List</h2>
      {contacts.map((contact) => (
        <Card key={contact.id} style={{ width: '18rem', marginBottom: '20px' }}>
           {contact.photo && <Card.Img variant="top" src={contact.photo} alt={contact.name} />}
          <Card.Body>
            <Card.Title>{contact.name}</Card.Title>
            <Card.Text>Number: {contact.phoneNumber}</Card.Text>
            <Card.Text>Email: {contact.email}</Card.Text>
            <Link to={`/contacts/${contact.id}`} className="btn btn-primary me-2">
              Details
            </Link>
            <Button variant="warning" onClick={() => onDelete(contact.id)}>
              Delete
            </Button>
            <Link to={`/edit/${contact.id}`} className="btn btn-primary me-2">
                Edit
              </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ContactList;
