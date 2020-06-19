using AutoMapper;
using Backend.DB_Models;
using Backend.Models;

namespace Backend.Configuration
{
    public class AutoMapperConfig
    {
        public IMapper Configure()
        {
            var config = new MapperConfiguration(cfg =>
            {

                cfg.CreateMap<Contact, ContactModel>();
                cfg.CreateMap<ContactEmail, ContactEmailModel>();
                cfg.CreateMap<ContactNumber, ContactNumberModel>();
                cfg.CreateMap<ContactTag, ContactTagModel>();


            });

            return config.CreateMapper();
        }
    }
}

