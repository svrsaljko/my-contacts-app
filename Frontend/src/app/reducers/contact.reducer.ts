import { IContact } from '../interfaces/icontact';
import * as ContactActions from '../actions/contact.action';

const initialState: IContact[] = [];

export function reducer(
  state: IContact[] = [...initialState],
  action: ContactActions.Actions
) {
  switch (action.type) {
    case ContactActions.ContactActionTypes.SET_ALL_CONTACTS_SUCCESS:
      return { payload: action.payload };
    case ContactActions.ContactActionTypes.SET_ALL_CONTACTS_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
}
