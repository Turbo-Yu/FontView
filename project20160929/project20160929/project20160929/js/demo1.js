/// <reference path="jquery-1.10.2.min.js" />
$(function () {
    $(".litem").find("ul").hide();
    $(".litem>a").click(function () {
        $(this).next().toggle(1000);
    });
});