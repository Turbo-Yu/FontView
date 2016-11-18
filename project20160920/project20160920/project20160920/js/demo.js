/// <reference path="jquery-1.10.2.min.js" />

$(function () {
    $("#txtTitle").keyup(function () {//当在文本框里面输入内容的时候触发一个事件
        var title = $.trim($("#txtTitle").val());//获取到文本框的内容
        //ajax三个参数的含义：1、后台页面 2、传递的参数 3、后台处理的结果
        if (title == "") {
            $("#dCon").hide();
        }
        else {
            $.post("/Handler1.ashx", { "title": title }, function (data) {
                $("#dCon").show().html(data);
                $("#dCon li").hover(function () {
                    $(this).addClass("bg");
                }, function () {
                    $(this).removeClass("bg");
                });
                $("#dCon li").click(function () {
                    $("#txtTitle").val("");
                    $("#txtTitle").val($(this).text());
                    $("#dCon").hide();
                });
            });
        }

    });
});