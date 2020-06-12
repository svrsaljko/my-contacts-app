namespace Backend.Models
{
    using System.Collections.Generic;


    public class ContactModel
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string ContactAddress { get; set; }

        public string Tag { get; set; }

        public string Gender { get; set; }

        public bool Bookmarked { get; set; }

        public IEnumerable<ContactEmailModel> ContactEmails { get; set; }

        public IEnumerable<ContactNumberModel> ContactNumbers { get; set; }

    }

}