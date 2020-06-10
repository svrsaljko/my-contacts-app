using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Backend.Models
{
    public class ContactNumber
    {
        public int ContactNumberId { get; set; }
        public string Number { get; set; }

        public virtual Contact Contact { get; set; }
    }
}