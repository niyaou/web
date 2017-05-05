/**
 * Created by niyaou on 2017/4/20.
 */

var common = {
    setCookie: null, getCookie: null, getCookieData: null
};
common.getCookieData = function () {
    return ($.cookie('logindata'));
};
var total_page = 0;
var pages = 1;
var pageNum = 10;
var displaying_cid = "";
var minus_invalid = "static/img/edit_invalid2.png";
var data = 'JSON.parse(common.getCookieData())';
var current_cid = 'data.current_cid';
var current_name = 'data.current_name';
var team_member = ["data.cid"];
var table_id = "#team_menber";
var excel_id = "#excel_table";
var current_id = 0;
var jsonData = [
    {
        "unpaied": 401,
        "cid": 5,
        "aliAccount": "test",
        "authority": 1,
        "phone": "1598367362",
        "realname": "test",
        "registertime": "Apr 12, 2017 1:07:36 PM",
        "registerTimeInt": 1491973656000,
        "superior": 0,
        "username": "xsong233",
        "status": 1
    },
    {
        "unpaied": 3121,
        "cid": 16,
        "aliAccount": "testAli",
        "authority": 1,
        "registertime": "Apr 12, 2017 1:47:15 PM",
        "registerTimeInt": 1491976035000,
        "superior": 0,
        "phone": "4937869532",
        "username": "中文测试",
        "status": 1,
        "realname": "白百合",
    },
    {
        "unpaied":65211,
        "cid": 515,
        "aliAccount": "123123",
        "authority": 1,
        "realname": "高圆圆",
        "registertime": "May 4, 2017 10:46:11 PM",
        "registerTimeInt": 1493909171000,
        "superior": 0,
        "phone": "15949587421",
        "username": "2222a",
        "status": 1
    }, {
    "unpaied": 3121,
        "cid": 1126,
        "aliAccount": "testAli",
        "authority": 1,
        "registertime": "Apr 12, 2017 1:47:15 PM",
        "registerTimeInt": 1491976035000,
        "superior": 0,
        "phone": "4937869532",
        "username": "中文测试",
        "status": 1,
        "realname": "白百合",
},
{
    "unpaied":65211,
    "cid": 151,
    "aliAccount": "123123",
    "authority": 1,
    "realname": "高圆圆",
    "registertime": "May 4, 2017 10:46:11 PM",
    "registerTimeInt": 1493909171000,
    "superior": 0,
    "phone": "15949587421",
    "username": "2222a",
    "status": 1
}
];


$(document).ready(function () {

    async_table();
});


function async_table(cid) {
    //var data = JSON.parse(common.getCookieData());
    //var current_cid = data.cid;
    //if (cid)
    //    current_cid = cid;

    //displaying_cid = current_cid;
    //console.info("displaying_cid:" + displaying_cid + "   cid" + cid);
    $.ajax({
        type: "POST",
        //url: "url",
        url: "/eysystem/GetOders",

        contentType: "application/json; charset=utf-8",
        //data: JSON.stringify({
        //    cid: data.cid,
        //    token: data.token,
        //    data: {
        //        page:1,
        //        pageNum:50,
        //        cid: current_cid
        //    }
        //}),
        dataType: "json",
        success: function (data) {
            if (data.code == 200) {
                //alert(JSON.stringify(data));
                //jsonData = data.data;
                //add_table();
                //setedit(current_id,false);
                //$("#myModal").modal('hide');

            }
        }, complete: function () {
            $(table_id).empty();
            $(excel_id).empty();
            //add_table1();
            add_table();
            //  $("#explore").empty();
            //add_explore(pages)

        },
        error: function (xhr, status, error) {
            console.info(status + xhr + error);
        }
    })
}


function add_table() {
    jsonData.sort(function (a, b) {
        return b.status - a.status;
    })
    var tbody = $("<tbody></tbody> ");
    for (var one in jsonData) {
        var tr = $("<tr></tr> ");
        var tid = $('  <td class="col-xs-1">' + (parseInt(one) + 1) + '</td>');
        tid.appendTo(tr);
        var td1 = $('<td class="col-xs-10" style="padding: 8px 5px" >  <div class="panel-default col-xs-12 clearpadding" >  <a class="clearfix" style="color:#696969" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo' + jsonData[one].cid + '" id="toggles' + jsonData[one].cid + '" > <div class="col-xs-2 clearpadding" id="name' + jsonData[one].cid + '"> ' + jsonData[one].realname + ' </div>  <div class="col-xs-5 clearpadding" style="margin-left: 4%" id="phone' + jsonData[one].cid + '">' + jsonData[one].phone + ' </div>  <div class="col-xs-2 clearpadding">未付</div>            <div class="col-xs-2 clearpadding" style="font-size:0.1rem" id="total"' + jsonData[one].cid + '">￥' + jsonData[one].unpaied + '</div></a></div></td>  ');

        //td1.append($(( "<div id='collapseTwo" + jsonData[one].id + "'class='col-xs-12 panel-collapse collapse clearpadding' style='padding-top: 5px'>     <div class=' text-left col-xs-12 clearpadding'>    <div class='col-xs-2 clearpadding'> 商品</div>  <div class='col-xs-4 clearpadding' id='amount" + jsonData[one].id + "'>" + jsonData[one].amount + "</div>     " +
        //"   <div class='col-xs-2 clearpadding'>邮费</div>" +
        //" <div class='col-xs-4 clearpadding' id='postage" + jsonData[one].id + "'>20</div>" +
        //"  <div class='col-xs-2 clearpadding'> 地址</div>" +
        //"  <div class='col-xs-12 clearpadding' id='address" + jsonData[one].id + "'>" + jsonData[one].adress.replace(/~/g, "") + "</div>" +
        //"  <div class='col-xs-12 clearpadding'> 详情</div>" +
        //" <div class='col-xs-12 clearpadding' id='detail" + jsonData[one].id + "'>" + getDetail(jsonData[one].cargosSet) + "</div>" +
        //"  </div> </div></td>")));

        td1.appendTo(tr);
        console.info("one:" + one + " status :" + jsonData[one].cid);
        var td = $(( " <td style='padding: 8px 5px'> <img src='static/img/payall.png' style='width:5vw'  id='status" + jsonData[one].cid + "' /> "));
        td.append($("</td>"));
        td.appendTo(tr);

        td.appendTo(tr);
        tr.appendTo(tbody);
    }
    ( $(table_id)).append(tbody);

    for (one in jsonData) {
        getStatus(jsonData[one].cid);
    }
}




function getStatus(id) {
    var str = "#toggles" + id;
    for (var one in jsonData) {

        if (jsonData[one].cid == id) {

            console.info("one:" + one + "    " + jsonData[one].cid + "    " + jsonData[one].status + "   id:" + str + "   attr:" + id);
                    $(str).click(function () {
                        jumpToMember(jsonData[one].cid,jsonData[one].realname);
                    });
        }
    }
}


function toggle_btn(id) {
    //var warm_address = $('<div class=" row alert alert-warning" id="alert_address">    <a href="#" class="close" data-dismiss="alert">        &times;</a>    <strong>警告！</strong>请填写完整的邮寄地址。</div>');
    //var warm_order = $('<div class=" row alert alert-warning" id="alert_address">    <a href="#" class="close" data-dismiss="alert">        &times;</a>    <strong>警告！</strong>订购的商品不能为空</div>');
    //var names = "#name" + cid;
    //var prices = "#price" + cid;
    //var weights = "#weight" + cid;
    //var descrip = "#description" + cid;
    //var primars = "#primar" + cid;
    //var minuss = "#minus" + cid;
    //var id = "#toggles" + cid;

    //$("#dialog_total").text($(names).val());
    //$("#dialog_postage").text($(prices).val());
    //$("#dialog_cost").text($(weights).val());
    //$("#goodsdetail").text($(descrip).val());
    current_id = id;
    $("#myModal").modal('show');

    //return {"id": cid, "description": $(descrip).val(), "name": $(names).val(), "price": $(prices).val(), "weight": $(weights).val()}

}

function payall_order() {
    //var data = JSON.parse(common.getCookieData());
    //var current_cid = data.cid;
    //if (cid)
    //    current_cid = cid;

    //displaying_cid = current_cid;
    //console.info("displaying_cid:" + displaying_cid + "   cid" + cid);
    $.ajax({
        type: "POST",
        //url: "url",
        url: "/eysystem/SetUserPayid",

        contentType: "application/json; charset=utf-8",
        //data: JSON.stringify({
        //    cid: data.cid,
        //    token: data.token,
        //    data: {
                  //cid:cid,
        //    }
        //}),
        dataType: "json",
        success: function (data) {
            if (data.code == 200) {
                //alert(JSON.stringify(data));
                //jsonData = data.data;
                //add_table();
                //setedit(current_id,false);
                //$("#myModal").modal('hide');

            }
        }, complete: function () {
            $(table_id).empty();
            $(excel_id).empty();
            add_table();

        },
        error: function (xhr, status, error) {
            console.info(status + xhr + error);
        }
    })
}

function jumpToMember(cid,name){
    console.info(cid+"  "+name);
    //JSON.parse(common.getCookieData).current_cid=cid;
    //JSON.parse(common.getCookieData).current_name=name;
    window.location.href = "member_order_list.html"

}


