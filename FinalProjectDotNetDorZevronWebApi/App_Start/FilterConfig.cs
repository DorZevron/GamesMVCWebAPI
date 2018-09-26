using System.Web;
using System.Web.Mvc;

namespace FinalProjectDotNetDorZevronWebApi
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
