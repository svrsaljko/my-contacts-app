import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { IContact } from 'src/app/interfaces/icontact';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import * as ContactActions from '../../actions/contact.action';

import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css'],
})
export class ContactsListComponent implements OnInit {
  contacts$: Observable<IContact[]>;
  contacts;

  constructor(private http: HttpService, private store: Store<any>) {}
  faStar = faStar;

  ngOnInit(): void {
    this.store.dispatch(new ContactActions.SetAllContacts());
    this.store.subscribe((state) => {
      console.log('state.contact', state.contact.payload);
      this.contacts = state.contact.payload;
    });
  }
}
