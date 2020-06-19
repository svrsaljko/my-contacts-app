using Backend.DB_Models;
using System.Collections.Generic;

namespace Backend.Models
{
    public class ReqBodyContact
    {
        public Contact NewContact { get; set; }
        public List<ContactEmail> NewContactEmails { get; set; }
        public List<ContactNumber> NewContactNumbers { get; set; }
        public List<ContactTag> NewContactTags { get; set; }

    }
}