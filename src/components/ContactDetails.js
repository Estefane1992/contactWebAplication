import React from 'react';
import { useParams} from 'react-router-dom';
import { Container, Row, Col, Card, Image} from 'react-bootstrap';
import { PersonFill, TelephoneFill, EnvelopeFill } from 'react-bootstrap-icons';


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
          <Card className="mx-auto" style={{ width: '18rem'}}>
            <Image src={contact.photo} alt={contact.name} className='img-fluid' />
            <Card.Body>
              <Card.Title> <PersonFill /> {contact.name}</Card.Title>
                <Card.Text> <TelephoneFill />  {contact.phoneNumber}</Card.Text>
                <Card.Text> <EnvelopeFill /> {contact.email}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactDetails;
