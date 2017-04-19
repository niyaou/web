/**
 * Created by niyaou on 2017/4/19.
 */

$(document).ready(function(){
    async_text("fff","daily_sold");
    async_text("fff","monthy_sold");
    async_text("fff","total_sold");
    async_text("fff","team_daily_sold");
    async_text("fff","team_monthy_sold");
    async_text("fff","team_total_sold");
    async_text("fff","team_monthy_bonus");
    async_text("fff","personal_monthy_bonus");
});
function async_text(url,id){
    var div_id;
    div_id="#"+id;
    $.ajax({
        type: "POST",
        url:url,
        contentType: "application/json; charset=utf-8",
        //data:  JSON.stringify({ 'username':userId.val(),'password':password.val()}),

        data: JSON.stringify("ff"),
        dataType: "json",success:
            function(data){
                console.info(data);
                $(div_id).text(data);
            }, error:function(xhr,status,error){
            console.info(error+div_id);
            $(div_id).text(error);
        }})
}
function async_daily_sold(){

    $("#daily_sold").text("333");
}
function async_monthy_sold(){

}
function async_total_sold(){

}
function async_team_daily_sold(){

}
function async_team_monthy_sold(){

}
function async_team_total_sold(){

}
function async_team_monthy_bonus(){

}
function async_personal_monthy_bonus(){

}