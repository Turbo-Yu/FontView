/// <reference path="jquery-1.10.2.min.js" />

$(function () {
    $("#txtTitle").keyup(function () {
        var title = $.trim($("#txtTitle").val());
        if (title == "") {
            $("#dResult").hide();
        }
        else {
            $("#dResult").html("");
            $("#dResult").show();
            $.post("/Handler1.ashx", { "title": title }, function (data) {
                $("#dResult").html(data);
            });
        }
    });
});
