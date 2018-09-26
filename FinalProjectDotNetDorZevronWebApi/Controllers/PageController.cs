using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FinalProjectDotNetDorZevronWebApi.Controllers
{
    public class PageController : Controller
    {
        // GET: Page
        public ActionResult Index()
        {
            return View();
        }

        // to reach here you need to browse to:
        // http://localhost:49860/page/GetPage
        public ActionResult XmlPage()
        {
            return new FilePathResult("~/Views/Page/XmlPage.html", "text/html");
        }

        public ActionResult JqueryPage()
        {
            return new FilePathResult("~/Views/Page/JqueryPage.html", "text/html");
        }

        public ActionResult TestPage()
        {
            return new FilePathResult("~/Views/Page/TestPage.html", "text/html");
        }

        public ActionResult RxPage()
        {
            return new FilePathResult("~/Views/Page/RxPage.html", "text/html");
        }

        //public ActionResult PutPage()
        //{
        //    return new FilePathResult("~/Views/Page/PutPage.html", "text/html");
        //}

        //public ActionResult DeletePage()
        //{
        //    return new FilePathResult("~/Views/Page/DeletePage.html", "text/html");
        //}
    }
}