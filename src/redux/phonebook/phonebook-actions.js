import { createAction } from '@reduxjs/toolkit';

const addContactsSuccess = createAction('phonebook/requestContactsSuccess');
const addContactsPending = createAction('phonebook/requestContactsPending');
const addContactsError = createAction('phonebook/requestContactsError');

const deleteContactsSuccess = createAction('phonebook/deleteContactsSuccess');
const deleteContactsPending = createAction('phonebook/deleteContactsPending');
const deleteContactsError = createAction('phonebook/deleteContactsError');

const getContactsSuccess = createAction('phonebook/getContactsSuccess');
const getContactsPending = createAction('phonebook/getContactsPending');
const getContactsError = createAction('phonebook/getContactsError');

const changeFilter = createAction('phonebook/changeFilter');

export {
  changeFilter,
  addContactsSuccess,
  addContactsPending,
  addContactsError,
  deleteContactsSuccess,
  deleteContactsPending,
  deleteContactsError,
  getContactsSuccess,
  getContactsPending,
  getContactsError,
};
