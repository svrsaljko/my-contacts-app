import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IContact } from '../../interfaces/icontact';
import { IContactEmails } from '../../interfaces/icontact-emails';
import { IContactNumbers } from '../../interfaces/icontact-numbers';
import { IContactTags } from '../../interfaces/icontact-tags';
import {
  IReqBodyContact,
  INewContact,
} from '../../interfaces/ireq-body-contact';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from '../../services/http.service';

import { Store, select } from '@ngrx/store';
import * as ContactReducers from '../../reducers/contact.reducer';
import * as ContactActions from '../../actions/contact.action';
import { IAppState } from '../../iapp.state';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-update-form',
  templateUrl: './contact-update-form.component.html',
  styleUrls: ['./contact-update-form.component.css'],
})
export class ContactUpdateFormComponent implements OnInit {
  constructor(
    private contactService: HttpService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<IAppState>
  ) {}

  contactId: number;
  contact$: Observable<IContact>;
  faTimesCircle = faTimesCircle;

  contactEmails = [];
  contactFormEmails = [];
  addingExistingEmailFlags = [];

  //NUMBER
  contactNumbers = [];
  contactFormNumbers = [];
  addingExistingNumberFlags = [];
  //Tag
  contactTags = [];
  contactFormTags = [];
  addingExistingTagFlags = [];

  contactUpdateMainDetailsForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      ,
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
    tag: new FormControl('', [Validators.required, Validators.minLength(1)]),
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

  //EMAIL

  addingEmailChecker = (i: number): boolean => {
    if (this.addingExistingEmailFlags[i] === true) {
      if (this.addingExistingEmailFlags[i] === true) {
        if (this.contactEmails[i] === null) {
          return false;
        } else {
          return true;
        }
      }
    } else {
      this.addingExistingEmailFlags[i] = false;
      return false;
    }
  };

  addEmail = (email: string, i: number) => {
    this.addingExistingEmailFlags[i] = true;
    if (this.contactEmails[i] === email) {
      this.contactEmails[i] = null;
    } else {
      this.contactEmails[i] = email;
    }
  };

  addEmailFromEmailForm() {
    this.contactFormEmails.push(this.contactAddEmailForm.value);
  }

  getContactEmails = (): IContactEmails[] => {
    const contactEmailsBuffer = [];
    for (let i = 0; i < this.contactEmails.length; i++) {
      if (this.contactEmails[i] != null) {
        contactEmailsBuffer[i] = this.contactEmails[i];
      }
    }
    for (let i = 0; i < this.contactFormEmails.length; i++) {
      contactEmailsBuffer[
        this.contactEmails.length + i
      ] = this.contactFormEmails[i].addEmail;
    }
    const contactEmailsFilter = contactEmailsBuffer.filter(
      (email) => typeof email === 'string'
    );
    let contactEmails: IContactEmails[] = [];

    for (let i = 0; i < contactEmailsFilter.length; i++) {
      contactEmails[i] = {
        ContactId: this.contactId,
        Email: contactEmailsFilter[i],
        Id: null,
      };
    }
    return contactEmails;
  };

  //NUMBER

  addingNumberChecker = (i: number): boolean => {
    if (this.addingExistingNumberFlags[i] === true) {
      if (this.addingExistingNumberFlags[i] === true) {
        if (this.contactNumbers[i] === null) {
          return false;
        } else {
          return true;
        }
      }
    } else {
      this.addingExistingNumberFlags[i] = false;
      return false;
    }
  };

  addNumber = (contactNumber: string, i: number) => {
    this.addingExistingNumberFlags[i] = true;
    if (this.contactNumbers[i] === contactNumber) {
      this.contactNumbers[i] = null;
    } else {
      this.contactNumbers[i] = contactNumber;
    }
  };

  addNumberFromNumberForm() {
    this.contactFormNumbers.push(this.contactAddNumberForm.value);
  }

  getContactNumbers = (): IContactNumbers[] => {
    const contactNumbersBuffer = [];
    for (let i = 0; i < this.contactNumbers.length; i++) {
      if (this.contactNumbers[i] != null) {
        contactNumbersBuffer[i] = this.contactNumbers[i];
      }
    }
    for (let i = 0; i < this.contactFormNumbers.length; i++) {
      contactNumbersBuffer[
        this.contactNumbers.length + i
      ] = this.contactFormNumbers[i].addNumber;
    }
    const contactNumbersFilter = contactNumbersBuffer.filter(
      (contactNumber) => typeof contactNumber === 'string'
    );
    let contactNumbers: IContactNumbers[] = [];

    for (let i = 0; i < contactNumbersFilter.length; i++) {
      contactNumbers[i] = {
        ContactId: this.contactId,
        Number: contactNumbersFilter[i],
        Id: null,
      };
    }
    return contactNumbers;
  };

  //TAG

  addingTagChecker = (i: number): boolean => {
    if (this.addingExistingTagFlags[i] === true) {
      if (this.addingExistingTagFlags[i] === true) {
        if (this.contactTags[i] === null) {
          return false;
        } else {
          return true;
        }
      }
    } else {
      this.addingExistingTagFlags[i] = false;
      return false;
    }
  };

  addTag = (contactTag: string, i: number) => {
    this.addingExistingTagFlags[i] = true;
    if (this.contactTags[i] === contactTag) {
      this.contactTags[i] = null;
    } else {
      this.contactTags[i] = contactTag;
    }
  };

  addTagFromTagForm() {
    this.contactFormTags.push(this.contactAddTagForm.value);
  }

  getContactTags = (): IContactTags[] => {
    const contactTagsBuffer = [];
    for (let i = 0; i < this.contactTags.length; i++) {
      if (this.contactTags[i] != null) {
        contactTagsBuffer[i] = this.contactTags[i];
      }
    }
    for (let i = 0; i < this.contactFormTags.length; i++) {
      contactTagsBuffer[this.contactTags.length + i] = this.contactFormTags[
        i
      ].addTag;
    }
    const contactTagsFilter = contactTagsBuffer.filter(
      (contactTag) => typeof contactTag === 'string'
    );
    let contactTags: IContactTags[] = [];

    for (let i = 0; i < contactTagsFilter.length; i++) {
      contactTags[i] = {
        ContactId: this.contactId,
        Tag: contactTagsFilter[i],
        Id: null,
      };
    }
    return contactTags;
  };

  //

  getUpdatedContact = (gender: string, bookmarked: boolean): INewContact => {
    const updatedNewContact: INewContact = {
      Id: this.contactId,
      FirstName: this.contactUpdateMainDetailsForm.value.firstName,
      LastName: this.contactUpdateMainDetailsForm.value.lastName,
      ContactAddress: this.contactUpdateMainDetailsForm.value.address,
      Gender: gender,
      Bookmarked: bookmarked,
    };
    return updatedNewContact;
  };

  submitUpdate = (gender: string, bookmarked: boolean) => {
    console.log('update:');
    let contactEmails: IContactEmails[] = this.getContactEmails();
    let contactNumbers: IContactNumbers[] = this.getContactNumbers();
    let contactTags: IContactTags[] = this.getContactTags();
    const updatedNewContact = this.getUpdatedContact(gender, bookmarked);
    const updatedContact: IReqBodyContact = {
      NewContact: updatedNewContact,
      NewContactEmails: contactEmails,
      NewContactNumbers: contactNumbers,
      NewContactTags: contactTags,
    };

    console.log('updatedContact: ', updatedContact);
    this.contactService.updateContact(updatedContact).subscribe((data) => {
      console.log('data: ', data);
      this.router.navigate(['contact/list']);
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
