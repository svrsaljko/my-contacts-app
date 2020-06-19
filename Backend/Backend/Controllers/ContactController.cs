using AutoMapper;
using Backend.Configuration;
using Backend.DB_Context;
using Backend.DB_Models;
using Backend.Models;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;


namespace Backend.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class ContactController : ApiController
    {
        private readonly BackendModel entities = new BackendModel();
        private readonly IMapper imapper = new AutoMapperConfig().Configure();

        public IHttpActionResult Get()
        {
            IEnumerable<ContactModel> contacts = imapper.Map<IEnumerable<Contact>,
                IEnumerable<ContactModel>>(entities.Contact.ToList());
            IEnumerable<ContactEmailModel> contactEmails = imapper.Map<IEnumerable<ContactEmail>,
                IEnumerable<ContactEmailModel>>(entities.ContactEmail.ToList());
            IEnumerable<ContactNumberModel> contactNumbers = imapper.Map<IEnumerable<ContactNumber>,
                IEnumerable<ContactNumberModel>>(entities.ContactNumber.ToList());

            IEnumerable<ContactTagModel> contactTags = imapper.Map<IEnumerable<ContactTag>,
                IEnumerable<ContactTagModel>>(entities.ContactTag.ToList());

            foreach (ContactModel c in contacts)
            {
                c.ContactEmails = contactEmails.Where(ce => ce.ContactId == c.Id);
                c.ContactNumbers = contactNumbers.Where(cn => cn.ContactId == c.Id);
                c.ContactTags = contactTags.Where(ct => ct.ContactId == c.Id);
             }


            return Ok(contacts);
        }


        //[HttpPost]
        //public IHttpActionResult Post(ReqBodyContact reqBodyContact)
        //{
        //    Contact contact = reqBodyContact.NewContact;
        //    IEnumerable<ContactEmail> contactEmails = reqBodyContact.NewContactEmails;
        //    IEnumerable<ContactNumber> contactNumbers = reqBodyContact.NewContactNumbers;

        //    entities.Contact.Add(contact);
        //    entities.SaveChanges();
        //    int contactId = contact.Id;

        //    foreach (ContactEmail ce in contactEmails)
        //    {
        //        ce.ContactId = contactId;
        //        entities.ContactEmail.Add(ce);
        //    }
        //    foreach (ContactNumber cn in contactNumbers)
        //    {
        //        cn.ContactId = contactId;
        //        entities.ContactNumber.Add(cn);
        //    }
        //    entities.SaveChanges();
        //    return Ok();
        //}

        //[HttpDelete]
        //public IHttpActionResult Delete(int id)
        //{
        //    if (id <= 0)
        //        return BadRequest("Not a valid Contact id");

        //    Contact contact = entities.Contact.Where(c => c.Id == id).FirstOrDefault();
        //    if (contact == null)
        //    {
        //        return BadRequest("Contact doesn't exist");
        //    }

        //    ContactEmail contactEmail = entities.ContactEmail.Where(c => c.ContactId == id).FirstOrDefault();
        //    ContactNumber contactNumber = entities.ContactNumber.Where(c => c.ContactId == id).FirstOrDefault();

        //    entities.ContactEmail.Remove(contactEmail);
        //    entities.ContactNumber.Remove(contactNumber);
        //    entities.Contact.Remove(contact);

        //    entities.SaveChanges();


        //    return Ok("Contact successfully deleted!");
        //}

        //public IHttpActionResult GetByFirstName(string firstName)
        //{

        //    IEnumerable<ContactModel> contacts = imapper.Map<IEnumerable<Contact>,
        //    IEnumerable<ContactModel>>(entities.Contact.Where(c => c.FirstName == firstName).ToList());

        //    IEnumerable<ContactEmailModel> contactEmails = imapper.Map<IEnumerable<ContactEmail>,
        //        IEnumerable<ContactEmailModel>>(entities.ContactEmail.ToList());
        //    IEnumerable<ContactNumberModel> contactNumbers = imapper.Map<IEnumerable<ContactNumber>,
        //        IEnumerable<ContactNumberModel>>(entities.ContactNumber.ToList());

        //    foreach (ContactModel c in contacts)
        //    {
        //        c.ContactEmails = contactEmails.Where(ce => ce.ContactId == c.Id);
        //        c.ContactNumbers = contactNumbers.Where(ce => ce.ContactId == c.Id);
        //    }

        //    return Ok(contacts);
        //}


        //public IHttpActionResult GetByLastName(string lastName)
        //{

        //    IEnumerable<ContactModel> contacts = imapper.Map<IEnumerable<Contact>,
        //    IEnumerable<ContactModel>>(entities.Contact.Where(c => c.LastName == lastName).ToList());

        //    IEnumerable<ContactEmailModel> contactEmails = imapper.Map<IEnumerable<ContactEmail>,
        //        IEnumerable<ContactEmailModel>>(entities.ContactEmail.ToList());
        //    IEnumerable<ContactNumberModel> contactNumbers = imapper.Map<IEnumerable<ContactNumber>,
        //        IEnumerable<ContactNumberModel>>(entities.ContactNumber.ToList());

        //    foreach (ContactModel c in contacts)
        //    {
        //        c.ContactEmails = contactEmails.Where(ce => ce.ContactId == c.Id);
        //        c.ContactNumbers = contactNumbers.Where(ce => ce.ContactId == c.Id);
        //    }

        //    return Ok(contacts);
        //}


        //public IHttpActionResult GetByTag(string tag)
        //{

        //    IEnumerable<ContactModel> contacts = imapper.Map<IEnumerable<Contact>,
        //    IEnumerable<ContactModel>>(entities.Contact.Where(c => c.Tag == tag).ToList());

        //    IEnumerable<ContactEmailModel> contactEmails = imapper.Map<IEnumerable<ContactEmail>, IEnumerable<ContactEmailModel>>(entities.ContactEmail.ToList());
        //    IEnumerable<ContactNumberModel> contactNumbers = imapper.Map<IEnumerable<ContactNumber>, IEnumerable<ContactNumberModel>>(entities.ContactNumber.ToList());

        //    foreach (ContactModel c in contacts)
        //    {
        //        c.ContactEmails = contactEmails.Where(ce => ce.ContactId == c.Id);
        //        c.ContactNumbers = contactNumbers.Where(ce => ce.ContactId == c.Id);
        //    }

        //    return Ok(contacts);
        //}

        //[HttpPut]
        //public IHttpActionResult UpdateContact(ReqBodyContact reqBodyContact)
        //{

        //    int id = reqBodyContact.NewContact.Id;
        //    IEnumerable<ContactEmail> contactEmails = reqBodyContact.NewContactEmails;
        //    IEnumerable<ContactNumber> contactNumbers = reqBodyContact.NewContactNumbers;


        //    entities.ContactEmail.RemoveRange(entities.ContactEmail.Where(ce => ce.ContactId == id));
        //    entities.ContactNumber.RemoveRange(entities.ContactNumber.Where(cn => cn.ContactId == id));


        //    entities.SaveChanges();

        //    Contact contactUpdate = entities.Contact.FirstOrDefault(c => c.Id == id);
        //    contactUpdate.FirstName = reqBodyContact.NewContact.FirstName;
        //    contactUpdate.LastName = reqBodyContact.NewContact.LastName;
        //    contactUpdate.ContactAddress = reqBodyContact.NewContact.ContactAddress;
        //    contactUpdate.Tag = reqBodyContact.NewContact.Tag;
        //    contactUpdate.Gender = reqBodyContact.NewContact.Gender;
        //    contactUpdate.Bookmarked = reqBodyContact.NewContact.Bookmarked;

        //    foreach (ContactEmail ce in contactEmails)
        //    {
        //        entities.ContactEmail.Add(ce);
        //    }
        //    foreach (ContactNumber cn in contactNumbers)
        //    {
        //        entities.ContactNumber.Add(cn);
        //    }

        //    entities.SaveChanges();

        //    return Ok();

        //}

        //[HttpPatch]
        //public IHttpActionResult PatchBookmarked([FromBody] ReqBodyBookmarkedContact reqBodyBookmarkedContact)
        //{

        //    int id = reqBodyBookmarkedContact.Id;
        //    bool bookmarked = reqBodyBookmarkedContact.Bookmarked;
        //    Contact contact = entities.Contact.FirstOrDefault(c => c.Id == id);
        //    contact.Bookmarked = bookmarked;

        //    entities.SaveChanges();

        //    return Ok();
        //}
    }

}




