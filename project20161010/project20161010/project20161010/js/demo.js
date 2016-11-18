/// <reference path="jquery-1.10.2.min.js" />

$(function () {
    var bird = $("#dbird");//获取到了小鸟的对象
    var off = bird.offset();//获取到小鸟的方位的对象
    var icount = 10;//小鸟一次移动的位置
    var keyrecord = 39;
    var birdSize = { width: bird.width(), height: bird.height() };//获取到小鸟的大小
    var docSize = { width: $(window).width(), height: $(window).height() };//获取到当前浏览器的高度和宽度
    $(document).keydown(function (event) {//对网页按下键盘的键的时候触发一个事件，event事件源
        var code = event.keyCode;//获取事件源的编码
        if (keyrecord != code) {
            bird.removeClass().addClass('direction-' + code)
        }
        keyrecord = code;
        switch (code) {
            case 37://左键
                off.left -= icount;
                if (off.left < -birdSize.width) {
                    off.left = docSize.width;
                }
                break;
            case 38://上键
                off.top -= icount;
                if (off.top < -birdSize.height) {
                    off.top = docSize.height;
                }
                break;
            case 39://右键
                off.left += icount;
                if (off.left > docSize.width) {//当小鸟移动到浏览器的最右边的时候，让它回到浏览器的最左边
                    off.left = -birdSize.width;
                }
                break;
            case 40://下键
                off.top += icount;
                if (off.top > docSize.height) {
                    off.top = -birdSize.height;
                }
                break;

        }
        bird.offset(off);//设置小鸟新的方位值
    });
});