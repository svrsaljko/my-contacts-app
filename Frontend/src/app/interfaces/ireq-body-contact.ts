import { IContactEmails } from '../interfaces/icontact-emails';
import { IContactNumbers } from '../interfaces/icontact-numbers';
export interface IReqBodyContact {
  NewContact: INewContact;
  NewContactEmails: IContactEmails[];
  NewContactNumbers: IContactNumbers[];
}

export interface INewContact {
  Id: number;
  FirstName: string;
  LastName: string;
  ContactAddress: string;
  Tag: string;
  Gender: string;
  Bookmarked: boolean;
}
