import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-center-container',
  templateUrl: './center-container.component.html',
  styleUrls: ['./center-container.component.css'],
})
export class CenterContainerComponent implements OnInit {
  constructor(private http: HttpService) {}

  contacts: object;

  ngOnInit(): void {
    this.http.getAllContacts().subscribe((data) => {
      this.contacts = data;
      console.log('this.contacts: ', this.contacts);
    });
  }
}
