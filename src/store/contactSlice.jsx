import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) || [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      const newContact = action.payload;
      const { name, number } = newContact;

      if (
        state.contacts.some(
          contact => contact.name.toLowerCase() === name.toLowerCase()
        )
      ) {
        alert('This name is already in contacts');
        return;
      }

      if (state.contacts.some(contact => contact.number === number)) {
        alert('This number is already in contacts');
        return;
      }

      state.contacts.push(newContact);
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },
    deleteContact: (state, action) => {
      const contactId = action.payload;
      state.contacts = state.contacts.filter(
        contact => contact.id !== contactId
      );
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },
    loadContacts: state => {
      const storedContacts = JSON.parse(localStorage.getItem('contacts'));
      if (storedContacts) {
        state.contacts = storedContacts;
      }
    },
  },
});

export const { addContact, deleteContact, loadContacts } = contactSlice.actions;
export default contactSlice.reducer;
