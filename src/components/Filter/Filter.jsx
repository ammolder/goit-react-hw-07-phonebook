import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/slices/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const onSearch = e => {
    e.preventDefault();

    dispatch(filterContacts(e.currentTarget.value));
  };

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        placeholder="Please enter a name"
        onChange={onSearch}
      />
    </label>
  );
};
