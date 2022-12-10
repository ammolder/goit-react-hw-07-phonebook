import { useDispatch, useSelector } from 'react-redux';
// Імпортуємо генератор екшену
import { selectContacts, selectFilter } from 'redux/selectors';

import { deleteContact } from 'redux/operations';

import { Button } from './ContactsList.styled.js';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const handleDelete = id => dispatch(deleteContact(id));

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const visibleContacts = filterContacts();
  return (
    <ul>
      {visibleContacts.map(({ id, name, phone }) => (
        <li key={id}>
          {name}: {phone}
          <Button
            type="button"
            onClick={() => {
              handleDelete(id);
            }}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};
