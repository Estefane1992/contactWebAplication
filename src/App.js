import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import ContactDetails from './components/ContactDetails';
import ConfirmationModal from './components/ConfirmationModal';
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
        <nav className='navigation'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">Add Contact</Link>
            </li>
          </ul>
        </nav>
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
            element={<ContactForm onSubmit={handleEditContact} />}
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
