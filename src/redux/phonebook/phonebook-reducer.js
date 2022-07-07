import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as actions from './phonebook-actions';

const items = createReducer([], {
  [actions.getContactsSuccess]: (_, { payload }) => payload,
  [actions.addContactsSuccess]: (state, { payload }) => [...state, payload],
  [actions.deleteContactsSuccess]: (state, { payload }) => {
    return state.filter(contact => contact.id !== payload);
  },
});

const loading = createReducer(false, {
  [actions.addContactsSuccess]: () => false,
  [actions.addContactsPending]: () => true,
  [actions.addContactsError]: () => false,
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  loading,
  filter,
});
