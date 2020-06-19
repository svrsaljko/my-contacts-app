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
                ContactAddress = "Adresa init",
            
                Gender = "Male",
                Bookmarked = true
            });
            //id:2
            contacts.Add(new Contact
            {
                FirstName = "Mate",
                LastName = "Matic",
                ContactAddress = "Adresa init",
             
                Gender = "Male",
                Bookmarked = false
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

            //TAG
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