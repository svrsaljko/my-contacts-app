import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IContact } from '../interfaces/icontact';

const CONTACTS_API_URL = 'http://localhost:50703/api/contact';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getContactsByTag(payload: string): Observable<IContact[]> {
    return this.http.get<IContact[]>(`${CONTACTS_API_URL}?tag=${payload}`);
  }
  getContactsByFirstName(payload: string): Observable<IContact[]> {
    return this.http.get<IContact[]>(
      `${CONTACTS_API_URL}?firstName=${payload}`
    );
  }
  getContactsByLastName(payload: string): Observable<IContact[]> {
    return this.http.get<IContact[]>(`${CONTACTS_API_URL}?lastName=${payload}`);
  }

  getAllContacts(): Observable<IContact[]> {
    return this.http.get<IContact[]>(CONTACTS_API_URL);
  }
}
