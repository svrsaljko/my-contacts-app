namespace Backend.DB_Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("ContactTag")]
    public partial class ContactTag
    {
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string Tag { get; set; }

        public int ContactId { get; set; }

        public virtual Contact Contact { get; set; }
    }
}
