import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Col, Row } from 'react-bootstrap';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      <h2 className="text-center mb-4">Contact List</h2>
      <Row lg={5} gutter={16} className="justify-content-center">
        {contacts.map((contact) => (
          <Col key={contact.id} md={12} className="mb-3">
            <Card>
              {contact.photo && <Card.Img variant="top" src={contact.photo} alt={contact.name} />}
              <Card.Body>
                <Card.Title>{contact.name}</Card.Title>
                <Card.Text>Number: {contact.phoneNumber}</Card.Text>
                <Card.Text>Email: {contact.email}</Card.Text>
                <div className="d-flex justify-content-center">
                  <Link to={`/contacts/${contact.id}`} className="btn btn-primary me-2">
                    Details
                  </Link>
                  <Button variant="warning" onClick={() => onDelete(contact.id)}>
                    Delete
                  </Button>
                  <Link to={`/edit/${contact.id}`} className="btn btn-primary me-2">
                    Edit
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ContactList;
