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
    async_text();
});
function async_text() {
    //请求{
    //    "cid": 1,
    //        "token": "6E1EB6DE703D57B7C77D72235F827E03"
    //}
    //返回
    //{"code":200,"data":{"myAchievement_all":64385420,"myAchievement_m":75460
    //    ,"myAchievement_d":0,"myGroupAchievement_all":1517331489,"myGroupAchievement_m"
    //:264110,"myGroupAchievement_d":0}}
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
function async_daily_sold() {

}
function async_monthy_sold() {

}
function async_total_sold() {

}
function async_team_daily_sold() {

}
function async_team_monthy_sold() {

}
function async_team_total_sold() {

}
function async_team_monthy_bonus() {

}
function async_personal_monthy_bonus() {

}
