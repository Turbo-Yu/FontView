/// <reference path="jquery-1.10.2.min.js" />

var flakeMin = 5;//雪片最小值
var flakeMax = 50;//雪片最大值
var newOn = 300;//雪片间隔多长时间产生一个,，单位是毫秒，如果这个值越小，说明雪下得越大

//每一片雪花就是一个div对象，在jquery里面$("")这样去找对象，如果想对div做定位（自由自在跑），就需要让它
//脱离文档流，设置定位
var flake = $("<div></div>").css("position", "absolute").html("❄");//创建了一个雪片的对象
//var flake = $("<div></div>").css("position", "absolute").html('<img style="width:100px;" src="image/11.jpg">');//创建了一个雪片的对象
$(function () {
    var documentWidth = $(document).width();//获取到浏览器的宽度
    var documentHeight = $(document).height();//获取到浏览器的高度
    setInterval(function () {
        var startPositionLeft = Math.random() * documentWidth;//雪片产生的时候距离浏览器左边的随机距离
        var endPositionLeft = Math.random() * documentWidth;//雪片下落到最下面的时候距离浏览器左边的随机距离
        var flakeSize = flakeMin + flakeMax * Math.random();//雪片的随机大小
        var startFlakeOpacity = 0.7 + 0.3 * Math.random();//雪片刚产生的时候的随机透明度
        var endFlakeOpacity = 0.4 + 0.3 * Math.random();//雪片下落到最下面的时候的随机透明度
        var durationFall = documentHeight * 10 + 3000 * Math.random();//雪片从最上面到最下面所经历的随机时间

        flake.clone().appendTo($("body")).css({
            "font-size": flakeSize,
            "opacity": startFlakeOpacity,
            "left": startPositionLeft,
            "color": "#fff",
            "top": "-50px"
        }).animate({
            "opacity": endFlakeOpacity,
            "left": endPositionLeft,
            "top": documentHeight
        }, durationFall, function () {
            $(this).remove();
        });
    }, newOn);
});