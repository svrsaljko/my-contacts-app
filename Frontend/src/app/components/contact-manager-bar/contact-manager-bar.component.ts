import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router: Router, private store: Store<IAppState>) {}

  ROUTE = 'contact/list';

  faPlusSquare = faPlusSquare;
  faSearch = faSearch;
  faUser = faUser;
  hover: boolean;

  keywordForm = new FormControl('');

  onByFirstNameClick = () => {
    if (this.router.url !== `/${this.ROUTE}`) {
      this.router.navigate([this.ROUTE]);
    }
    this.store.dispatch(
      new ContactActions.SetAllContactsByPayload(this.keywordForm.value)
    );
  };
  onByLastNameClick = () => {
    if (this.router.url !== `/${this.ROUTE}`) {
      this.router.navigate([this.ROUTE]);
    }
    this.store.dispatch(
      new ContactActions.SetAllContactsByPayload(this.keywordForm.value)
    );
  };
  onByTagClick = () => {
    if (this.router.url !== `/${this.ROUTE}`) {
      this.router.navigate([this.ROUTE]);
    }
    this.store.dispatch(
      new ContactActions.SetAllContactsByPayload(this.keywordForm.value)
    );
  };
  onGetAllClick = () => {
    console.log('this.router: ', this.router.url);
    if (this.router.url !== `/${this.ROUTE}`) {
      this.router.navigate([this.ROUTE]);
    }
    this.store.dispatch(new ContactActions.SetAllContacts());
  };
  onAddNewClick = () => {
    this.router.navigate(['contact/create']);
  };

  ngOnInit(): void {
    console.log('keyword form:  VALID', this.keywordForm.valid);
  }
}
