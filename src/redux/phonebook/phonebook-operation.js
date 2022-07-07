import axios from 'axios';
import * as actions from './phonebook-actions';

axios.defaults.baseURL = 'https://62c20f4aeff7f7856f193bbe.mockapi.io/api';

const addContact =
  ({ name, number }) =>
  dispatch => {
    const contact = {
      name,
      phone: number,
    };
    dispatch(actions.addContactsPending());

    axios
      .post('/contacts', contact)
      .then(res => {
        console.log(res.data);

        dispatch(actions.addContactsSuccess(res.data));
      })
      .catch(error => dispatch(actions.addContactsError(error)));
  };

const deleteContact = id => dispatch => {
  dispatch(actions.deleteContactsPending());

  axios
    .delete(`/contacts/${id}`)
    .then(res => dispatch(actions.deleteContactsSuccess(res.data)))
    .catch(error => dispatch(actions.deleteContactsError(error)));
};

const getContacts = () => async dispatch => {
  dispatch(actions.getContactsPending());
  try {
    const response = await axios.get('contacts');
    dispatch(actions.getContactsSuccess(response.data));
  } catch (error) {
    dispatch(actions.getContactsError(error));
  }
};

export { addContact, deleteContact, getContacts };
