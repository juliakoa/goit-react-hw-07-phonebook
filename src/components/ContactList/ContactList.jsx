import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'store/contactSlice';
import css from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={css.listItem}>
          {contact.name} - {contact.number}
          <button
            className={css.deleteButton}
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
