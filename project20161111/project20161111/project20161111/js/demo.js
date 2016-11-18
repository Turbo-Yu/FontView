/// <reference path="jquery-1.10.2.min.js" />

var minSize = 5;//雪片最小的尺寸
var maxSize = 50;//雪片最大尺寸
var newOn = 200;//间隔多长时间产生一个雪片，值越小，雪越大
var flake = $("<div></div>").css("position", "absolute").html("❄");//雪片对象
//var flake = $("<div></div>").css("position", "absolute").html('<img src="img/11.jpg" style="width:100px;">');
$(function () {
    setInterval(function () {
        var wWidth = $(document).width();//获取到浏览器的宽度
        var wHight = $(document).height();//获取到浏览器的高度
        var startLeft = Math.random() * wWidth;//雪片一开始的时候距离浏览器的间距
        var endLeft = Math.random() * wWidth;//雪片一下落之后距离浏览器的间距
        var flakeSize = minSize + maxSize * Math.random();//雪片的大小
        var flakeOpacity = 0.7 + Math.random() * 0.3;//雪片一开始的透明度
        var flakeEndOpacity = 0.5 + Math.random() * 0.3;//雪片一下落后的透明度
        var durationTime = 3000 * Math.random() + 10 * wHight;//雪片下落的时间
        flake.clone().appendTo($("body")).css({
            "left": startLeft,
            "font-size": flakeSize,
            "opacity": flakeOpacity,
            "color": "#fff",
            "top": "-55px"
        }).animate({
            "left": endLeft,
            "opacity": flakeEndOpacity,
            "top": wHight
        }, durationTime, function () {
            $(this).remove();
        });
    }, newOn);
});