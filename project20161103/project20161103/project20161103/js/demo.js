/// <reference path="jquery-1.10.2.min.js" />
$(function () {
    $(".regtext input").blur(function () {
        var id = $(this).attr("id");//获取到了当前鼠标离开的那个文本框
        Check(id);
    });

    $(".dregbtn a").click(function () {
        Check("txtPhone");
        Check("txtQQ");
        Check("txtEmail");
        Check("txtCode");
        Check("txtPersonCode");
    });
});

function Check(id) {
    var regStr = "";
    var sResult = "";
    var txt = $.trim($("#" + id).val());
    if (txt == "") {
        sResult = "各项不能为空";
        layer.tips(sResult, "#" + id, {
            tips: [2, '#78BA32']
        });
    }
    else {
        switch (id) {
            case "txtPhone":
                regStr = /0?(13|14|15|18)[0-9]{9}/;
                break;
            case "txtQQ":
                regStr = /^[1-9]\d{4,10}$/;
                break;
            case "txtEmail":
                regStr = /\w+((-w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+/;
                break;
            case "txtCode":
                regStr = /\d{6}/;
                break;
            case "txtPersonCode":
                regStr = /\d{17}[\d|x]|\d{15}/;
                break;
        }
        if (!regStr.test(txt)) {
            sResult = "输入的内容格式不对";
            layer.tips(sResult, "#" + id, {
                tips: [2, '#78BA32']
            });
        }
    }
}