/// <reference path="jquery-1.10.2.min.js" />

$(function () {
    $.post("/Handler1.ashx", { "cmd": "1" }, function (data) {
        $("#sProvince").append(data);
    });
    $("#sProvince").change(function () {
        $("#sCity").children("option").not(":eq(0)").remove();
        $("#sArea").children("option").not(":eq(0)").remove();
        var pcode = $(this).children("option:selected").val();
        $.post("/Handler1.ashx", { "cmd": "2", "pcode": pcode }, function (data) { 
            $("#sCity").append(data);
        });
    });
    
    $("#sCity").change(function () {
        $("#sArea").children("option").not(":eq(0)").remove();
        var ccode = $(this).children("option:selected").val();
        $.post("/Handler1.ashx", { "cmd": "3", "ccode": ccode }, function (data) {
            $("#sArea").append(data);
        });
    });
});