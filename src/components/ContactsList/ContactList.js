import { useEffect } from 'react';
import { ContactsList, ListItem, DeleteButton } from './ContactListStyle';
import { useDispatch, useSelector } from 'react-redux';
import {
  getValueItems,
  getValueFilter,
} from '../../redux/phonebook/phonebook-selectors';
import { getContacts,deleteContact } from 'redux/phonebook/phonebook-operation';



function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getValueItems);
  const filter = useSelector(getValueFilter);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  const nozmalizedContacts = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(nozmalizedContacts)
  );

  return (
    <ContactsList>
      {contacts.length > 0 &&
        filteredContacts.map(({ name, phone, id }) => {
          return (
            <ListItem key={id}>
              {name}:{phone}
              <DeleteButton
                type="button"
                onClick={() =>  dispatch(deleteContact(id))}
              >
                Delete
              </DeleteButton>
            </ListItem>
          );
        })}
    </ContactsList>
  );
}

export default ContactList;
