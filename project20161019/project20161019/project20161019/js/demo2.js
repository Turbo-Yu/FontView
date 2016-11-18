/// <reference path="jquery-1.10.2.min.js" />

$(function () {
    $(".uitem").hide();
    $(".litem>a").click(function () {
        //$(this).next().toggle(1000);
        $(this).next().show(500).parent().siblings().find(".uitem").hide(500);
    });
});