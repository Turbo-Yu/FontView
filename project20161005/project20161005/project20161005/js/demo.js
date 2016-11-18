/// <reference path="jquery-1.10.2.min.js" />

var raNum = 0;
var iCount = 0;
$(function () {
    $("#d2").click(function () {
        iCount++;
        if (iCount > 1)
        {
            alert("只有一次抽奖机会");
            return;
        }
        raNum = Math.random() * 360;//产生0~360之间的一个随机数
        if (247.5 < raNum && raNum <= 292.5 || 292.5 < raNum && raNum <= 337.5)
        {
            raNum = Math.random() * 22.5;
        }
        $(this).rotate({
            duration: 3000,
            angle: 0,
            animateTo: raNum+1080,
            callback: function () {
                A();
            }
        });
    });
});
function A() {
    if (0 < raNum && raNum <= 22.5) {
        alert("谢谢参与，您木有中奖");
        return;
    }
    else if (22.5 < raNum && raNum <= 67.5) {
        alert("恭喜，您中了5元代金券");
        return;
    }
    else if (67.5 < raNum && raNum <= 112.5) {
        alert("恭喜，您中了1元代金券");
        return;
    }
    else if (112.5 < raNum && raNum <= 157.5) {
        alert("恭喜，您中了10元代金券");
        return;
    }
    else if (157.5 < raNum && raNum <= 202.5) {
        alert("谢谢参与，您木有中奖");
        return;
    }
    else if (202.5 < raNum && raNum <= 247.5) {
        alert("恭喜，您中了20元代金券");
        return;
    }
    else if (247.5 < raNum && raNum <= 292.5) {
        alert("恭喜，您中了50元代金券");
        return;
    }
    else if (292.5 < raNum && raNum <= 337.5) {
        alert("恭喜，您中了30元代金券");
        return;
    }
    else {
        alert("谢谢参与，您木有中奖");
        return;
    }
}