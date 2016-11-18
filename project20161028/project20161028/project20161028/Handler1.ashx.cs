using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Text;
namespace project20161028
{
    /// <summary>
    /// Handler1 的摘要说明
    /// </summary>
    public class Handler1 : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            string title = context.Request.Form["title"];
            string sSql = string.Format("select top 5 Title from RNews where Title like '%{0}%' order by CreatedTime desc ", title);
            DataTable dt = SqlHelper.ExecuteDataSetText(sSql, null).Tables[0];
            StringBuilder sb = new StringBuilder();
            sb.Append("<ul>");
            if (dt.Rows.Count > 0)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    sb.Append(string.Format("<li>{0}</li>", dt.Rows[i][0].ToString()));
                }
            }
            else {
                sb.Append("<li>没有相关数据</li>");
            }
            sb.Append("</ul>");
            context.Response.Write(sb.ToString());
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