using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Backend.Models
{
    public class ContactEmailModel
    {
        public ContactEmailModel(int Id, string Email, int ContactId)
        {
            this.Id = Id;
            this.Email = Email;
            this.ContactId = ContactId;
        }
        public int Id { get; set; }

        public string Email { get; set; }

        public int ContactId { get; set; }

       
    }
}