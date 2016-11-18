/// <reference path="jquery-1.10.2.min.js" />

var i = 0;
var timer;
$(function () {//页面加载完毕之后
    $(".ig").eq(0).show().siblings().hide();//第一个图片显示，其余的图片隐藏
    Lunbo();
    $(".tab").hover(function () {//鼠标移到、离开下标之后
        i = $(this).index();//获取到当前鼠标放上去的下标的索引，并将值赋值给i
        ShowPicTab();
        clearInterval(timer);//清除定时器
    }, function () {
        Lunbo();
    });

    $(".btn1").click(function () {
        clearInterval(timer);//清除定时器
        i--;
        if (i == -1) {
            i = 4;
        }
        ShowPicTab();
        Lunbo();
    });
    $(".btn2").click(function () {
        clearInterval(timer);//清除定时器
        i++;
        if (i == 5) {
            i = 0;
        }
        ShowPicTab();
        Lunbo();
    });
});

function ShowPicTab() {
    $(".ig").eq(i).stop(true, true).fadeIn(300).siblings().fadeOut(300);
    $(".tab").eq(i).addClass("bg").siblings().removeClass("bg");
}
function Lunbo() {
    timer = setInterval(function () {//图片间隔4s轮播一次
        i++;
        if (i == 5) {
            i = 0;
        }
        ShowPicTab();//当前图片加上bg样式，其余的移除bg样式
    }, 4000);
}