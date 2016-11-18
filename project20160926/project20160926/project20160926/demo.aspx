<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="demo.aspx.cs" Inherits="project20160926.demo" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
    <link href="css/demo.css" rel="stylesheet" />
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False">
            <Columns>
                <asp:BoundField DataField="UserId" HeaderText="ID" />
                <asp:BoundField DataField="RealName" HeaderText="姓名" />
                <asp:BoundField DataField="UserName" HeaderText="用户名" />
                <asp:BoundField DataField="Pwd" HeaderText="密码" />
                <asp:BoundField DataField="PhoneNum" HeaderText="手机号" />
                <asp:BoundField DataField="Phase" HeaderText="班级" />
                <asp:BoundField DataField="QQ" HeaderText="QQ" />
            </Columns>
        </asp:GridView>
    </div>
        <div id="pager">
            <%=GetPager() %>
        </div>
    </form>
</body>
</html>
