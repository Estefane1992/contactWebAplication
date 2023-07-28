import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ConfirmationModal = ({ contact, onCancel, onConfirm }) => {
  return (
    <Modal show={true} onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete {contact.name}?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => onConfirm(contact.id)}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationModal;
