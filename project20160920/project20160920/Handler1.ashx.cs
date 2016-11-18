using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Text;
namespace project20160920
{
    /// <summary>
    /// Handler1 的摘要说明
    /// </summary>
    public class Handler1 : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            string title = context.Request.Form["title"];//获取到从前端传递过来的值
            string sSql = "select top 5 Title from RNews where Title like '%" + title + "%'order by CreatedTime desc";//得到sql语句
            DataTable dt = SqlHelper.ExecuteDataSetText(sSql, null).Tables[0];//获取到sql语句在数据库里面对应的数据表
            StringBuilder sb = new StringBuilder();
            sb.Append("<ul>");
            if (dt.Rows.Count > 0)//判断数据表里面是否有值
            {
                for (int i = 0; i < dt.Rows.Count; i++)//对数据表进行循环取出每一行数据
                {
                    sb.Append(string.Format("<li>{0}</li>", dt.Rows[i][0].ToString()));
                }
            }
            else
            {
                sb.Append("<li>没有相关数据</li>");
            }
            sb.Append("</ul>");
            context.Response.Write(sb.ToString());//将拼凑的数据返回给客户端
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