/**
 * Created by niyaou on 2017/4/20.
 */

var common = {
    setCookie: null, getCookie: null, getCookieData: null
};
common.getCookieData = function () {
    return ($.cookie('logindata'));
};
var total = 0;
var weight = 0;
var postFee = 0;
var order_string = "";
var data = common.getCookieData();
var goodlist = [];
var postage_cost = {"expressType": "??", "afterWight": 500, "afterWightPrice": 80, "heavy": 500, "price": 50};
var jsonData = [{"id": 1, "name": "牛肉", "price": 100, "status": 1, "weight": 250}, {
    "id": 2,
    "description": "好吃fda发货的沙发回去我答复哈斯卡",
    "name": "冷吃兔",
    "price": 250,
    "status": 1,
    "weight": 200
}, {"id": 3, "description": "幅度萨芬毫无起伏较大斯科拉jfk", "name": "鹌鹑蛋", "price": 140, "status": 1, "weight": 200},
    {
        "id": 4,
        "name": "海带",
        "price": 130,
        "status": 1,
        "weight": 200
    }];

$(document).ready(function () {


    async_table();

});

function async_table() {
    var data = common.getCookieData();
    var tr = $("#cloneTr");
    var clonedTr = tr.clone();
    $.ajax({
        type: "POST",
        url: "url",
        //url:"/eysystem/GetStatistics",

        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
            cid: "data.cid",
            token: "data.token"
        }),
        dataType: "JSON",
        complete: function (data) {
            //alert(JSON.stringify(data));
            console.info(data);


            //var table = $('<caption>基本的表格布局</caption>   <thead>                <tr>                <th>名称</th>                <th>城市</th>                </tr>                </thead>    ');

            var tbody = $("<tbody></tbody> ");
            for (one in jsonData) {
                var tr = $("<tr></tr> ");

                var td1 = $('<td class="col-xs-10" style="padding:0px"><div class="panel panel-default" style="margin-bottom: 0px" >                    <div class="panel-heading" >                    <h4 class="panel-title" >                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo' + jsonData[one].id + '" > ' + jsonData[one].name + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;￥' + jsonData[one].price + '  </a>     </h4>     </div>');
                if (jsonData[one].description)
                    td1.append($(( "<div id='collapseTwo" + jsonData[one].id + "' class='panel-collapse collapse'>                <div class='panel-body'>      " + jsonData[one].description + "                          </div>                 </div></div> </td>")));


                var td = $(( " <td>  <div style='width:18vw' >   <img src='static/img/plus.png' style='height:2.5vh;;float:left'id='plus" + jsonData[one].id + "'/>      <div style='width:6vw;float: left;' id='count" + jsonData[one].id + "'>0</div>  <img src='static/img/minus.png' style='height:2.5vh;;float:left'id='minus" + jsonData[one].id + "' /> </div>   </div>"));
                td.append($(( "</td>")));

                td1.appendTo(tr);
                td.appendTo(tr);
                tr.appendTo(tbody);


            }
            //tbody.appendTo(table);
            ( $("#goodlist")).append(tbody);
            for (one in jsonData) {
                $("#minus" + jsonData[one].id).click(function () {
                    plus_total(this.id.substr(this.id.length - 1, 1), -1);
                });
                $("#plus" + jsonData[one].id).click(function () {
                    plus_total(this.id.substr(this.id.length - 1, 1), 1);
                });
            }


            //alert($("#goodlist").html());
        },
        error: function (xhr, status, error) {
            console.info(status + xhr + error);
            //alert(error);
        }
    })
}

function plus_total(index, type,if_reset) {
    var id = "#count" + index;
    if(if_reset){
        $(id).text(0);
    }else{
        var original = parseInt($("#count" + index).text());
        var total = original + type;
        if (total < 0)
            return;

        console.info(id + "   " + total);
        $(id).text(total);
    }

    getTotalCost();

}

function getAddress() {
    if (!getValue("distination") || !getValue("name") || !getValue("phone")) {
        return null;
    }
    var address = getValue("provence") + getValue("city") + getValue("zone") + getValue("distination") +
        "       姓名:" + getValue("name") + "    电话:" + getValue("phone");
    return address;
}

function getTotalCost() {

    for (one in jsonData) {
        var count = getValue("count" + jsonData[one].id);
        jsonData[one]["count"] = count;
        total += jsonData[one].price * count;
        weight += jsonData[one].weight * count;
    }

    if (weight > postage_cost.heavy) {
        postFee += postage_cost.afterWightPrice;
    } else if (weight > 0) {
        postFee += postage_cost.price;
    }
    $("#total").text(total);
    $("#postage").text(postFee);
    $("#cost").text(total + postFee);

    $("#dialog_total").text(total);
    $("#dialog_postage").text(postFee);
    $("#dialog_cost").text(total + postFee);
    $("#goodsdetail").text(order_string);

    //alert("订单价"+total+"  邮费"+postFee +"   总价"+(total+postFee));

}


function getValue(id) {
    if ($("#" + id + " option:selected").text()) {
        return $("#" + id + " option:selected").text();
    } else if ($("#" + id).val()) {
        return $("#" + id).val();
    } else {
        return parseInt($("#" + id).text());
    }
}
function getData(id) {
    for (one in jsonData) {
        if (jsonData[one].id == id)
            return jsonData[one]
    }
}

function creat_dialog() {
    $('#alert_address').alert('close');
    var warm_address = $('<div class=" row alert alert-warning" id="alert_address">    <a href="#" class="close" data-dismiss="alert">        &times;</a>    <strong>警告！</strong>请填写完整的邮寄地址。</div>');
    var warm_order = $('<div class=" row alert alert-warning" id="alert_address">    <a href="#" class="close" data-dismiss="alert">        &times;</a>    <strong>警告！</strong>订购的商品不能为空</div>');

    getTotalCost();
    if (!weight) {
        $("#picker").append(warm_order);
        return;
    } else if (!getAddress()) {
        $("#picker").append(warm_address);
        return;
    }
    for (one in jsonData) {

        if (jsonData[one].count) {
            goodlist.push({"num": jsonData[one].count, "id": jsonData[one].id});
            order_string += jsonData[one].name + "    " + jsonData[one].count + " 袋 ; "
        }
    }

    $("#goodsdetail").text(order_string);


    $("#address").text(getAddress());
    $("#myModal").modal('show');
}

function order() {
    $("#myModal").modal('hide');

    var post_data = {
        "cid": "data.cid",
        "token": "data.token",
        "data": {
            "data": {
                "amount": total + postFee,
                "postage": postFee,
                "description": "描述",
                "adress": getAddress(),
                "goodList": goodlist
            }
        }
    }

    reset();

}


function reset(){
     total = 0;
     weight = 0;
     postFee = 0;
     order_string = "";

     goodlist = [];

    for (one in jsonData) {
            plus_total(jsonData[one].id, -1,true);
    };
    $("#distination").val("");
    $("#name").val("");
    $("#phone").val("");
}

//{"code":200,"data":[{"expressType":"??","afterWight":500,"afterWightPrice":80,"heavy":500,"price":80}]}
