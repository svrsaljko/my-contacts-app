import { Component, OnInit, Input } from '@angular/core';
import { IContact } from 'src/app/interfaces/icontact';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  // constructor() {}
  faStar = faStar;

  @Input() contact;

  ngOnInit(): void {}

  onContactClick = () => {
    console.log('contact clicked');
  };
}
