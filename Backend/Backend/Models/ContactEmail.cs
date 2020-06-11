namespace Backend
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("ContactEmail")]
    public partial class ContactEmail
    {
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string Email { get; set; }

        public int ContactId { get; set; }
       
        public virtual Contact Contact { get; set; }
    }
}
