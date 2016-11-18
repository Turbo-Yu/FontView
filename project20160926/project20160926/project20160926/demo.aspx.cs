using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Text;
namespace project20160926
{
    public partial class demo : System.Web.UI.Page
    {
        public int PageSize = 15;//获取到一页有多少条数据
        private int _pageIndex;
        public int PageCount = 0;
        public int PageIndex//获取当前是第几页
        {
            get
            {
                try
                {
                    _pageIndex = Request.QueryString["page"] == null ? 1 : Convert.ToInt32(Request.QueryString["page"].ToString());
                }
                catch
                {
                    _pageIndex = 1;
                }
                return _pageIndex;
            }
            set { _pageIndex = value; }
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            string sSql = string.Format(@"select top {0} *from 
(
 select row_number() over(order by UserId) as rownumber,UserId,RealName,UserName,Pwd,PhoneNum,Phase,QQ from UserInfor
) A
where rownumber > ({1}-1)*{0}", PageSize, PageIndex);//sql语句
            DataTable dt = SqlHelper.ExecuteDataSetText(sSql, null).Tables[0];//运用sqlhelper得到对应的数据表
            string sSql1 = "select UserId from UserInfor";
            PageCount = SqlHelper.ExecuteDataSetText(sSql1, null).Tables[0].Rows.Count;
            GridView1.DataSource = dt;
            GridView1.DataBind();
        }

        public string GetPager()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append(@"<div class=""cfirst""><a href=""/demo.aspx?page=1"">首页</a></div>");
            if (PageIndex == 1)
            {
                sb.Append(@"<div class=""cprev bg""><a href=""javascript:;"">上一页</a></div>");
            }
            else
            {
                sb.Append(string.Format(@"<div class=""cprev""><a href=""/demo.aspx?page={0}"">上一页</a></div>", PageIndex - 1));
            }
            if (PageIndex == GetPageCount())
            {
                sb.Append(@"<div class=""cnext bg""><a href=""javascript:;"">下一页</a></div>");
            }
            else
            {
                sb.Append(string.Format(@"<div class=""cnext""><a href=""/demo.aspx?page={0}"">下一页</a></div>", PageIndex + 1));
            }
            sb.Append(string.Format(@"<div class=""cend""><a href=""/demo.aspx?page={0}"">尾页</a></div>", GetPageCount()));
            sb.Append(string.Format(@"<div class=""ccu"">{0}/{1}</div>", PageIndex, GetPageCount()));
            return sb.ToString();
        }
        public int GetPageCount()
        {
            int i = 0;
            if (PageCount % PageSize == 0)
            {
                i = PageCount / PageSize;
            }
            else
            {
                i = PageCount / PageSize + 1;
            }
            return i;
        }
    }
}