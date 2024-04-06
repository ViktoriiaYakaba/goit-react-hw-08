import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter, selectNumberFilter } from './slice';

export const selectFilteredContacts = createSelector(
  [selectNameFilter, selectNumberFilter, state => state.contacts], // Aggiunto state => state.contacts
  (nameFilter, numberFilter, contacts) => {
    return contacts.filter(contact => {
      const nameMatch = contact.name.toLowerCase().includes(nameFilter.toLowerCase());
      const numberMatch = contact.phoneNumber.includes(numberFilter);
      return nameMatch && numberMatch;
    });
  }
);

