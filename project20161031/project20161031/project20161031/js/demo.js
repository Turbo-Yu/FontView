/// <reference path="jquery-1.10.2.min.js" />

var i = 0;
$(function () {//页面加载完毕之后
    $(".probtn a").click(function () {//点击加入购入车之后
        $(this).css("background-color", "#ccc").unbind("click");
        i++;
        var thisImg = $(this).parent().parent().find("img");//找到当前点击的按钮对应的图片
        var cloneImg = thisImg.clone();//把图片复制一份
        cloneImg.css({//设置图片初始的样式
            "width": thisImg.width(),
            "height": thisImg.height(),
            //"border-radius": "100%",
            "position": "absolute",
            "left": thisImg.offset().left,
            "top": thisImg.offset().top,
            "z-index": 2,
            "opacity": ".8"
        });
        cloneImg.appendTo($("body")).animate({//吧复制的图片加到网页中却，并执行一个动画
            "left": $("#dcar").offset().left,
            "top": $("#dcar").offset().top,
            "height": "30px",
            "width": "30px"
        }, 1000, function () {
            cloneImg.remove();//吧图片从网页中移除掉
            $(".dnum").text(i);
        });

    });
});