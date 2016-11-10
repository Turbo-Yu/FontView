using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace project20161108
{
    /// <summary>
    /// Handler1 的摘要说明
    /// </summary>
    public class Handler1 : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            //1、接收到从前端传过来的用户名和密码
            string username = context.Request.Form["username"];
            string pwd = context.Request.Form["pwd"];
            //2、得到sql语句
            string s = string.Format("select UserId from UserInfor where UserName='{0}' and Pwd='{1}'", username, pwd);
            //3、运用sqlhelper判断数据是否存在
            if (SqlHelper.Exists(s))
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