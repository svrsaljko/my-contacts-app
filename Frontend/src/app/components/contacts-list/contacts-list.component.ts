import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { IContact } from 'src/app/interfaces/icontact';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css'],
})
export class ContactsListComponent implements OnInit {
  constructor(private http: HttpService) {}
  faStar = faStar;
  contacts: IContact[];

  ngOnInit(): void {
    this.http.getAllContacts().subscribe((data) => {
      this.contacts = data;
      console.log('this.contacts: ', this.contacts);
    });
  }
}
