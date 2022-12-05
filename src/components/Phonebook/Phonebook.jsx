import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContacts } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import { Form, Label, Input, Button } from './Phonebook.styled';

export const Phonebook = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = e => {
    e.preventDefault();

    const names = contacts.map(item => item.name);
    if (names.includes(name)) {
      return alert(`${name} is already in contacts`);
    }

    dispatch(addContacts(name, number));
    reset();
  };

  const nameInputID = nanoid();
  const numberInputID = nanoid();

  const handleNameChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
        console.log('There is no such value');
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor={nameInputID}>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
            id={nameInputID}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor={numberInputID}>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={handleNameChange}
            id={numberInputID}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit ">Add contact</Button>
      </Form>
    </>
  );
};
