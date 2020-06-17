import { Action } from '@ngrx/store';
import { IContact } from '../interfaces/icontact';

export enum ContactActionTypes {
  SET_ALL_CONTACTS = '[CONTACTS LIST] SET_ALL',
  SET_ALL_CONTACTS_SUCCESS = '[CONTACTS LIST] SET_ALL SUCCESS',
  SET_ALL_CONTACTS_FAIL = '[CONTACTS LIST] SET_ALL FAIL',

  SET_ALL_CONTACTS_BY_PAYLOAD = '[CONTACT MANAGER BAR] SET_ALL_BY_PAYLOAD',
  SET_ALL_CONTACTS_BY_PAYLOAD_SUCCESS = '[CONTACT MANAGER BAR] SET_ALL_BY_PAYLOAD SUCCESS',
  SET_ALL_CONTACTS_BY_PAYLOAD_FAILURE = '[CONTACT MANAGER BAR] SET_ALL_BY_PAYLOAD FAILURE',
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

export class SetAllContactsByPayload implements Action {
  readonly type = ContactActionTypes.SET_ALL_CONTACTS_BY_PAYLOAD;
  constructor(public payload: string) {}
}

export class SetAllContactsByPayloadSuccess implements Action {
  readonly type = ContactActionTypes.SET_ALL_CONTACTS_BY_PAYLOAD_SUCCESS;

  constructor(public payload: IContact[]) {}
}

export class SetAllContactsByPayloadFailure implements Action {
  readonly type = ContactActionTypes.SET_ALL_CONTACTS_BY_PAYLOAD_FAILURE;

  constructor(public payload: string) {}
}

export type Actions =
  | SetAllContacts
  | SetAllContactsSuccess
  | SetAllContactsFail
  | SetAllContactsByPayload
  | SetAllContactsByPayloadSuccess
  | SetAllContactsByPayloadFailure;
