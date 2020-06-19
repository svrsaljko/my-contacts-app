import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IContact } from '../../interfaces/icontact';
import { IContactEmails } from '../../interfaces/icontact-emails';
import { IContactNumbers } from '../../interfaces/icontact-numbers';
import {
  IReqBodyContact,
  INewContact,
} from '../../interfaces/ireq-body-contact';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from '../../services/http.service';

import { Store, select } from '@ngrx/store';
import * as ContactReducers from '../../reducers/contact.reducer';
import * as ContactActions from '../../actions/contact.action';
import { IAppState } from '../../iapp.state';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-create-form',
  templateUrl: './contact-create-form.component.html',
  styleUrls: ['./contact-create-form.component.css'],
})
export class ContactCreateFormComponent implements OnInit {
  constructor(private contactService: HttpService) {}

  gender = '';
  contactFormEmails = [];
  contactFormNumbers = [];

  contactCreateMainDetailsForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    tag: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
  });

  contactAddEmailForm = new FormGroup({
    addEmail: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
  });
  contactAddNumberForm = new FormGroup({
    addNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
  });

  onMaleAvatarClick = () => {
    this.gender = 'Male';
    console.log('male');
  };

  onFemaleAvatarClick = () => {
    this.gender = 'Female';
    console.log('female');
  };

  setMaleAvatarClasses = () => {
    let avatarClasses = {
      avatarimage: this.gender === 'Female' || this.gender === '',
      avatarimageactiveMale: this.gender === 'Male',
    };
    return avatarClasses;
  };
  setFemaleAvatarClasses = () => {
    let avatarClasses = {
      avatarimage: this.gender === 'Male' || this.gender === '',
      avatarimageactiveFemale: this.gender === 'Female',
    };
    return avatarClasses;
  };

  addEmailFromEmailForm() {
    this.contactFormEmails.push(this.contactAddEmailForm.value);
  }

  getContactEmails = (): IContactEmails[] => {
    let contactEmails: IContactEmails[] = [];

    for (let i = 0; i < this.contactFormEmails.length; i++) {
      contactEmails[i] = {
        Email: this.contactFormEmails[i].addEmail,
      };
    }
    return contactEmails;
  };

  addNumberFromNumberForm() {
    this.contactFormNumbers.push(this.contactAddNumberForm.value);
  }

  getContactNumbers = (): IContactNumbers[] => {
    let contactNumbers: IContactNumbers[] = [];

    for (let i = 0; i < this.contactFormNumbers.length; i++) {
      contactNumbers[i] = {
        Number: this.contactFormNumbers[i].addNumber,
      };
    }
    return contactNumbers;
  };

  getNewContact = (): INewContact => {
    const updatedNewContact: INewContact = {
      FirstName: this.contactCreateMainDetailsForm.value.firstName,
      LastName: this.contactCreateMainDetailsForm.value.lastName,
      ContactAddress: this.contactCreateMainDetailsForm.value.address,
      Tag: this.contactCreateMainDetailsForm.value.tag,
      Gender: this.gender,
      Bookmarked: false,
    };
    return updatedNewContact;
  };

  submitCreate = () => {
    console.log('create called');
    let contactEmails: IContactEmails[] = this.getContactEmails();
    let contactNumbers: IContactNumbers[] = this.getContactNumbers();

    const contact = this.getNewContact();
    const newContact: IReqBodyContact = {
      NewContact: contact,
      NewContactEmails: contactEmails,
      NewContactNumbers: contactNumbers,
    };

    console.log('updatedContact: ', newContact);
    this.contactService.postContact(newContact).subscribe((data) => {
      console.log('data: ', data);
    });
  };

  ngOnInit(): void {}
}
