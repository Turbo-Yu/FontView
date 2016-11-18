/// <reference path="jquery-1.10.2.min.js" />

var i = 0;
$(function () {
    $(".addbtn a").click(function () {
        i++;
        var img = $(this).parent().parent().find(".pimg").find("img");//找到当前点击的按钮对应的上面的图片
        var cloneImg = img.clone().addClass("bg");//吧图片克隆一份，并设置它初始的样式
        cloneImg.fly({
            start: {
                left: $(this).offset().left,
                top: $(this).offset().top
            },
            end: {
                left: $("#dcar").offset().left,
                top: $("#dcar").offset().top,
                width: 0,
                height: 0
            },
            onEnd: function () {
                $("#pronum").text("(" + i + ")");
                $("#msg").show().animate({ "width": "200px" }, 200).fadeOut(1000);
            }
        });
        $(this).css("background-color", "#ccc").unbind("click");
    });
});