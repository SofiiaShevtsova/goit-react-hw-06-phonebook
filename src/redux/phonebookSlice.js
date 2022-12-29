import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: JSON.parse(localStorage.getItem('contactsList')) || [],
  filter: '',
};

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    addContactsToState: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    removeContactFromState: (state, action) => {
      state.contacts = state.contacts.filter(
        elem => elem.id !== action.payload
      );
    },
    findContact: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContactsToState, removeContactFromState, findContact } =
  phonebookSlice.actions;

export default phonebookSlice.reducer;
