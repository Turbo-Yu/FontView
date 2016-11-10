/// <reference path="jquery-1.10.2.min.js" />

var iCount = 0;
$(function () {
    var iNum = Math.floor(Math.random() * 4 + 1);//产生1~4之间的一个随机整数
    //第一个需求：鼠标移到蛋上去之后，锤子跟着一起跑
    $(".egg").mouseover(function () {
        var left = $(this).offset().left + 120;//当前鼠标放上去的蛋+固定值=锤子距离浏览器的left
        $("#t").css("left", left);
    });
    //第二个需求：砸蛋之后变成破蛋
    //第三个需求：判断砸中的蛋是否中奖
    //第四个需求：判断蛋是否砸完，并防止对同一个蛋砸的时候计数加1
    $(".egg").click(function () {
        if (iCount == 4) {
            document.getElementById("a3").play();
            return;
        }
        if ($(this).attr("data-isbreak") == "false") {
            iCount++;
            $(this).attr("data-isbreak", "true");
            $(this).css("background-image", "url(img/egg_2.png)");
            var i = $(this).index() + 1;//获取到当前点击的蛋是第几个蛋
            if (i == iNum) {
                document.getElementById("a2").play();
            }
            else {
                document.getElementById("a1").play();
            }
        }
        });
});