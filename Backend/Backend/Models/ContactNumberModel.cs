using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Backend.Models
{
    public class ContactNumberModel
    {
        public ContactNumberModel(int Id, string Number, int ContactId)
        {
            this.Id = Id;
            this.Number = Number;
            this.ContactId = ContactId;
        }
        public int Id { get; set; }

        public string Number { get; set; }

        public int ContactId { get; set; }
    }
}