import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from 'redux/operations';

const contactsInitialState = { items: [], isLoading: false, error: null };

const exstraActions = [fetchContacts, addContact, deleteContact];

const getActions = type =>
  isAnyOf(...exstraActions.map(action => action[type]));

const fetchContactsSuccessReducer = (state, action) => {
  state.items = action.payload;
};
const addContactSuccessReducer = (state, action) => {
  state.items.push(action.payload);
};
const deleteContactsSuccessReducer = (state, action) => {
  const index = state.items.findIndex(task => task.id === action.payload.id);
  state.items.splice(index, 1);
};
const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const pendingReducer = state => {
  state.isLoading = true;
};
const fulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsSuccessReducer)
      .addCase(addContact.fulfilled, addContactSuccessReducer)
      .addCase(deleteContact.fulfilled, deleteContactsSuccessReducer)
      .addMatcher(getActions('pending'), pendingReducer)
      .addMatcher(getActions('rejected'), rejectedReducer)
      .addMatcher(getActions('fulfilled'), fulfilledReducer),
});
export const contactsReducer = contactsSlice.reducer;
