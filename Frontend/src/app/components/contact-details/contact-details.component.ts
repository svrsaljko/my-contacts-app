import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IContact } from '../../interfaces/icontact';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from '../../services/http.service';

import { Store, select } from '@ngrx/store';
import * as ContactReducers from '../../reducers/contact.reducer';
import * as ContactActions from '../../actions/contact.action';
import { IAppState } from '../../iapp.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css'],
})
export class ContactDetailsComponent implements OnInit {
  constructor(
    private contactService: HttpService,
    private route: ActivatedRoute,
    private store: Store<IAppState>
  ) {}

  faStar = faStar;
  faTimesCircle = faTimesCircle;
  faEdit = faEdit;

  contactId: number;
  contact$: Observable<IContact>;

  updateBookmarkedOnClick = (id: number, bookmarkedUpdate: boolean) => {
    this.contactService
      .patchBookmarked({
        Id: id,
        Bookmarked: bookmarkedUpdate,
      })
      .subscribe((data) => {
        console.log('data: ', data);
      });
  };

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.contactId = parseInt(id, 0);
    this.store.dispatch(new ContactActions.SetAllContacts());

    this.contact$ = this.store.pipe(
      select(ContactReducers.getContactById(this.contactId))
    );
  }
}
