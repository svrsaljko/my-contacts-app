using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Backend.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;


    public class ContactModel
    {
   

        public ContactModel(int Id, string FirstName, string LastName,
            string ContactAddress, string Tag,string Gender, bool Bookmarked,
            IEnumerable<ContactEmailModel> ContactEmails,
            IEnumerable<ContactNumberModel> ContactNumbers) {
            this.Id = Id;
            this.FirstName = FirstName;
            this.LastName = LastName;
            this.ContactAddress = ContactAddress;
            this.Tag = Tag;
            this.Gender = Gender;
            this.Bookmarked = Bookmarked;
            this.ContactEmails = ContactEmails;
            this.ContactNumbers = ContactNumbers;
        }

        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string FirstName { get; set; }

        [Required]
        [StringLength(50)]
        public string LastName { get; set; }

        [Required]
        [StringLength(50)]
        public string ContactAddress { get; set; }

        [Required]
        [StringLength(50)]
        public string Tag { get; set; }

        [Required]
        [StringLength(50)]
        public string Gender { get; set; }

        public bool Bookmarked { get; set; }

        
        public IEnumerable<ContactEmailModel> ContactEmails { get; set; }
        public  IEnumerable<ContactNumberModel> ContactNumbers { get; set; }

        
      
     
        
}


    
}