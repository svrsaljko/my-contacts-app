import { IContactEmails } from './icontact-emails';
import { IContactNumbers } from './icontact-numbers';

export interface IContact {
  Id: number;
  FirstName: string;
  LastName: string;
  ContactAddress: string;
  Tag: string;
  Gender: string;
  Bookmarked: boolean;
  ContactEmails: IContactEmails[];
  ContactNumbers: IContactNumbers[];
}
