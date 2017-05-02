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
var current_data = null;
var current_id = 0;
var team_member = ["data.cid"];
var table_id = "#team_menber";
var postage_cost = {"expressType": "??", "afterWight": 500, "afterWightPrice": 80, "heavy": 500, "price": 50};
var jsonData = [{
    "cargosSet": [
        {
            "id": 10070,
            "name": "冷吃兔",
            "num": 1,
            "price": 250,
            "ordersId": 860680,
            "goodId": 2
        },
        {
            "id": 10071,
            "name": "鹌鹑蛋",
            "num": 5,
            "price": 140,
            "ordersId": 860680,
            "goodId": 3
        },
        {
            "id": 10072,
            "name": "海带",
            "num": 1,
            "price": 130,
            "ordersId": 860680,
            "goodId": 4
        }
    ],
    "id": 5,
    "amount": 1080,
    "cargos": "null",
    "creatTime": "Apr 23, 2017 10:43:22 PM",
    "creatTimeInt": 0,
    "creator": 25,
    "description": "22",
    "postage": 240,
    "status": 0,
    "adress": "北京市北京市市辖区东城区212       姓名:2    电话:22",
    name: "张三",
    phone: "12131331213"
},
    {
        "cargosSet": [
            {
                "id": 10068,
                "name": "冷吃兔",
                "num": 2,
                "price": 250,
                "ordersId": 860679,
                "goodId": 2
            },
            {
                "id": 10069,
                "name": "鹌鹑蛋",
                "num": 1,
                "price": 140,
                "ordersId": 860679,
                "goodId": 3
            }
        ],
        "id": 4,
        "amount": 640,
        "cargos": "null",
        "creatTime": "Apr 23, 2017 10:36:02 PM",
        "creatTimeInt": 0,
        "creator": 25,
        "description": "22",
        "postage": 80,
        "status": -1,
        "adress": "北京市北京市市辖区东城区11       姓名:2    电话:22",
        name: "张三",
        phone: "13565432113"
    },
    {
        "cargosSet": [
            {
                "id": 10067,
                "name": "鹌鹑蛋",
                "num": 5,
                "price": 140,
                "ordersId": 860678,
                "goodId": 3
            }
        ],
        "id": 3,
        "amount": 700,
        "cargos": "null",
        "creatTime": "Apr 23, 2017 10:33:24 PM",
        "creatTimeInt": 0,
        "creator": 25,
        "description": "adfsdf",
        "postage": 160,
        "status": 1,
        "adress": "北京市北京市市辖区东城区3       姓名:3    电话:2",
        name: "张三",
        phone: "12131331213"
    }, {
        "cargosSet": [
            {
                "id": 10064,
                "name": "null",
                "num": 37,
                "price": 0,
                "ordersId": 860677,
                "goodId": 3
            },
            {
                "id": 10065,
                "name": "null",
                "num": 2,
                "price": 0,
                "ordersId": 860677,
                "goodId": 1
            },
            {
                "id": 10066,
                "name": "null",
                "num": 37,
                "price": 0,
                "ordersId": 860677,
                "goodId": 3
            }
        ],
        "id": 21,
        "amount": 10560,
        "cargos": "null",
        "creatTime": "Apr 23, 2017 10:28:09 PM",
        "creatTimeInt": 0,
        "creator": 25,
        "description": "发生的故事的",
        "postage": 2480,
        "status": 0,
        "adress": "北京市北京市市辖区东城区电放费       姓名:订单    电话:312312",
        name: "张22",
        phone: "12131331213"
    },    {
        "cargosSet": [
            {
                "id": 10062,
                "name": "null",
                "num": 1,
                "price": 0,
                "ordersId": 860676,
                "goodId": 3
            },
            {
                "id": 10063,
                "name": "null",
                "num": 1,
                "price": 0,
                "ordersId": 860676,
                "goodId": 4
            }
        ],
        "id": 11,
        "amount": 270,
        "cargos": "null",
        "creatTime": "Apr 23, 2017 10:26:04 PM",
        "creatTimeInt": 0,
        "creator": 25,
        "description": "33",
        "postage": 80,
        "status": 1,
        "adress": "北京市北京市市辖区东城区33       姓名:33    电话:33",
        name: "张11",
        phone: "12131331213"
    },   {
        "cargosSet": [
            {
                "id": 10062,
                "name": "null",
                "num": 1,
                "price": 0,
                "ordersId": 860676,
                "goodId": 3
            },
            {
                "id": 10063,
                "name": "null",
                "num": 1,
                "price": 0,
                "ordersId": 860676,
                "goodId": 4
            }
        ],
        "id": 311,
        "amount": 270,
        "cargos": "null",
        "creatTime": "Apr 23, 2017 10:26:04 PM",
        "creatTimeInt": 0,
        "creator": 25,
        "description": "33",
        "postage": 80,
        "status": 1,
        "adress": "北京市北京市市辖区东城区33       姓名:33    电话:33",
       "name": "张11",
        "phone": "12131331213"
    },{
        "cargosSet": [
            {
                "id": 10070,
                "name": "冷吃兔",
                "num": 1,
                "price": 250,
                "ordersId": 860680,
                "goodId": 2
            },
            {
                "id": 10071,
                "name": "鹌鹑蛋",
                "num": 5,
                "price": 140,
                "ordersId": 860680,
                "goodId": 3
            },
            {
                "id": 10072,
                "name": "海带",
                "num": 1,
                "price": 130,
                "ordersId": 860680,
                "goodId": 4
            }
        ],
        "id": 125,
        "amount": 1080,
        "cargos": "null",
        "creatTime": "Apr 23, 2017 10:43:22 PM",
        "creatTimeInt": 0,
        "creator": 25,
        "description": "22",
        "postage": 240,
        "status": 0,
        "adress": "北京市北京市市辖区东城区212       姓名:2    电话:22",
        "name": "张三",
        "phone": "12131331213"
    },];


$(document).ready(function () {
    async_table();
});

//获取订单列表：
//请求：
//{
//    "cid": 25,
//    "token": "FC71137E2C2212CFD372F63BCC692941",
//    "data": {
//      "cid":12
//    "page": 0,
//        "pageNum": 5
//}
//}


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
        url: "/eysystem/GetGoodList",

        contentType: "application/json; charset=utf-8",
        //data: JSON.stringify({
        //    cid: data.cid,
        //    token: data.token,
        //    data: {
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
            add_table();

        },
        error: function (xhr, status, error) {
            console.info(status + xhr + error);
        }
    })
}


function add_table() {
    jsonData.sort(function(a,b){
        return b.status- a.status;
    })
    var tbody = $("<tbody></tbody> ");
    for (var one in jsonData) {
        var tr = $("<tr></tr> ");
        var tid = $('  <td class="col-xs-1">' + (parseInt(one) + 1) + '</td>');
        tid.appendTo(tr);
        var td1 = $('<td class="col-xs-10" >  <div class="panel-default col-xs-12 clearpadding" style="font-size: 1.3rem">  <a style="color:#696969" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo' + jsonData[one].id + '" id="toggles' + jsonData[one].id + '" > <div class="col-xs-3 clearpadding" id="name' + jsonData[one].id + '"> ' + jsonData[one].name + ' </div>  <div class="col-xs-5 clearpadding" id="phone' + jsonData[one].id + '">' + jsonData[one].phone + ' </div>  <div class="col-xs-2 clearpadding">总价</div>            <div class="col-xs-2 clearpadding" id="total"' + jsonData[one].id + '"> ' + (parseInt(jsonData[one].amount) + parseInt(jsonData[one].postage)) + '￥        </div></a></div>  ');

        td1.append($(( "<div id='collapseTwo" + jsonData[one].id + "'class='col-xs-12 panel-collapse collapse clearpadding' style='padding-top: 5px'>     <div class=' text-left col-xs-12 clearpadding'>    <div class='col-xs-2 clearpadding'> 商品</div>  <div class='col-xs-4 clearpadding' id='amount" + jsonData[one].id + "'>" + jsonData[one].amount + "</div>     " +
        "   <div class='col-xs-2 clearpadding'>邮费</div>" +
        " <div class='col-xs-4 clearpadding' id='postage" + jsonData[one].id + "'>20</div>" +
        "  <div class='col-xs-2 clearpadding'> 地址</div>" +
        "  <div class='col-xs-12 clearpadding' id='address" + jsonData[one].id + "'>北京市北京市市辖区东城区212</div>" +
        "  <div class='col-xs-12 clearpadding'> 详情</div>" +
        " <div class='col-xs-12 clearpadding' id='detail" + jsonData[one].id + "'>" + getDetail(jsonData[one].cargosSet) + "</div>" +
        "  </div> </div></td>")));

        td1.appendTo(tr);
        console.info("one:"+one+" status :"+jsonData[one].id);
        var td = $(( " <td>      <div class='label'  id='status" + jsonData[one].id + "'>  </div>"));
        td.append($( "</td>"));
        td.appendTo(tr);

        td.appendTo(tr);
        tr.appendTo(tbody);
    }
    ( $(table_id)).append(tbody);



    for (one in jsonData) {
        getStatus(jsonData[one].id);
    }
}




function getDetail(data) {
    var str = null;
    for (one in data) {
        str += data[one].name + "&nbsp;" + data[one].num + "袋" + "&nbsp;&nbsp;&nbsp;"
    }
    return str;
}

function getStatus(id) {
    var str = "#status" + id;
    for (one in jsonData) {

        if (jsonData[one].id == id) {

            console.info("one:"+one+"    "+jsonData[one].id + "    " + jsonData[one].status + "   id:" + str+"   attr:"+id);
            switch (jsonData[one].status) {
                case 0:
                    $(str).text("未付");
                    $(str).addClass("label-warning");
                    break;
                case 1:
                    $(str).text("已付");
                    $(str).addClass("label-success");
                    break;
                case -1:
                    $(str).text("取消");
                    $(str).addClass("label-default");
                    break;
            }
        }
    }

}


