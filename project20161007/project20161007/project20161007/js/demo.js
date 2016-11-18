/// <reference path="jquery-1.10.2.min.js" />

$(function () {
    if (localStorage.getItem("bgsrc") == null) {
        $("body").css("background-image", "url(img/bg1.jpg)");
    }
    else {
        $("body").css("background-image", "url(" + localStorage.getItem("bgsrc") + ")");
        //  localStorage.removeItem("bgsrc");
    }
    $(".dcg a").click(function () {
        $("#dmain").slideDown(1000);
    });
    $("#dup a").click(function () {
        $("#dmain").slideUp(1000);
    });
    $(".ig").click(function () {
        var bsrc = $(this).find("img").attr("src");//获取到当前点击的图片的src值
        localStorage.setItem("bgsrc", bsrc);//吧当前的背景图片的路径存在一个叫做bgsrc的localStorage里面
        $("body").css("background-image", "url(" + bsrc + ")");
    });
});