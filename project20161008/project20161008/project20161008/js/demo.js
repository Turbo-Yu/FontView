/// <reference path="jquery-1.10.2.min.js" />

$(function () {
    $("#txtTitle").keyup(function () {//往文本框输入内容的时候触发事件
        var title = $.trim($("#txtTitle").val());//获取到文本框的内容并且去掉前后空格
        if (title == "") {
            $("#dcon").hide();
        }
        else {
            $("#dcon").show();
            //1、传递到哪个后台页面 2、传递什么值 3、后台处理之后的结果
            $.post("/Handler1.ashx", { "title": title }, function (data) {
                $("#dcon").html(data);
            });
        }
    });
});