/// <reference path="jquery-1.10.2.min.js" />


var i = 0;//全局变量
var timer;
$(function () {//页面加载完毕之后，只有页面加载完毕之后，才能找对象，只有找到对象之后，才能够对对象做操作
    $(".ig").eq(0).show().siblings().hide();//第一个需求：第一张图片显示，其余的图片隐藏
    Lunbo();
    //第四个需求：鼠标放到下标上后，轮播停止，图片显示，下标加上红色的背景，鼠标离开之后，轮播开始
    $(".tab").hover(function () {
        clearInterval(timer);//吧定时器干掉
        i = $(this).index();//获取到当前鼠标放上去的下标的索引，并将值赋值给i
        ShowPicTab();
    }, function () {
        Lunbo();
    });
    //第五个需求：点击左边、右边按钮的时候
    $(".btn1").click(function () {
        clearInterval(timer);//吧定时器干掉
        i--;
        if (i == -1) {
            i = 3;
        }
        ShowPicTab();
        Lunbo();
    });
    $(".btn2").click(function () {
        clearInterval(timer);//吧定时器干掉
        i++;
        if (i == 4) {
            i = 0;
        }
        ShowPicTab();
        Lunbo();
    });
});

function ShowPicTab() {
    $(".ig").eq(i).fadeIn(300).siblings().fadeOut(300);
    $(".tab").eq(i).addClass("bg").siblings().removeClass("bg");//第三个需求：下标背景可以跟着图片一起跑
}
function Lunbo() {
    timer = setInterval(function () {//第二个需求：图片间隔4s，轮播一次
        i++;
        if (i == 4) {
            i = 0;
        }
        ShowPicTab();
    }, 4000);
}
