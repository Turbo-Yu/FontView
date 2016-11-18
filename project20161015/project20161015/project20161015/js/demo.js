/// <reference path="jquery-1.10.2.min.js" />

$(function () {
    $(".ig").click(function () {
        $(this).stop(true, true);
        $(".ig[title]").stop(true, true);
        var left1 = $(this).offset().left;//获取到当前点击的图片的left值
        var top1 = $(this).offset().top;//获取到当前点击的图片的top值
        var zindex1 = $(this).css("z-index");//获取到当前点击的图片的z-index值

        var left2 = $(".ig[title]").offset().left;//获取最上面的图片的left值
        var top2 = $(".ig[title]").offset().top;//获取最上面的图片的top值
        var zindex2 = $(".ig[title]").css("z-index");//获取最上面的图片的的z-index值

   

        $(".ig[title]").animate({ "left": left1, "top": top1 }, 500).css("z-index", zindex1).removeAttr("title");
        $(this).animate({ "left": left2, "top": top2 }, 500).css("z-index", zindex2).attr("title", "");
    });
});