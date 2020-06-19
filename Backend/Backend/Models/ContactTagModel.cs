namespace Backend.Models
{
    public class ContactTagModel
    {
        public int Id { get; set; }

        public string Tag { get; set; }

        public int ContactId { get; set; }
    }
}