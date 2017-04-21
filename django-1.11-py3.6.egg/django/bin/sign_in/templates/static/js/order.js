/**
 * Created by niyaou on 2017/4/20.
 */

var common = {
    setCookie: null, getCookie: null, getCookieData: null
};
common.getCookieData = function () {
    return ($.cookie('logindata'));
}


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
                }]


            //var table = $('<caption>基本的表格布局</caption>   <thead>                <tr>                <th>名称</th>                <th>城市</th>                </tr>                </thead>    ');

            var tbody = $("<tbody></tbody> ");
            for (one in jsonData) {
                var tr = $("<tr></tr> ");

                var td1 = $('<td class="col-xs-10"> <div> <div class="panel panel-default">                    <div class="panel-heading">                    <h4 class="panel-title">                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo' + one + '" > '+jsonData[one].name+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;￥'+jsonData[one].price+'  </a>     </h4>     </div>');
               if(jsonData[one].description)
                td1.append($(( "<div id='collapseTwo" + one + "' class='panel-collapse collapse'>                <div class='panel-body'>      " + jsonData[one].description + "                          </div>                </div>   </div></div> </td>")));


                var td = $(( " <td>  <div class='col-xs-1' >   <img src='static/img/plus.png' style='height:2.5vh;'id='plus" + one + "'/>      <p id='count" + one + "'>0</p>  <img src='static/img/minus.png' style='height:2.5vh;'id='minus" + one + "' /> </div>   </div>"));
                td.append($(( "</td>")));

                td1.appendTo(tr);
                td.appendTo(tr);
                tr.appendTo(tbody);


            }
            //tbody.appendTo(table);
            ( $("#goodlist")).append(tbody);
            for (one in jsonData) {
                $("#minus" + one).click(function () {
                    plus_total(this.id.substr(this.id.length - 1, 1), -1);
                });
                $("#plus" + one).click(function () {
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

function plus_total(index, type) {
    var original = parseInt($("#count" + index).text());
    var total = original + type;
    if (total < 0)
        return;
    var id = "#count" + index;
    console.info(id + "   " + total);
    $(id).text(total);
}

function submit_order(){
  var address=getValue("provence")+getValue("city")+getValue("zone")+getValue("distination")+
      "       姓名:"+getValue("name")+"    电话:"+getValue("phone");
    alert(address);
}
function getValue(id){
    if($("#"+id+" option:selected").text()){
        return $("#"+id+" option:selected").text();
    }else{
        return $("#"+id).val();
    }

}