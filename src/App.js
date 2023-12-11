import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import ContactDetails from './components/ContactDetails';
import ConfirmationModal from './components/ConfirmationModal';
import ContactEditForm from './components/ContactEditForm';
import contactsData from './data/contacts';
import './index.css';

const App = () => {
  const [contacts, setContacts] = useState(contactsData);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(storedContacts);
  }, [])

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const handleEditContact = (editedContact) => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === editedContact.id ? editedContact : contact
    );
    setContacts(updatedContacts);
  };

  const handleDeleteContact = (contactId) => {
    setContactToDelete(contactId);
    setShowConfirmationModal(true);
  };

  const handleConfirmDelete = (contactId) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== contactId);
    setContacts(updatedContacts);
    setContactToDelete(null);
    setShowConfirmationModal(false);
  };

  const handleCancelDelete = () => {
    setShowConfirmationModal(false);
    setContactToDelete(null);
  };

  return (
    <Router>
      <div>
        <Navbar expand="lg" bg='light'>
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className='me-auto'>
                
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/add">Adicionar Contato</Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route
            path="/"
            element={<ContactList contacts={contacts} onEdit={handleEditContact} onDelete={handleDeleteContact} />}
          />
          <Route path="/add" element={<ContactForm onSubmit={handleAddContact} />}  />
          <Route
            path="/contacts/:id"
            element={<ContactDetails contacts={contacts} />}
          />
          <Route
            path="/edit/:id"
            element={<ContactEditForm contacts={contacts} />}
          />
        </Routes>
        {showConfirmationModal && (
          <ConfirmationModal
            contact={contacts.find((contact) => contact.id === contactToDelete)}
            onCancel={handleCancelDelete}
            onConfirm={handleConfirmDelete}
          />
        )}
      </div>
    </Router>
  );
};

export default App;
