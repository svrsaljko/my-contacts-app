import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IContact } from '../interfaces/icontact';
import * as ContactActions from '../actions/contact.action';

export interface IContactsState {
  contacts: IContact[];
  loading: boolean;
  loaded: boolean;
  error: string;
}

const initialState: IContactsState = {
  contacts: [],
  loading: false,
  loaded: false,
  error: '',
};

export function reducer(
  state: IContactsState = initialState,
  action: ContactActions.Actions
) {
  switch (action.type) {
    case ContactActions.ContactActionTypes.SET_ALL_CONTACTS:
      return {
        ...state,
        loading: true,
      };
    case ContactActions.ContactActionTypes.SET_ALL_CONTACTS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        contacts: action.payload,
      };
    case ContactActions.ContactActionTypes.SET_ALL_CONTACTS_FAIL:
      return {
        ...state,
        contacts: [],
        loading: false,
        loaded: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

const getContactFeatureState = createFeatureSelector<IContactsState>(
  'contacts'
);

export const getContacts = createSelector(
  getContactFeatureState,
  (state: IContactsState) => state.contacts
);
export const getContactsLoading = createSelector(
  getContactFeatureState,
  (state: IContactsState) => state.loading
);
export const getContactsLoaded = createSelector(
  getContactFeatureState,
  (state: IContactsState) => state.loaded
);
export const getError = createSelector(
  getContactFeatureState,
  (state: IContactsState) => state.error
);
