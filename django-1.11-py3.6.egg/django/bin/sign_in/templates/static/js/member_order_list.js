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
var pageNum =10;
var displaying_cid = "";
var minus_invalid = "static/img/edit_invalid2.png";
var data = 'JSON.parse(common.getCookieData())';
var current_cid='data.current_cid';
var current_name='data.current_name';
var team_member = ["data.cid"];
var table_id = "#team_menber";
var excel_id = "#excel_table";
var current_id=0;
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
    "total": 141,
    "amount": 1080,
    "cargos": "null",
    "creatTime": "Apr 23, 2017 10:43:22 PM",
    "creatTimeInt": 0,
    "creator": 25,
    "description": "22",
    "postage": 240,
    "status": 0,
    "adress": "北京市北~~京市市辖区~~东城区212  ~~ 反对反对32~~    姓名:2    电话:22",
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
        "total": 141,
        "amount": 640,
        "cargos": "null",
        "creatTime": "Apr 23, 2017 10:36:02 PM",
        "creatTimeInt": 0,
        "creator": 25,
        "description": "22",
        "postage": 80,
        "status": -1,
        "adress": "北京市北京~~市市~~辖区东城区11  ~~犯得上发生~~     姓名:2    电话:22",
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
        "total": 141,
        "cargos": "null",
        "creatTime": "Apr 23, 2017 10:33:24 PM",
        "creatTimeInt": 0,
        "creator": 25,
        "description": "adfsdf",
        "postage": 160,
        "status": 1,
        "adress": "北京市~~北京市市辖区~~东城区3~~   方式电话~~    姓名:3    电话:2",
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
        "total": 141,
        "amount": 10560,
        "cargos": "null",
        "creatTime": "Apr 23, 2017 10:28:09 PM",
        "creatTimeInt": 0,
        "creator": 25,
        "description": "发生的故事的",
        "postage": 2480,
        "status": 0,
        "adress": "北京市~~北京市市辖区~~东城区~~电放费    ~~   姓名:订单    电话:312312",
        name: "张22",
        phone: "12131331213"
    }, {
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
        "total": 141,
        "creatTime": "Apr 23, 2017 10:26:04 PM",
        "creatTimeInt": 0,
        "creator": 25,
        "description": "33",
        "postage": 80,
        "status": 1,
        "adress": "北京市~~北京市市辖区~~东城区33 ~~与计划发给~~      姓名:33    电话:33",
        name: "张11",
        phone: "12131331213"
    }, {
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
        "total": 141,
        "creatTime": "Apr 23, 2017 10:26:04 PM",
        "creatTimeInt": 0,
        "creator": 25,
        "description": "33",
        "postage": 80,
        "status": 1,
        "adress": "北京市~~北京市市辖区~~东城区33  ~~法国德国和健康~~     姓名:33    电话:33",
        "name": "张11",
        "phone": "12131331213"
    }, {
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
        "total": 141,
        "creatTime": "Apr 23, 2017 10:43:22 PM",
        "creatTimeInt": 0,
        "creator": 25,
        "description": "22",
        "postage": 240,
        "status": 0,
        "adress": "北京市~~北京市~~市辖区~~东城区212  ~~     姓名:2    电话:22",
        "name": "张三",
        "phone": "12131331213"
    },];


$(document).ready(function () {
    $("#name_").text(current_name);
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
            add_table1();
            add_table();
              $("#explore").empty();
            add_explore(pages)

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
        var td1 = $('<td class="col-xs-10" >  <div class="panel-default col-xs-12 clearpadding" style="font-size: 1.3rem">  <a style="color:#696969" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo' + jsonData[one].id + '" id="toggles' + jsonData[one].id + '" > <div class="col-xs-3 clearpadding" id="name' + jsonData[one].id + '"> ' + jsonData[one].name + ' </div>  <div class="col-xs-5 clearpadding" id="phone' + jsonData[one].id + '">' + jsonData[one].phone + ' </div>  <div class="col-xs-2 clearpadding">总价</div>            <div class="col-xs-2 clearpadding" id="total"' + jsonData[one].id + '"> ' + (parseInt(jsonData[one].amount) + parseInt(jsonData[one].postage)) + '￥        </div></a></div>  ');

        td1.append($(( "<div id='collapseTwo" + jsonData[one].id + "'class='col-xs-12 panel-collapse collapse clearpadding' style='padding-top: 5px'>     <div class=' text-left col-xs-12 clearpadding'>    <div class='col-xs-2 clearpadding'> 商品</div>  <div class='col-xs-4 clearpadding' id='amount" + jsonData[one].id + "'>" + jsonData[one].amount + "</div>     " +
        "   <div class='col-xs-2 clearpadding'>邮费</div>" +
        " <div class='col-xs-4 clearpadding' id='postage" + jsonData[one].id + "'>20</div>" +
        "  <div class='col-xs-2 clearpadding'> 地址</div>" +
        "  <div class='col-xs-12 clearpadding' id='address" + jsonData[one].id + "'>" + jsonData[one].adress.replace(/~/g, "") + "</div>" +
        "  <div class='col-xs-12 clearpadding'> 详情</div>" +
        " <div class='col-xs-12 clearpadding' id='detail" + jsonData[one].id + "'>" + getDetail(jsonData[one].cargosSet) + "</div>" +
        "  </div> </div></td>")));

        td1.appendTo(tr);
        console.info("one:" + one + " status :" + jsonData[one].id);
        var td = $(( " <td>      <div class='label'  id='status" + jsonData[one].id + "'>  </div>"));
        td.append($("</td>"));
        td.appendTo(tr);

        td.appendTo(tr);
        tr.appendTo(tbody);
    }
    ( $(table_id)).append(tbody);


    for (one in jsonData) {
        getStatus(jsonData[one].id);
    }
}

function add_table1() {

    var tbody = $("<tbody></tbody> ");
    var tr1 = $("<tr></tr>");
    var tid1 = $('  <td class="col-xs-1">' + '编号' + '</td>');

    var td11 = $('<td> 姓名 </td><td> 电话 </td> <td> 收件省份 </td><td>收件城市 </td><td>收件区县</td><td>收件人详细地址</td><td> 内容</td>');
    tid1.appendTo(tr1);
    td11.appendTo(tr1);
    tr1.appendTo(tbody);

    for (var one in jsonData) {
        var tr = $("<tr></tr> ");
        var tid = $('  <td class="col-xs-1">' + (parseInt(one) + 1) + '</td>' +
            '<td  id="name' + jsonData[one].id + '"> ' + jsonData[one].name + ' </td> ' +
            ' <td  id="phone' + jsonData[one].id + '">' + jsonData[one].phone + ' </td> ' +
            "  <td >" + jsonData[one].adress.split("~~")[0] + "</td>" +
            "  <td >" + jsonData[one].adress.split("~~")[1] + "</td>" +
            "  <td >" + jsonData[one].adress.split("~~")[2] + "</td>" +
            "  <td >" + jsonData[one].adress.split("~~")[3] + "</td>" +
            "  <td  id='detail" + jsonData[one].id + "'>" + getDetail(jsonData[one].cargosSet) + "</td>");
        tid.appendTo(tr);
        tr.appendTo(tbody);
    }
    ( $(excel_id)).append(tbody);
    for (one in jsonData) {
        getStatus(jsonData[one].id);
    }
}

function add_explore(count) {

    var tbody = $("#explore");
    var tr = $("<ul class='pagination' style='font-size: 1rem' ></ul>");
    var t1 = $("<li></li> ");
    var tid = $(' <a onclick="refresh_explore(-1)" class="padding_clear" style="padding: 5px 3px" id="prev">往前</a><a  style="padding: 5px 8px" onclick="refresh_explore(1)" id="1">1</a>');
     tid.appendTo(t1);
    if(count>3&&total_page>4){
                var dot = $('<a  style="padding: 5px 8px">..</a>');
                dot.appendTo(t1);
}

   
    t1.appendTo(tr);


    total_page = parseInt(jsonData[0].total / pageNum);
    if ((jsonData[0].total / pageNum - total_page) > 0) {
        total_page += 1;
    }
    var first_dot = false;
    console.info(count);


    for (var i = count; i <= total_page; i++) {
        if (i == 1 || i == total_page) {
            if(total_page-count>4){
                 continue;
             }   else if(count==total_page&&(total_page - count) <3&&(total_page-count)>=0){
                for(var j= count-2; j < total_page; j++){
                        if(j<=1)
                        continue;
                       var ts = $("<li></li> ");
                     var tis = $(' <a  style="padding: 5px 8px" onclick="refresh_explore(' + j+ ')" id="' + j + '">' + j + '</a>');
                    tis.appendTo(ts);
                    tr.append(ts);
                }           
                  }
                   } else if(i -count >=3){
                    continue;

                   }

        else if (((i - count) <3 )&&((i-count)>=0)) {
            if(i==count &&i>=3){
                   var ts = $("<li></li> ");
             var tis = $('<a  style="padding: 5px 8px" onclick="refresh_explore(' + (i-1) + ')" id="' + (i-1) + '">' + (i-1) + '</a>');
            tis.appendTo(ts);
            tr.append(ts);
            }

             var ts = $("<li></li> ");
             var tis = $('<a  style="padding: 5px 8px" onclick="refresh_explore(' + i + ')" id="' + i + '">' + i + '</a>');
            tis.appendTo(ts);
            tr.append(ts);
           
        } else if(total_page-count<=3 ){
             for(var j= count-1; j <= count; j++){
                  if(j<1)
                        continue;
                       var ts = $("<li></li> ");
                     var tis = $(' <a  style="padding: 5px 8px" onclick="refresh_explore(' + j+ ')" id="' + j + '">' + j + '</a>');
                    tis.appendTo(ts);
                    tr.append(ts);
                }         
        }
      
    }




    var tr1 = $("<li></li> ");
    if(total_page-count>3){
                var dot1 = $('<a  style="padding: 5px 8px">..</a>');
              dot1.appendTo(tr1);
    }


    if (total_page > 1) {
        var temp = $(' <a  style="padding: 5px 8px" onclick="refresh_explore(' + total_page + ')" id="' + total_page + '">' + total_page + '</a>')
        temp.appendTo(tr1);
    }
    var tid1 = $('<a  style="padding: 5px 3px" onclick="refresh_explore(0)" id="next">往后</a>');
    tid1.appendTo(tr1);
    tr1.appendTo(tr);
    tr.appendTo(tbody);

   }


function refresh_explore(count) {

    if(count==-1){
        if(pages-1==0){
            return;
        }
        pages-=1;
    }else if(count==0){
        if(pages+1>total_page){
            return;
        }
        pages+=1;
    }else{
          pages = count;
    }
  

async_table()
    // $("#explore").empty();
    // console.info(count + "   " + pages);
    // add_explore(pages);

}


function getDetail(data) {
    var str = null;
    for (var one in data) {
        str += data[one].name + "&nbsp;" + data[one].num + "袋" + "&nbsp;&nbsp;&nbsp;"
    }
    return str;
}

function getStatus(id) {
    var str = "#status" + id;
    for (var one in jsonData) {

        if (jsonData[one].id == id) {

            console.info("one:" + one + "    " + jsonData[one].id + "    " + jsonData[one].status + "   id:" + str + "   attr:" + id);
            switch (jsonData[one].status) {
                case 0:
                    $(str).text("未付");
                    $(str).addClass("label-warning");
                    $(str).click(function(){toggle_btn(jsonData[one].id)});
                    break;
                case 1:
                    $(str).text("已付");
                    $(str).addClass("label-success");
                    $(str).click(function(){toggle_btn(jsonData[one].id)});
                    break;
                case -1:
                    $(str).text("取消");
                    $(str).addClass("label-default");
                    break;
            }
        }
    }
}


function toggle_btn(id){
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
    current_id=id;
        $("#myModal").modal('show');

        //return {"id": cid, "description": $(descrip).val(), "name": $(names).val(), "price": $(prices).val(), "weight": $(weights).val()}

}

function cancel_order(){
    //var data = JSON.parse(common.getCookieData());
    //var current_cid = data.cid;
    //if (cid)
    //    current_cid = cid;

    //displaying_cid = current_cid;
    //console.info("displaying_cid:" + displaying_cid + "   cid" + cid);
    $.ajax({
        type: "POST",
        //url: "url",
        url: "/eysystem/SetPaidOder",

        contentType: "application/json; charset=utf-8",
        //data: JSON.stringify({
        //    cid: data.cid,
        //    token: data.token,
        //    data: {
        //      data:{
        //          id:cid,
        //      }
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
            add_table1();
            add_table();
            $("#explore").empty();
            add_explore(pages)

        },
        error: function (xhr, status, error) {
            console.info(status + xhr + error);
        }
    })
}


