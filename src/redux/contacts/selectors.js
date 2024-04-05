import { createSelector } from '@reduxjs/toolkit';

export const selectContactsState = (state) => state.contacts;

export const selectIsLoading = createSelector(
  [selectContactsState],
  (contacts) => contacts.isLoading
);

export const selectError = createSelector(
  [selectContactsState],
  (contacts) => contacts.error
);

export const selectFilteredContacts = createSelector(
  [selectContactsState, (state) => state.filters.name],
  (contacts, filterName) => {
    return contacts.items.filter((contact) =>
      contact.name.includes(filterName)
    );
  }
);
