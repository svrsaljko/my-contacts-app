import { Action } from '@ngrx/store';
import { IContact } from '../interfaces/icontact';

export enum ContactActionTypes {
  SET_ALL_CONTACTS = '[CONTACTS LIST] SET_ALL',
  SET_ALL_CONTACTS_SUCCESS = '[CONTACTS LIST] SET_ALL SUCCESS',
  SET_ALL_CONTACTS_FAIL = '[CONTACTS LIST] SET_ALL FAIL',
}

export class SetAllContacts implements Action {
  readonly type = ContactActionTypes.SET_ALL_CONTACTS;
  constructor() {}
}

export class SetAllContactsSuccess implements Action {
  readonly type = ContactActionTypes.SET_ALL_CONTACTS_SUCCESS;

  constructor(public payload: IContact[]) {}
}

export class SetAllContactsFail implements Action {
  readonly type = ContactActionTypes.SET_ALL_CONTACTS_FAIL;

  constructor(public payload: string) {}
}

export type Actions =
  | SetAllContacts
  | SetAllContactsSuccess
  | SetAllContactsFail;
