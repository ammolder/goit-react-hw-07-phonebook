import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

import { Wrapper } from './App.styled.js';
import { Phonebook } from './ContactsForm';
import { Contacts } from './ContactsList';
import { Filter } from './Filter';
export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <Phonebook />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Please wait...</b>}
      <Contacts />
    </Wrapper>
  );
};
