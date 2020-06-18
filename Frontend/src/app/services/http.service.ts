import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IContact } from '../interfaces/icontact';
import { IPatchBookmarkedReqBody } from '../interfaces/ipatch-bookmarked-req-body';

const CONTACTS_API_URL = 'http://localhost:50703/api/contact';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token',
  }),
};

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

  patchBookmarked(reqBody: IPatchBookmarkedReqBody) {
    return this.http.patch<IContact>(CONTACTS_API_URL, reqBody, httpOptions);
  }
}
