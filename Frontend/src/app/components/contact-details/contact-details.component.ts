import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

const ROUTE_LIST_All = 'contact/list';
const ROUTE_CONTACT_UPDATE = 'contact/update';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css'],
})
export class ContactDetailsComponent implements OnInit {
  constructor(
    private contactService: HttpService,
    private route: ActivatedRoute,
    private router: Router,
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
        // this.router.navigate([`contact/${id}`]);

        console.log('data: ', data);
      });
  };

  deleteContactOnClick = (id: number) => {
    this.contactService.deleteContact(id).subscribe((data) => {
      //primit data o contactu...
      console.log('data: ', data);
      this.router.navigate([ROUTE_LIST_All]);
    });
  };

  openUpdateContactFormOnClick = (id: number) => {
    this.router.navigate([`${ROUTE_CONTACT_UPDATE}/${id}`]);
  };

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.contactId = parseInt(id, 0);
    //izbrisati, triba selector sredit
    this.store.dispatch(new ContactActions.SetAllContacts());

    this.contact$ = this.store.pipe(
      select(ContactReducers.getContactById(this.contactId))
    );
  }
}
