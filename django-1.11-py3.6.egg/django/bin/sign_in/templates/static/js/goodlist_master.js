/**
 * Created by niyaou on 2017/4/20.
 */

var common = {
    setCookie: null, getCookie: null, getCookieData: null
};
common.getCookieData = function () {
    return ($.cookie('logindata'));
};


var displaying_cid = "";
var order_string = "";
var minus_url = "static/img/edit2.png";
var save_url = "static/img/save.png";
var minus_invalid = "static/img/edit_invalid2.png";
var save_invalid = "static/img/save_invalid.png";
var icon_url = "";
var save_icon = "";
var data = common.getCookieData();
var current_data=null;
var current_id=0;
var team_member = ["data.cid"];
var table_id = "#team_menber";
var postage_cost = {"expressType": "??", "afterWight": 500, "afterWightPrice": 80, "heavy": 500, "price": 50};
var jsonData = [
    {"id": 1, "name": "牛肉", "price": 100, "status": 1, "weight": 250},
    {
        "id": 2,
        "description": "好吃",
        "name": "冷吃兔",
        "price": 250,
        "status": 1,
        "weight": 200
    }, {"id": 3, "description": "2", "name": "鹌鹑蛋", "price": 140, "status": 1, "weight": 200}, {
        "id": 4,
        "name": "海带",
        "price": 130,
        "status": 1,
        "weight": 200
    }];

$(document).ready(function () {
    async_table();
});


function async_table(cid) {
    //var data = JSON.parse(common.getCookieData());
    var current_cid = "data.cid";
    if (cid)
        current_cid = cid;

    displaying_cid = current_cid;
    console.info("displaying_cid:" + displaying_cid + "   cid" + cid);
    $.ajax({
        type: "POST",
        //url: "url",
        url: "/eysystem/GetStaff",

        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
            cid: "data.cid",
            token: "data.token",
            data: {
                cid: current_cid
            }
        }),
        dataType: "json",
        success: function (data) {
            if (data.code == 200) {
                jsonData = data.data;
                add_table();

            }
        }, complete: function () {
            add_table();

        },
        error: function (xhr, status, error) {
            console.info(status + xhr + error);
        }
    })
}


function add_table() {
    icon_url = minus_url;
    save_icon = save_invalid;
    var tbody = $("<tbody></tbody> ");
    for (one in jsonData) {
        var tr = $("<tr></tr> ");
        var tid = $('  <td class="col-xs-1">' + (parseInt(one) + 1) + '</td>');
        tid.appendTo(tr);
        var td1 = $('<td class="col-xs-10" >  <div class="panel-default col-xs-12 clearpadding">  <a style="color:#696969" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo' + jsonData[one].id + '" id="toggles' + jsonData[one].id + '" > <div class="col-xs-2 clearpadding ">品名 </div>    <div class="col-xs-5 clearpadding"> <input  id="name' + jsonData[one].id + '" type="text" class=" col-xs-8 back-control" value="' + jsonData[one].name + '" disabled="disabled" /> </div>  <div class="col-xs-offset-1 col-xs-2 clearpadding">价格</div> <div class="col-xs-2 clearpadding"><input id="price' + jsonData[one].id + '" value="' + jsonData[one].price + '" type="text" class=" back-control col-xs-12 " disabled="disabled"/> </div></a></div>  ');

        td1.append($(( "<div id='collapseTwo" + jsonData[one].id + "'class='col-xs-12 panel-collapse collapse clearpadding' style='padding-top: 5px'>     <div class=' text-left col-xs-12 clearpadding'>    <div class='col-xs-2 clearpadding'> 重量</div>  <div class='col-xs-4 clearpadding'><input id='weight" + jsonData[one].id + "' value='" + jsonData[one].weight + "' type='text' class=' back-control col-xs-8 ' disabled='disabled' /></div>      <div class='col-xs-12 clearpadding'>         <div class='col-xs-12 clearpadding'style='padding-top: 5px'>详情</div> <textarea id='description" + jsonData[one].id + "'   class=' back-control col-xs-10 ' rows='3' disabled='disabled'>" + jsonData[one].description + "</textarea></div>                          </div>                 </div></div> </td>")));
        td1.appendTo(tr);

        var td = $(( " <td>  <div >      <img src='" + save_icon + "' style='height:2.5vh;' id='primar" + jsonData[one].id + "'/>      </div>"));
        td.append($(( "</td>")));
        td.appendTo(tr);

        td = $(( " <td>  <div  >      <img src='" + icon_url + "' style='height:2.5vh;' id='minus" + jsonData[one].id + "'/>      </div>"));
        td.append($(( "</td>")));

        td.appendTo(tr);
        tr.appendTo(tbody);
    }
    ( $(table_id)).append(tbody);

    for (one in jsonData) {
        $("#minus" + jsonData[one].id).click(function () {
            editGoods(this.id.replace(/[^0-9]/ig, ""));

        });
        $("#primar" + jsonData[one].id).click(function () {

            showToggle(this.id.replace(/[^0-9]/ig, ""));
        });
    }
}

function showToggle(cid) {
    if (displaying_cid != cid) {
        return;
    }
   current_data=  creat_dialog(cid);
    current_id=cid;
}

function saveGoods() {
    var current_cid = "data.cid";

    $.ajax({
        type: "POST",
        //url: "url",
        url: "/eysystem/InvalidUser",

        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
            cid: "data.cid",
            token: "data.token",
            data:current_data
        }),
        dataType: "json",
        success: function (data) {
            if (data.code == 200) {
                jsonData = data.data;
                add_table();
            }
        }, complete: function () {
            setedit(current_id,false);
            $("#myModal").modal('hide');
            //add_table();
        },
        error: function (xhr, status, error) {
            //console.info(status + xhr + error);
            //alert(error);
        }
    });
}

function editGoods(cid) {
    displaying_cid = cid;
    setedit(cid, true);
}

function setedit(cid, type) {
    var names = "#name" + cid;
    var prices = "#price" + cid;
    var weights = "#weight" + cid;
    var descrip = "#description" + cid;
    var primars = "#primar" + cid;
    var minuss = "#minus" + cid;
    var id = "#toggles" + cid;
    if (type) {
        $(names).attr('disabled', false);
        $(prices).attr('disabled', false);
        $(weights).attr('disabled', false);
        $(descrip).attr('disabled', false);
        $(minuss).attr('src', minus_invalid);
        $(primars).attr('src', save_url);
        $(id).click();
    } else {
        console.info("fff false  cid:"+cid);
        $(names).attr('disabled', 'disabled');
        $(prices).attr('disabled', true);
        $(weights).attr('disabled', true);
        $(descrip).attr('disabled', true);
        $(minuss).attr('src', minus_url);
        $(primars).attr('src', save_invalid);
    }
}


function getData(cid) {
    for (one in jsonData) {
        if (jsonData[one].id == cid)
            return jsonData[one]
    }
}

function creat_dialog(cid) {
    $('#alert_address').alert('close');
    //var warm_address = $('<div class=" row alert alert-warning" id="alert_address">    <a href="#" class="close" data-dismiss="alert">        &times;</a>    <strong>警告！</strong>请填写完整的邮寄地址。</div>');
    //var warm_order = $('<div class=" row alert alert-warning" id="alert_address">    <a href="#" class="close" data-dismiss="alert">        &times;</a>    <strong>警告！</strong>订购的商品不能为空</div>');
    var names = "#name" + cid;
    var prices = "#price" + cid;
    var weights = "#weight" + cid;
    var descrip = "#description" + cid;
    var primars = "#primar" + cid;
    var minuss = "#minus" + cid;
    var id = "#toggles" + cid;

    $("#dialog_total").text($(names).val());
    $("#dialog_postage").text($(prices).val())
    $("#dialog_cost").text($(weights).val())
    $("#goodsdetail").text($(descrip).val());
    $("#myModal").modal('show');

    return {"id": cid, "description": $(descrip).val(), "name": $(names).val(), "price": $(prices).val(), "weight": $(weights).val()}

}


