import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IAppState } from '../../iapp.state';

import * as ContactActions from '../../actions/contact.action';

@Component({
  selector: 'app-contact-manager-bar',
  templateUrl: './contact-manager-bar.component.html',
  styleUrls: ['./contact-manager-bar.component.css'],
})
export class ContactManagerBarComponent implements OnInit {
  constructor(private store: Store<IAppState>) {}

  faPlusSquare = faPlusSquare;
  faSearch = faSearch;
  faUser = faUser;
  hover: boolean;

  keywordForm = new FormControl('');

  onByFirstNameClick = () => {
    this.store.dispatch(
      new ContactActions.SetAllContactsByPayload(this.keywordForm.value)
    );
  };
  onByLastNameClick = () => {
    this.store.dispatch(
      new ContactActions.SetAllContactsByPayload(this.keywordForm.value)
    );
  };
  onByTagClick = () => {
    this.store.dispatch(
      new ContactActions.SetAllContactsByPayload(this.keywordForm.value)
    );
  };
  onGetAllClick = () => {
    this.store.dispatch(new ContactActions.SetAllContacts());
  };
  onAddNewClick = () => {};

  ngOnInit(): void {
    console.log('keyword form:  VALID', this.keywordForm.valid);
  }
}
