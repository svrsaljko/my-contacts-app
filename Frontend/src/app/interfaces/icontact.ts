export interface IContact {
  Id: number;
  FirstName: string;
  LastName: string;
  ContactAddress: string;
  Tag: string;
  Gender: string;
  Bookmarked: boolean;
  ContactEmails: string[];
  ContactNumbers: string[];
}
