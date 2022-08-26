import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { addContact,deleteContact,getContacts } from './phonebook-operation';
import * as actions from './phonebook-actions';

const items = createReducer([], {
  [getContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) => 
     state.filter(contact => {
      return contact.id !== payload})
});

const loading = createReducer(false, {
  [addContact.fulfilled]: () => false,
  [addContact.pending]: () => true,
  [addContact.rejected]: () => false,
  [deleteContact.fulfilled] : () => false,
  [deleteContact.pending] : () => true,
  [deleteContact.rejected] : () => false

});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  loading,
  filter,
});
