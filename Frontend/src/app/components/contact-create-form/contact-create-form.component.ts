import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IContactEmails } from '../../interfaces/icontact-emails';
import { IContactNumbers } from '../../interfaces/icontact-numbers';
import { IContactTags } from '../../interfaces/icontact-tags';
import {
  IReqBodyContact,
  INewContact,
} from '../../interfaces/ireq-body-contact';

import { HttpService } from '../../services/http.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-create-form',
  templateUrl: './contact-create-form.component.html',
  styleUrls: ['./contact-create-form.component.css'],
})
export class ContactCreateFormComponent implements OnInit {
  constructor(private contactService: HttpService, private router: Router) {}

  gender = '';
  contactFormEmails = [];
  contactFormNumbers = [];
  contactFormTags = [];

  contactCreateMainDetailsForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
  });

  contactAddEmailForm = new FormGroup({
    addEmail: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
  });
  contactAddNumberForm = new FormGroup({
    addNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
  });

  contactAddTagForm = new FormGroup({
    addTag: new FormControl('', [Validators.required, Validators.minLength(1)]),
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

  addTagFromTagForm() {
    this.contactFormTags.push(this.contactAddTagForm.value);
  }

  getContactTags = (): IContactTags[] => {
    let contactTags: IContactTags[] = [];

    for (let i = 0; i < this.contactFormTags.length; i++) {
      contactTags[i] = {
        Tag: this.contactFormTags[i].addTag,
      };
    }
    return contactTags;
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
      Gender: this.gender,
      Bookmarked: false,
    };
    return updatedNewContact;
  };

  submitCreate = () => {
    console.log('create called');
    let contactEmails: IContactEmails[] = this.getContactEmails();
    let contactNumbers: IContactNumbers[] = this.getContactNumbers();
    let contactTags: IContactTags[] = this.getContactTags();

    const contact = this.getNewContact();
    const newContact: IReqBodyContact = {
      NewContact: contact,
      NewContactEmails: contactEmails,
      NewContactNumbers: contactNumbers,
      NewContactTags: contactTags,
    };

    this.contactService.postContact(newContact).subscribe((data) => {
      this.router.navigate(['contact/list']);
    });
  };

  ngOnInit(): void {}
}
