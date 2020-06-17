import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

import { IContact } from 'src/app/interfaces/icontact';
import * as ContactActions from '../../actions/contact.action';
import * as ContactReducers from '../../reducers/contact.reducer';
import { IAppState } from '../../iapp.state';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css'],
})
export class ContactsListComponent implements OnInit {
  contacts$: Observable<IContact[]>;

  constructor(private store: Store<IAppState>) {}
  faStar = faStar;

  ngOnInit(): void {
    this.store.dispatch(new ContactActions.SetAllContacts());
    this.contacts$ = this.store.pipe(select(ContactReducers.getContacts));
  }
}
