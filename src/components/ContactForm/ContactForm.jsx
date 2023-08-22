import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'store/contactSlice';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const newContact = {
      name,
      number,
    };

    dispatch(addContact(newContact));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        value={name}
        onChange={handleNameChange}
        className={css.input}
      />
      <input
        type="tel"
        name="number"
        placeholder="Phone number"
        required
        value={number}
        onChange={handleNumberChange}
        className={css.input}
      />
      <button type="submit" className={css.button}>
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
