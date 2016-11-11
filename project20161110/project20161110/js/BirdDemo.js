var speed = 10;
var recordKey = 39;

$(function () {
    var bird = $("#dbird");
    var off = bird.offset();

    $(document).keydown(function (event) {
        var key = event.keyCode;
        if (key != recordKey) {
            bird.removeClass().addClass("direction-" + key);
        }
        recordKey = key;
        switch (key) {
            case 37:
                if (off.left <= -bird.width()) {
                    off.left = $(window).width();
                }
                off.left -= speed;
                break;
            case 38:
                if (off.top <= -bird.height()) {
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
                if (off.top >= $(window).height) {
                    off.top = -bird.height();
                }
                off.top += speed;
                break;
        }
        bird.offset(off);
    });
});