/// <reference path="jquery-1.10.2.min.js" />
$(function () {

    $("li").click(function () {
        if ($(this).parent().attr("id") == "u1") {
            $(this).css("position", "absolute").animate({ "right": "50px" }, 1000, function () {
                $(this).appendTo($("#u2")).css("position", "static");
            });
        }
        else {
            $(this).css("position", "absolute").animate({ "left": "50px" }, 1000, function () {
                $(this).appendTo($("#u1")).css("position", "static");
            });
        }
    });
});