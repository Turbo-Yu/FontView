
function ShowLoginBox() {
    $("#txtUserName").val("");
    $("#txtPwd").val("");
    layer.open({
        type: 1,
        title: "登录",
        area: ["393px", "260px"],
        content: $("#dloginbox")
    });
}

function Login() {
    var username = $.trim($("#txtUserName").val());
    var pwd = $.trim($("#txtPwd").val());
    if (username == "" || pwd == "") {
        layer.msg("用户名或密码不能为空", {
            time: 1000,
            icon: 5
        })
    }
    if (username == "admin" && pwd == "admin") {
        layer.msg("登录成功", {
            time: 1000,
            icon: 6
        }, function () {
            layer.open({
                type: 2,
                area: ['700px', '530px'],
                fixed: false,
                maxmin: true,
                content: 'http://www.baidu.com'
            });
        });
    }
}