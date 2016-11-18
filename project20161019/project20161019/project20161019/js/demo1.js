/// <reference path="jquery-1.10.2.min.js" />

$(function () {//页面加载之后
    $("#btn").click(function () {
        //alert("hello world");
        //$("#d1").hide(1000, function () {
        //    alert("hello world");
        //});
        //$("#d1").show(1000);
        //$("#d1").toggle(1000);

        //$("#d1").slideUp(1000);
        //$("#d1").slideDown(1000);
        //$("#d1").slideToggle(1000);

        //$("#d1").fadeOut(1000);
        //$("#d1").fadeIn(1000);
        //$("#d1").fadeToggle(1000);


    });
    $("#d1").click(function () {
        $(this).animate({ "top": "200px", "left": "200px" }, 2000, function () {
            $(this).animate({ "top": "0px", "left": "400px" }, 2000);
        });
    });
});