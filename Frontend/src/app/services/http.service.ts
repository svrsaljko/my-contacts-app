import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IContact } from '../interfaces/icontact';
import { Observable } from 'rxjs';

const CONTACTS_API_URL = 'http://localhost:50703/api/contact';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getAllContacts() {
    return this.http.get<IContact[]>(CONTACTS_API_URL);
  }
}
