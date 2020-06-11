namespace Backend
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class BackendModel : DbContext
    {
        public BackendModel()
            : base("name=BackendModel")
        {
        }

        public virtual DbSet<Contact> Contact { get; set; }
        public virtual DbSet<ContactEmail> ContactEmail { get; set; }
        public virtual DbSet<ContactNumber> ContactNumber { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Contact>()
                .HasMany(e => e.ContactEmail)
                .WithRequired(e => e.Contact)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Contact>()
                .HasMany(e => e.ContactNumber)
                .WithRequired(e => e.Contact)
                .WillCascadeOnDelete(false);
        }
    }
}
