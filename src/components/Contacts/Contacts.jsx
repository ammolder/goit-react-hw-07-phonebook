import { useDispatch, useSelector } from 'react-redux';
// Імпортуємо генератор екшену
import { deleteContacts } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';
import { Button } from './Contacts.styled.js';
// import { getFilters } from 'redux/filterSlice.js';
// import { getContact } from 'redux/contactsSlice';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const handleDelete = id => dispatch(deleteContacts(id));

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const visibleContacts = filterContacts();
  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
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
