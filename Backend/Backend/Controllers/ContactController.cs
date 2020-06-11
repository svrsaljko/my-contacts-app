using Backend.Models;
using System;
using System.CodeDom;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace Backend.Controllers
{
    public class ContactController : ApiController
    {
        public IHttpActionResult  Get() {
            BackendModel entities = new BackendModel();
            List <ContactModel> contactsModel = new List<ContactModel>();
            List <ContactEmailModel> contactEmailsModel = new List<ContactEmailModel>();
            List<ContactNumberModel> contactNumbersModel = new List<ContactNumberModel>();

            
            IEnumerable<ContactEmail> contactEmails = entities.ContactEmail.ToList();
            foreach (ContactEmail c in contactEmails)
                {
                    contactEmailsModel.Add(new ContactEmailModel(c.Id, c.Email, c.ContactId));
                }

            IEnumerable<ContactNumber> contactNumbers = entities.ContactNumber.ToList();
            foreach (ContactNumber c in contactNumbers)
                {
                    contactNumbersModel.Add(new ContactNumberModel(c.Id, c.Number, c.ContactId));
                }

            IEnumerable<Contact> contacts = entities.Contact.ToList();
            foreach (Contact c in contacts)
                {
                    contactsModel.Add(new ContactModel(c.Id, c.FirstName, c.LastName, c.ContactAddress,
                     c.Tag, c.Gender, c.Bookmarked, contactEmailsModel.Where(ce => ce.ContactId == c.Id),
                     contactNumbersModel.Where(ce => ce.ContactId == c.Id)));
                }   
            
            
            return Ok(contactsModel);
        }
    }
}
