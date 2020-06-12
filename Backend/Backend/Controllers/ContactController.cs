using AutoMapper;
using Backend.Configuration;
using Backend.DB_Context;
using Backend.DB_Models;
using Backend.Models;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;


namespace Backend.Controllers
{
    public class ContactController : ApiController
    {
        private readonly BackendModel entities = new BackendModel();
        private readonly IMapper imapper = new AutoMapperConfig().Configure();

        public IHttpActionResult Get()
        {
            IEnumerable<ContactModel> contacts = imapper.Map<IEnumerable<Contact>, IEnumerable<ContactModel>>(entities.Contact.ToList());
            IEnumerable<ContactEmailModel> contactEmails = imapper.Map<IEnumerable<ContactEmail>, IEnumerable<ContactEmailModel>>(entities.ContactEmail.ToList());
            IEnumerable<ContactNumberModel> contactNumbers = imapper.Map<IEnumerable<ContactNumber>, IEnumerable<ContactNumberModel>>(entities.ContactNumber.ToList());

            foreach (ContactModel c in contacts)
            {
                c.ContactEmails = contactEmails.Where(ce => ce.ContactId == c.Id);
                c.ContactNumbers = contactNumbers.Where(ce => ce.ContactId == c.Id);
            }


            return Ok(contacts);
        }


        [HttpPost]
        public IHttpActionResult Post(ReqBodyCreateContact contact)
        {

            entities.Contact.Add(contact.NewContact);
            entities.SaveChanges();
            int contactId = contact.NewContact.Id;

            foreach (ContactEmail ce in contact.NewContactEmails)
            {
                ce.ContactId = contactId;
                entities.ContactEmail.Add(ce);
            }
            foreach (ContactNumber cn in contact.NewContactNumbers)
            {
                cn.ContactId = contactId;
                entities.ContactNumber.Add(cn);
            }
            entities.SaveChanges();
            return Ok();
        }

        [HttpDelete]
        public IHttpActionResult Delete(int id)
        {
            if (id <= 0)
                return BadRequest("Not a valid Contact id");

            Contact contact = entities.Contact.Where(c => c.Id == id).FirstOrDefault();
            if (contact == null)
            {
                return BadRequest("Contact doesn't exist");
            }

            ContactEmail contactEmail = entities.ContactEmail.Where(c => c.ContactId == id).FirstOrDefault();
            ContactNumber contactNumber = entities.ContactNumber.Where(c => c.ContactId == id).FirstOrDefault();

            entities.ContactEmail.Remove(contactEmail);
            entities.ContactNumber.Remove(contactNumber);
            entities.Contact.Remove(contact);

            entities.SaveChanges();


            return Ok("Contact successfully deleted!");
        }
    }


}




