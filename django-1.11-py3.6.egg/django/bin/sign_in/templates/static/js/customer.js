/**
 * Created by niyaou on 2017/4/19.
 */
var common = {
    setCookie: null, getCookie: null, getCookieData: null
};
common.getCookieData = function () {
    return ($.cookie('logindata'));
}

$(document).ready(function () {

});
function async_text() {

    var data = common.getCookieData();

    $.ajax({
        type: "POST",
        //url:"url",
        url: "/eysystem/GetStatistics",

        contentType: "application/json; charset=utf-8",
        data: data,
        dataType: "json",
        success: function (data) {
            alert(JSON.stringify(data));
            console.info(data);
            $("#daily_sold").text(data.data.myAchievement_d);
            $("#monthy_sold").text(data.data.myAchievement_m);
            $("#total_sold").text(data.data.myAchievement_all);
            $("#team_daily_sold").text(data.data.myGroupAchievement_d);
            $("#team_monthy_sold").text(data.data.myGroupAchievement_m);
            $("#team_total_sold").text(data.data.myGroupAchievement_all);
            //$("team_monthy_bonus").text(data.data.);
            //$("personal_monthy_bonus").text(data.data.);
        },
        error: function (xhr, status, error) {
            console.info(status + xhr + error);
            //alert(error);
        }
    })
}
