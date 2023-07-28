import React from 'react';
import { useParams} from 'react-router-dom';
import { Container, Row, Col, Card, Image} from 'react-bootstrap';

const ContactDetails = ({ contacts }) => {
  const { id } = useParams();
  const contact = contacts.find((contact) => contact.id === parseInt(id));

  if (!contact) {
    return <div>Contact not found.</div>;
  }

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <Card>
            <Image src={contact.photo} alt={contact.name} className='img-fluid' />
            <Card.Body>
              <Card.Title>{contact.name}</Card.Title>
              <Card.Text>Phone Number: {contact.phoneNumber}</Card.Text>
              <Card.Text>Email: {contact.email}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactDetails;
