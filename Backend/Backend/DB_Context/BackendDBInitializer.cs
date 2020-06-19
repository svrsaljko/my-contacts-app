using Backend.DB_Models;
using System.Collections.Generic;
using System.Data.Entity;



namespace Backend.DB_Context
{

    public class BackendDBInitializer : CreateDatabaseIfNotExists<BackendModel>
    {
        List<Contact> contacts = new List<Contact>();
        List<ContactEmail> contactEmails = new List<ContactEmail>();
        List<ContactNumber> contactNumbers = new List<ContactNumber>();
        List<ContactTag> contactTags = new List<ContactTag>();


        public BackendDBInitializer()
        {
            //CONTACTS
            //id:1
            contacts.Add(new Contact
            {
                FirstName = "Stipe",
                LastName = "Stipic",
                ContactAddress = "Split Splitska Ulica",

                Gender = "Male",
                Bookmarked = true
            });

            //id:2
            contacts.Add(new Contact
            {
                FirstName = "Mate",
                LastName = "Matic",
                ContactAddress = "Zagreb Zagrebacka Ulica",
                Gender = "Male",
                Bookmarked = false
            });

            //id:3
            contacts.Add(new Contact
            {
                FirstName = "Stjepan",
                LastName = "Vrsaljko",
                ContactAddress = "Antuna Barca 3E",
                Gender = "Male",
                Bookmarked = true
            });

            //id:4
            contacts.Add(new Contact
            {
                FirstName = "Ante",
                LastName = "Antic",
                ContactAddress = "Adresa",
                Gender = "Male",
                Bookmarked = true
            });

            //id:5
            contacts.Add(new Contact
            {
                FirstName = "Ana",
                LastName = "Anic",
                ContactAddress = "Adresa",
                Gender = "Female",
                Bookmarked = true
            });

            //id:6
            contacts.Add(new Contact
            {
                FirstName = "Maja",
                LastName = "Majic",
                ContactAddress = "Adresa",
                Gender = "Female",
                Bookmarked = true
            });

            //id:7
            contacts.Add(new Contact
            {
                FirstName = "Sara",
                LastName = "Saric",
                ContactAddress = "Adresa",
                Gender = "Female",
                Bookmarked = true
            });

            //EMAILS
            contactEmails.Add(new ContactEmail
            {
                Email = "stipe.stipic@yahoo.com",
                ContactId = 1
            });
            contactEmails.Add(new ContactEmail
            {
                Email = "stipe.stipic@gmail.com",
                ContactId = 1
            });

            contactEmails.Add(new ContactEmail
            {
                Email = "mate.matic@yahoo.com",
                ContactId = 2
            });
            contactEmails.Add(new ContactEmail
            {
                Email = "mate.matic@gmail.com",
                ContactId = 2
            });

            contactEmails.Add(new ContactEmail
            {
                Email = "svrsal00@fesb.hr",
                ContactId = 3
            });
            contactEmails.Add(new ContactEmail
            {
                Email = "vrsaljkostjepan@gmail.com",
                ContactId = 3
            });

            contactEmails.Add(new ContactEmail
            {
                Email = "ante.antic@yahoo.com",
                ContactId = 4
            });
            contactEmails.Add(new ContactEmail
            {
                Email = "ante.antic@gmail.com",
                ContactId = 4
            });

            contactEmails.Add(new ContactEmail
            {
                Email = "ana.anic@yahoo.com",
                ContactId = 5
            });
            contactEmails.Add(new ContactEmail
            {
                Email = "ana.anic@gmail.com",
                ContactId = 5
            });


            contactEmails.Add(new ContactEmail
            {
                Email = "maja.majic@yahoo.com",
                ContactId = 6
            });
            contactEmails.Add(new ContactEmail
            {
                Email = "maja.majic@gmail.com",
                ContactId = 6
            });


            contactEmails.Add(new ContactEmail
            {
                Email = "sara.saric@yahoo.com",
                ContactId = 7
            });
            contactEmails.Add(new ContactEmail
            {
                Email = "sara.saric@gmail.com",
                ContactId = 7
            });
            //NUMBERS 

            contactNumbers.Add(new ContactNumber
            {
                Number = "099-111-2222",
                ContactId = 1
            });
            contactNumbers.Add(new ContactNumber
            {
                Number = "099-222-3333",
                ContactId = 1
            });

            contactNumbers.Add(new ContactNumber
            {
                Number = "091-222-3333",
                ContactId = 2
            });
            contactNumbers.Add(new ContactNumber
            {
                Number = "091-333-4444",
                ContactId = 2
            });

            contactNumbers.Add(new ContactNumber
            {
                Number = "091-333-4444",
                ContactId = 3
            });

            contactNumbers.Add(new ContactNumber
            {
                Number = "091-333-4444",
                ContactId = 4
            });

            contactNumbers.Add(new ContactNumber
            {
                Number = "091-333-4444",
                ContactId = 5
            });

            contactNumbers.Add(new ContactNumber
            {
                Number = "091-333-4444",
                ContactId = 6
            });

            contactNumbers.Add(new ContactNumber
            {
                Number = "091-333-4444",
                ContactId = 7
            });
            //TAGS
            contactTags.Add(new ContactTag
            {
                Tag = "Friend",
                ContactId = 1
            });
            contactTags.Add(new ContactTag
            {
                Tag = "Family",
                ContactId = 1
            });

            contactTags.Add(new ContactTag
            {
                Tag = "Bussiness",
                ContactId = 2
            });
            contactTags.Add(new ContactTag
            {
                Tag = "Cousin",
                ContactId = 2
            });

            contactTags.Add(new ContactTag
            {
                Tag = "Me",
                ContactId = 3
            });

            contactTags.Add(new ContactTag
            {
                Tag = "Family",
                ContactId = 4
            });

            contactTags.Add(new ContactTag
            {
                Tag = "Friend",
                ContactId = 4
            });

            contactTags.Add(new ContactTag
            {
                Tag = "Family",
                ContactId = 5
            });


            contactTags.Add(new ContactTag
            {
                Tag = "Business",
                ContactId = 5
            });

            contactTags.Add(new ContactTag
            {
                Tag = "Friend",
                ContactId = 6
            });

            contactTags.Add(new ContactTag
            {
                Tag = "Friend",
                ContactId = 7
            });
        }

        protected override void Seed(BackendModel context)
        {
            foreach (Contact c in contacts)
            {
                context.Contact.Add(c);
            }
            foreach (ContactEmail ce in contactEmails)
            {
                context.ContactEmail.Add(ce);
            }
            foreach (ContactNumber cn in contactNumbers)
            {
                context.ContactNumber.Add(cn);
            }
            foreach (ContactTag ct in contactTags)
            {
                context.ContactTag.Add(ct);
            }
            context.SaveChanges();
            base.Seed(context);
        }


    }





}