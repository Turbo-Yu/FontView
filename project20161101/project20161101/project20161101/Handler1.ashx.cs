using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Text;
using System.Data;
namespace project20161101
{
    /// <summary>
    /// Handler1 的摘要说明
    /// </summary>
    public class Handler1 : IHttpHandler
    {
        public string sResult = "";
        public void ProcessRequest(HttpContext context)
        {
            string cmd = context.Request.Form["cmd"];
            switch (cmd)
            {
                case "1":
                    sResult = GetProvince();
                    break;
                case "2":
                    sResult = GetCity(context.Request.Form["pcode"]);
                    break;
                case "3":
                    sResult = GetArea(context.Request.Form["ccode"]);
                    break;
            }
            context.Response.Write(sResult);
        }
        public string GetArea(string ccode)
        {
            StringBuilder sb = new StringBuilder();
            string sSql = string.Format("select AName,ACode from Area where CCode='{0}'", ccode);
            DataTable dt = SqlHelper.ExecuteDataSetText(sSql, null).Tables[0];
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                sb.Append(string.Format("<option value='{0}'>{1}</option>", dt.Rows[i][1].ToString(), dt.Rows[i][0].ToString()));
            }
            return sb.ToString();
        }
        public string GetCity(string pcode)
        {
            StringBuilder sb = new StringBuilder();
            string sSql = string.Format("select CName,CCode from City where PCode='{0}'", pcode);
            DataTable dt = SqlHelper.ExecuteDataSetText(sSql, null).Tables[0];
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                sb.Append(string.Format("<option value='{0}'>{1}</option>", dt.Rows[i][1].ToString(), dt.Rows[i][0].ToString()));
            }
            return sb.ToString();
        }
        public string GetProvince()
        {
            StringBuilder sb = new StringBuilder();
            string sSql = "select PName,PCode from Province";
            DataTable dt = SqlHelper.ExecuteDataSetText(sSql, null).Tables[0];
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                sb.Append(string.Format("<option value='{0}'>{1}</option>", dt.Rows[i][1].ToString(), dt.Rows[i][0].ToString()));
            }
            return sb.ToString();
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