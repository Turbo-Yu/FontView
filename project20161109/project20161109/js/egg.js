/// <reference path="jquery-1.10.2.min.js" />

var iCount = 0;
$(function () {
    var iNum = Math.floor(Math.random() * 8 + 1);//产生1~4之间的随机整数
    //1、鼠标移到蛋上去，锤子跟着一起跑
    $(".egg").mouseover(function () {
        var left = $(this).offset().left + 120;//当前鼠标放上去的蛋+固定值=锤子距离浏览器的Left
        var top = $(this).offset().top;
        $("#t").css({ "left": left, "top": top });
    });

    //2、砸破
    //3、判断是否中奖
    //4、已碎不要再砸
    $(".egg").click(function () {
        if (iCount == 8) {
            document.getElementById("a3").play();
            return;
        }
        if ($(this).attr("data-isbreak") == "true")
        {
            alert("蛋已经碎了");
            return;
        }
        if ($(this).attr("data-isbreak") == "false") {
            iCount++;
            $(this).attr("data-isbreak", "true");
            $(this).css("background-image", "url(img/egg_2.png)");
            //获取当前点击的是第几个蛋
            var i = $(this).index() + 1;
            if (i == iNum) {
                document.getElementById("a2").play();
            }
            else {
                document.getElementById("a1").play();
            }
            console.log(iNum);
            console.log(i);
        }
    });
});