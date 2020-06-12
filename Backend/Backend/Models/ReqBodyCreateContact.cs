using Backend.DB_Models;
using System.Collections.Generic;

namespace Backend.Models
{
    public class ReqBodyCreateContact
    {
        public Contact NewContact { get; set; }
        public List<ContactEmail> NewContactEmails { get; set; }
        public List<ContactNumber> NewContactNumbers { get; set; }

    }
}