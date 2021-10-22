import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', (name, number) => ({
  payload: { id: uuidv4(), name, number },
}));

const deleteContact = createAction('contacts/delete');
const doFilter = createAction('contacts/filter');
const contactsAction = {
  addContact,
  deleteContact,
  doFilter,
};
export default contactsAction;
