import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { IContact } from 'src/app/interfaces/icontact';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-center-container',
  templateUrl: './center-container.component.html',
  styleUrls: ['./center-container.component.css'],
})
export class CenterContainerComponent implements OnInit {
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
