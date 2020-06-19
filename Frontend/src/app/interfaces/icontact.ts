import { IContactEmails } from './icontact-emails';
import { IContactNumbers } from './icontact-numbers';
import { IContactTags } from './icontact-tags';

export interface IContact {
  Id: number;
  FirstName: string;
  LastName: string;
  ContactAddress: string;
  Gender: string;
  Bookmarked: boolean;
  ContactTags: IContactTags[];
  ContactEmails: IContactEmails[];
  ContactNumbers: IContactNumbers[];
}
