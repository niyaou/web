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

            var jsonData = [{caller: 'fdas', imsi: '321', imei: 'fffaa', osid: 'bbd1'}, {
                caller: 'fdas',
                imsi: '32fdasfdsafdsfdsafdsfdsafdasfdsa1',
                imei: 'ffffdsaaa',
                osid: 'bbdfffda1'
            }, {caller: 'fdas', imsi: '321', imei: 'fffaa', osid: 'bbd1'}];

            var table = $("<table class='table' id='goodlist'>       <caption>基本的表格布局</caption>            <thead>            <tr>            <th>名称</th>            <th>城市</th>            </tr>            </thead>            <tbody>");
            table.appendTo($("#createtable"));
            for (one in jsonData) {
                var tr = $("<tr></tr>");
                tr.appendTo(table);


                var td = $(" <td class='center-block' style='width:100%'>" + "<div class='row'>                        <div class='panel panel-default col-xs-10'>                        <div class='panel-heading'>                        <h4 class='panel-title'>                       <a data-toggle='collapse' data-parent='#accordion'                    href='#"+one+"'>                        点击我进行展开，再次点击我进行折叠。第 2 部分                    </a>                    </h4>                    </div>"
                    + "<div id='"+one+"' class='panel-collapse collapse'>                <div class='panel-body'>      "+jsonData[one].imsi+"                          </div>                </div>   </div>"
                    +"  <div class='col-xs-1'><button>1</button></div>                </div>"
                    +"</td>");
                td.appendTo(tr);

            }

            $("#createtable").append("</table>");


        },
        error: function (xhr, status, error) {
            console.info(status + xhr + error);
            //alert(error);
        }
    })
}