import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { HttpService } from '../services/http.service';
import * as contactActions from '../actions/contact.action';
import { IContact } from '../interfaces/icontact';

@Injectable({
  providedIn: 'root',
})
export class ContactEffectService {
  constructor(
    private actions$: Actions,
    private contactsService: HttpService
  ) {}

  @Effect()
  setContacts$: Observable<Action> = this.actions$.pipe(
    ofType<contactActions.SetAllContacts>(
      contactActions.ContactActionTypes.SET_ALL_CONTACTS
    ),
    mergeMap((action: contactActions.SetAllContacts) =>
      this.contactsService.getAllContacts().pipe(
        map(
          (contacts: IContact[]) =>
            new contactActions.SetAllContactsSuccess(contacts)
        ),
        catchError((err) => of(new contactActions.SetAllContactsFail(err)))
      )
    )
  );

  @Effect()
  setContactsByTag$: Observable<Action> = this.actions$.pipe(
    ofType<contactActions.SetAllContactsByPayload>(
      contactActions.ContactActionTypes.SET_ALL_CONTACTS_BY_PAYLOAD
    ),
    mergeMap((action: contactActions.SetAllContactsByPayload) =>
      this.contactsService.getContactsByTag(action.payload).pipe(
        map(
          (contacts: IContact[]) =>
            new contactActions.SetAllContactsByPayloadSuccess(contacts)
        ),
        catchError((err) =>
          of(new contactActions.SetAllContactsByPayloadFailure(err))
        )
      )
    )
  );

  @Effect()
  setContactsByFirstName$: Observable<Action> = this.actions$.pipe(
    ofType<contactActions.SetAllContactsByPayload>(
      contactActions.ContactActionTypes.SET_ALL_CONTACTS_BY_PAYLOAD
    ),
    mergeMap((action: contactActions.SetAllContactsByPayload) =>
      this.contactsService.getContactsByFirstName(action.payload).pipe(
        map(
          (contacts: IContact[]) =>
            new contactActions.SetAllContactsByPayloadSuccess(contacts)
        ),
        catchError((err) =>
          of(new contactActions.SetAllContactsByPayloadFailure(err))
        )
      )
    )
  );

  @Effect()
  setContactsByLastName$: Observable<Action> = this.actions$.pipe(
    ofType<contactActions.SetAllContactsByPayload>(
      contactActions.ContactActionTypes.SET_ALL_CONTACTS_BY_PAYLOAD
    ),
    mergeMap((action: contactActions.SetAllContactsByPayload) =>
      this.contactsService.getContactsByLastName(action.payload).pipe(
        map(
          (contacts: IContact[]) =>
            new contactActions.SetAllContactsByPayloadSuccess(contacts)
        ),
        catchError((err) =>
          of(new contactActions.SetAllContactsByPayloadFailure(err))
        )
      )
    )
  );
}
