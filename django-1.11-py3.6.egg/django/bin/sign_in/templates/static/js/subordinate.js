/**
 * Created by niyaou on 2017/4/20.
 */

var common = {
    setCookie: null, getCookie: null, getCookieData: null
};
common.getCookieData = function () {
    return ($.cookie('logindata'));
};



var order_string = "";
var minus_url="menber_minus.png";
var minus_invalid="minus_invalid.png";
var icon_url="";
var data = common.getCookieData();
var displaying_cid = data.cid;
var team_member = [ data.cid];
var table_id = "#team_menber";
var postage_cost = {"expressType": "??", "afterWight": 500, "afterWightPrice": 80, "heavy": 500, "price": 50};
var temp=null;
var jsonData = [{
    "cid": 1,
    "aliAccount": "test",
    "authority": 1,
    "password": "123456",
    "phone": "55555",
    "realname": "王祖贤",
    "registertime": "Apr 12, 2017 1:07:36 PM",
    "superior": 1,
    "username": "xsong233",
    "status": 1
}, {
    "cid": 2,
    "aliAccount": "testAli",
    "authority": 1,
    "realname": "相似性",
    "password": "123456",
    "registertime": "Apr 12, 2017 1:47:15 PM",
    "superior": 1,
    "username": "中文测试",
    "status": 1
}, {
    "cid": 3,
    "aliAccount": "adfasdfasdf",
    "authority": 1,
    "password": "123",
    "phone": "138888888888",
    "realname": "高圆圆",
    "registertime": "Apr 12, 2017 9:34:01 PM",
    "superior": 1,
    "username": "宋曦3",
    "status": 1
}, {
    "cid": 4,
    "aliAccount": "test",
    "authority": 1,
    "password": "123456",
    "phone": "55555",
    "realname": "白百合",
    "registertime": "Apr 12, 2017 1:07:36 PM",
    "superior": 1,
    "username": "xsong233",
    "status": 1
}, {
    "cid": 5,
    "aliAccount": "testAli",
    "authority": 1,
    "password": "123456",
    "registertime": "Apr 12, 2017 1:47:15 PM",
    "superior": 1,
    "username": "东风科技",
    "realname":"刘涛",
    "status": 1
}, {
    "cid": 6,
    "aliAccount": "adfasdfasdf",
    "authority": 1,
    "password": "123",
    "phone": "138888888888",
    "realname": "很多事",
    "registertime": "Apr 12, 2017 9:34:01 PM",
    "superior": 1,
    "username": "宋曦3",
    "status": 1
}];

$(document).ready(function () {
    async_table();
});

function async_postage() {
    var data =  JSON.parse(common.getCookieData());
    $.ajax({
        type: "POST",
        //url: "url",
        url: "/eysystem/GetPostage",

        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
            cid: data.cid,
            token: data.token
        }),
        dataType: "JSON",
        success: function (data) {
            if (data.code == 200) {
                postage_cost = data.data[0];
            }
        },
        error: function (xhr, status, error) {
            console.info(status + xhr + error);
        }
    })
}


function async_table(cid) {
    var data = JSON.parse(common.getCookieData());
    var current_cid = data.cid;
    if (cid)
        current_cid = cid;

    displaying_cid = current_cid;
    console.info("displaying_cid:"+displaying_cid+"   cid"+cid);
    $.ajax({
        type: "POST",
        //url: "url",
        url: "/eysystem/GetStaff",

        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
            cid: data.cid,
            token: data.token,
            data: {
                cid: current_cid
            }
        }),
        dataType: "json",
        success: function (data) {
            if (data.code == 200) {
                //alert(JSON.stringify(data));
                jsonData = data.data;
                add_table();

            }
        }, complete: function () {
            //add_table();

        },
        error: function (xhr, status, error) {
            console.info(status + xhr + error);
            //alert(error);
        }
    })
}


function add_table() {
   if(dealWithCid()){
       icon_url=minus_url;
   }else{
       icon_url=minus_invalid;
   };
    var tbody = $("<tbody></tbody> ");
    for (one in jsonData) {
        var tr = $("<tr></tr> ");
        var tid = $('  <td class="col-xs-1">' + (parseInt(one)+1) + '</td>');
        tid.appendTo(tr);
        var td1 = $('<td class="col-xs-10" ><div class="panel-default" style="margin-bottom: 0px" >             <a style="color:#696969" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo' + jsonData[one].cid + '" >姓名:<span id="name' + jsonData[one].cid + '">' + jsonData[one].realname + '</span>&nbsp;&nbsp;&nbsp;账号:<span id="id' + jsonData[one].cid + '">' + jsonData[one].username + '</span>  </a>   ');

        td1.append($(( "<div id='collapseTwo" + jsonData[one].cid + "' class='panel-collapse collapse'>   <div class='panel-body text-left'>      <div> 支付宝:<span id='ali" + jsonData[one].cid + "'>" + jsonData[one].aliAccount + "</span></div>            <div>电话:<span id='phone" + jsonData[one].cid + "'>" + jsonData[one].phone + "</span></div>            <div>加入时间:<span id='creat_time" + jsonData[one].cid + "'>" + jsonData[one].registertime + "</span></div>                          </div>                 </div></div> </td>")));
        td1.appendTo(tr);

        var td = $(( " <td>  <div >      <img src='static/img/primar.png' style='height:2.5vh;' id='primar" + jsonData[one].cid + "'/>      </div>"));
        td.append($(( "</td>")));
        td.appendTo(tr);

        td = $(( " <td>  <div  >      <img src='static/img/"+icon_url+"' style='height:2.5vh;' id='minus" + jsonData[one].cid + "'/>      </div>"));
        td.append($(( "</td>")));

        td.appendTo(tr);
        tr.appendTo(tbody);
    }
    ( $(table_id)).append(tbody);

    for (one in jsonData) {
        $("#minus" + jsonData[one].cid).click(function () {
            //alert(this.id.replace(/[^0-9]/ig,""));
            removeInferior(this.id.replace(/[^0-9]/ig,""));
        });
        $("#primar" + jsonData[one].cid).bind('click',function () {
            getInFerior(this.id.replace(/[^0-9]/ig,""));

        });
    }
}
function removeInferior(cid) {
    var data = JSON.parse(common.getCookieData());
    if(displaying_cid != data.cid){
        return;
    }
    $(table_id).empty();
    //jsonData.pop();


    $.ajax({
        type: "POST",
        //url: "url",
        url: "/eysystem/InvalidUser",

        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
            cid: data.cid,
            token: data.token,
            data: {
                cid: cid
            }
        }),
        dataType: "json",
        success: function (data) {
            async_table();
            if (data.code == 200) {
                jsonData = data.data;
                async_table();
                //add_table();
            }
        }, complete: function () {
            //add_table();
        },
        error: function (xhr, status, error) {
            console.info(status + xhr + error);
            //alert(error);
        }
    });
}

function getInFerior(cid) {
    temp=getData(cid).realname;
    $(table_id).empty();
    async_table(cid);
    team_member.push(cid);
}

function dealWithCid() {
    var datas = JSON.parse(common.getCookieData());
    if (parseInt(displaying_cid) != parseInt(datas.cid)) {
        console.info("displaying_cid"+displaying_cid+"   datas.cid"+datas.cid);
        $("#backtoupset").css("display", "block");
        //alert(datas.cid);
        //alert(JSON.stringify(getData(datas.cid)));
        $("#name_").text(temp);
        return false;
    } else {
        $("#backtoupset").css("display", "none");
        $("#name_").text("我");
        return true;//允许删除
    }
}

function backToUpSet(){
    $(table_id).empty();
    team_member.pop();
    //alert(team_member[(team_member.length-1)]);
    async_table(team_member[(team_member.length-1)])
}


function getData(cid) {

    for (one in jsonData) {
        if (parseInt(jsonData[one].cid) ==parseInt(cid))
            return jsonData[one];
    }
}


//function creat_dialog() {
//    $('#alert_address').alert('close');
//    var warm_address = $('<div class=" row alert alert-warning" id="alert_address">    <a href="#" class="close" data-dismiss="alert">        &times;</a>    <strong>警告！</strong>请填写完整的邮寄地址。</div>');
//    var warm_order = $('<div class=" row alert alert-warning" id="alert_address">    <a href="#" class="close" data-dismiss="alert">        &times;</a>    <strong>警告！</strong>订购的商品不能为空</div>');
//    $("#goodsdetail").text(order_string);
//    $("#address").text(getAddress());
//    $("#myModal").modal('show');
//}
//
//function order() {
//    $("#myModal").modal('hide');
//    var cookie = common.getCookieData();
//    cookie = JSON.parse(cookie);
//    var post_data = {
//        cid: cookie.cid, token: cookie.token, data: {
//            data: {
//                amount: total + postFee,
//                postage: postFee,
//                description: $("#conment").val(),
//                adress: getAddress(),
//                goodList: goodlist
//            }
//        }
//    };
//    reset();
//    alert(typeof (cookie));
//    alert(cookie);
//    alert(JSON.stringify(post_data));
//    $.ajax({
//        type: "POST",
//        //url: "url",
//        url: "/eysystem/CreatOrder",
//
//        contentType: "application/json; charset=utf-8",
//        data: JSON.stringify(post_data),
//        dataType: "json",
//        success: function (data) {
//            if (data.code == 200) {
//
//            }
//        },
//        error: function (xhr, status, error) {
//            console.info(status + xhr + error);
//
//        }
//    })
//
//}


//{"code":200,"data":[{"expressType":"??","afterWight":500,"afterWightPrice":80,"heavy":500,"price":80}]}
