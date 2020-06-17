import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-manager-bar',
  templateUrl: './contact-manager-bar.component.html',
  styleUrls: ['./contact-manager-bar.component.css'],
})
export class ContactManagerBarComponent implements OnInit {
  constructor() {}

  faPlusSquare = faPlusSquare;
  faSearch = faSearch;
  faUser = faUser;
  hover: boolean;

  keywordForm = new FormControl('');

  onByFirstNameClick = () => {
    console.log('onByFirstNameClick');
  };
  onByLastNameClick = () => {
    console.log('onByLastNameClick');
  };
  onByTagClick = () => {
    console.log('onByTagClick');
  };
  onGetAllClick = () => {
    console.log('onGetAllClick');
  };
  onAddNewClick = () => {
    console.log('onAddNewClick');
  };

  ngOnInit(): void {
    console.log('keyword form:  VALID', this.keywordForm.valid);
  }
}
