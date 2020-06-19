namespace Backend.DB_Context
{
    using System.Data.Entity;
    using Backend.DB_Models;

    public partial class BackendModel : DbContext
    {
        public BackendModel()
            : base("name=BackendModel")
        {
            Database.SetInitializer(new BackendDBInitializer());
            
        }

        public virtual DbSet<Contact> Contact { get; set; }
        public virtual DbSet<ContactEmail> ContactEmail { get; set; }
        public virtual DbSet<ContactNumber> ContactNumber { get; set; }
        public virtual DbSet<ContactTag> ContactTag { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Contact>()
                .HasMany(e => e.ContactEmail)
                .WithRequired(e => e.Contact)
                .WillCascadeOnDelete(true);

            modelBuilder.Entity<Contact>()
                .HasMany(e => e.ContactNumber)
                .WithRequired(e => e.Contact)
                .WillCascadeOnDelete(true);

            modelBuilder.Entity<Contact>()
                .HasMany(e => e.ContactTag)
                .WithRequired(e => e.Contact)
                .WillCascadeOnDelete(true);

           


        }
    }
}
