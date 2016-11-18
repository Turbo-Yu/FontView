using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace project20160928
{
    /// <summary>
    /// Handler1 的摘要说明
    /// </summary>
    public class Handler1 : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            //1、获取到从前端传递过来的数据
            string username = context.Request.Form["username"];
            string pwd = context.Request.Form["pwd"];
            //2、得到对应的sql语句
            string sSql = string.Format("select UserId from UserInfor  where UserName='{0}' and Pwd='{1}'", username, pwd);
            //3、运用sqlhelper处理sql语句，并将相应的结果返回给前端
            if (SqlHelper.Exists(sSql))
            {
                context.Response.Write("ok");
            }
            else {
                context.Response.Write("error");
            }

        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}