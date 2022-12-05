import { Wrapper } from './App.styled.js';
import { Phonebook } from './Phonebook';
import { Contacts } from './Contacts';
import { Filter } from './Filter';
export const App = () => {
  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <Phonebook />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </Wrapper>
  );
};
