using Backend.App_Start;
using System.Web.Http;


namespace Backend
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            CreateDBIfNotExist.InitializeDB();
            GlobalConfiguration.Configure(WebApiConfig.Register);


        }
    }
}
