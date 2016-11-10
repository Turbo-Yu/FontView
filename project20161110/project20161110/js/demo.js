/// <reference path="jquery-1.10.2.min.js" />
var speed = 10;//小鸟一次移动的距离
var recordKey = 39;//设置默认的键盘编码是39
$(function () {
    var bird = $("#dbird");
    var off = bird.offset();//获取到小鸟目前的方位的对象
    $(document).keydown(function (even) {
        var key = even.keyCode;//获取到键的编码
        if (key != recordKey)
        {
            bird.removeClass().addClass("direction-" + key);
        }
        recordKey = key;
        switch (key) {
            case 37:
                if (off.left <= -bird.width()) {
                    off.left = $(window).width();
                }
                off.left -= speed;//off.left=off.left-speed
                break;
            case 38://上
                if (off.top <= -bird.height())
                {
                    off.top = $(window).height();
                }
                off.top -= speed;
                break;
            case 39:
                if (off.left >= $(window).width()) {
                    off.left = -bird.width();
                }
                off.left += speed;
                break;
            case 40:
                if (off.top >= $(window).height())
                {
                    off.top = -bird.height();
                }
                off.top += speed;
                break;
        }
        bird.offset(off);
    });
});