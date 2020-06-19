import { IContactEmails } from '../interfaces/icontact-emails';
import { IContactNumbers } from '../interfaces/icontact-numbers';
import { IContactTags } from '../interfaces/icontact-tags';
export interface IReqBodyContact {
  NewContact: INewContact;
  NewContactEmails: IContactEmails[];
  NewContactNumbers: IContactNumbers[];
  NewContactTags: IContactTags[];
}

export interface INewContact {
  Id?: number;
  FirstName: string;
  LastName: string;
  ContactAddress: string;
  Gender: string;
  Bookmarked: boolean;
}
