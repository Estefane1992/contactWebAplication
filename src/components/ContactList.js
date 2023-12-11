import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Col, Row } from 'react-bootstrap';
import { PersonFill, TelephoneFill, EnvelopeFill } from 'react-bootstrap-icons';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      <h2 className="text-center mb-4 mt-5">Lista de Contatos</h2>
      <Row lg={4} gutter={16} className="justify-content-center g-4 mt-5">
        {contacts.map((contact) => (
          <Col key={contact.id}  className="mb-3">
            <Card className="mx-auto" style={{ width: '18rem'}}>
              {contact.photo && <Card.Img variant="top" src={contact.photo} alt={contact.name} />}
              <Card.Body>
                <Card.Title> <PersonFill /> {contact.name}</Card.Title>
                <Card.Text> <TelephoneFill />  {contact.phoneNumber}</Card.Text>
                <Card.Text> <EnvelopeFill /> {contact.email}</Card.Text>
                <div className="d-flex justify-content-center">
                  <Link to={`/contacts/${contact.id}`} className="btn btn-primary me-3">
                    Detalhes
                  </Link>
                  <Button variant="warning" onClick={() => onDelete(contact.id)} className="me-3">
                    Deletar
                  </Button>
                  <Link to={`/edit/${contact.id}`} className="btn btn-primary">
                    Editar
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
