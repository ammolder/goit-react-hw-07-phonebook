import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts(state, action) {
      return (state = action.payload);
    },
  },
});

export const { filterContacts } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
