using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Text;
namespace project20161008
{
    /// <summary>
    /// Handler1 的摘要说明
    /// </summary>
    public class Handler1 : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            string title = context.Request.Form["title"];//获取到从前端传过来的值
            string sSql = string.Format("select top 5 Title from RNews  where Title like '%{0}%' order by CreatedTime desc", title);//获取到查询的sql语句
            DataTable dt = SqlHelper.ExecuteDataSetText(sSql, null).Tables[0];//得到sql语句在数据库里面的数据表
            StringBuilder sb = new StringBuilder();
            if (dt.Rows.Count > 0)
            {
                sb.Append("<ul>");
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    sb.Append(string.Format("<li>{0}</li>", dt.Rows[i][0].ToString()));
                }
                sb.Append("</ul>");
            }
            else
            {
                sb.Append("没有相关数据");
            }
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