using Backend.DB_Context;

namespace Backend.App_Start
{
    public static class CreateDBIfNotExist
    {
        public static void InitializeDB()
        {
            using (var context = new BackendModel())
            {
                new BackendDBInitializer().InitializeDatabase(context);

            }
        }
    }
}