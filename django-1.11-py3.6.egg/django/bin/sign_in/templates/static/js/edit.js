/**
 * Created by niyaou on 2017/4/14.
 */
var storage = window.localStorage;
var common={
    setCookie:null,getCookie:null,getCookieData:null
};
// 登录验证
function clickbtn(){
    console.info('fdsa');
    // 做表单输入校验
    var oldpsw = $("#oldpsw");
    var pswfirst = $("#pswfirst");
    var pswconfirm = $("#pswconfirm");
    var ali = $("#ali");
    var phone = $("#phone");
    var msg = "";
    //alert(userId.val());
    // 获取表单中的参数
    var params = $("#loginForm").serialize();
    if(pswfirst.val()!=pswconfirm.val()){
        alert('从新输入');
        return;
    };
    var data=  common.getCookieData();
    alert($.cookie(LOGINDATA));
    alert(data);
    //var a=  {username:storage["username"],cid:storage["cid"],token:storage["token"],data:{username:storage["username"],aliAccount:ali.val(),password:oldpsw.val(),phone:phone.val()}};
    var a=  {username:data.username,cid:data.cid,token:data.token,data:{username:data.username,aliAccount:ali.val(),password:oldpsw.val(),phone:phone.val()}};

    // 发送登录的异步请求
    //$.ajax({
    //    type: "POST",
    //    url:"/eysystem/ModifyPwd",
    //    contentType: "application/json; charset=utf-8",
    //    //data:  JSON.stringify({ 'username':userId.val(),'password':password.val()}),
    //
    //    data: JSON.stringify(a),
    //    dataType: "json",success:
    //        function(data){
    //            console.info(data);
    //            ok(data);
    //        },  complete: function(XMLHttpRequest, textStatus) {
    //        console.info(textStatus)
    //    }});
    //$.ajax({
    //    type: "POST",
    //    url:"/eysystem/Modifyali",
    //    contentType: "application/json; charset=utf-8",
    //    //data:  JSON.stringify({ 'username':userId.val(),'password':password.val()}),
    //
    //    data: JSON.stringify(a),
    //    dataType: "json",success:
    //        function(data){
    //            console.info(data);
    //            ok(data);
    //        },  complete: function(XMLHttpRequest, textStatus) {
    //        console.info(textStatus)
    //    }})
    $.ajax({
        type: "POST",
        url:"/eysystem/ModifyPhone",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(a),
        dataType: "json",success:
            function(data){
                console.info(data);
                ok(data);
            },  complete: function(XMLHttpRequest, textStatus) {
            console.info(textStatus)
        }})
}


//{
//    "code": 200,
//    "token": "BA:EC:17:46:28:56:BA:6F:C8:8B:88:A4:A0:F7:EC:D0",
//    "data": {
//    "cid": 25,
//        "aliAccount": "cc@taobao",
//        "authority": 1,
//        "password": "654321",
//        "realname": "testName",
//        "registertime": "Apr 12, 2017 9:34:01 PM",
//        "superior": 1,
//        "username": "宋曦3"
//}
//}
//{
//    "username": "宋曦3",
//    "cid": 1,
//    "token": "xxx",
//    "data": {
//    "username": "宋曦3",
//        "password": "asdf",
//        "realname": "name",
//        "oldpwd": "asd",
//        "ldentityId": "5120012511x",
//        "aliAccount": "dd"
//}
//}



function ok(str){
    if(str.code=='200'){
        alert('dome')
    }
}


/**
 * Created by niyaou on 2017/4/20.
 */
var LOGINDATA="logindata";

common.setCookie = function( username,token, cid,expiresNum) {
    var cookieValue={username:username,token:token,cid:cid
    };
    var str = JSON.stringify(cookieValue);
    var options = {
        'path': '/',
        'secure': true,//关闭https传输cookie
        'raw': true,//关闭cookie的自动编码功能
        'expires': expiresNum || 30 //cookie的过期时间，如没有传值默认30天过期
    };
    $.cookie(LOGINDATA, str, options);

}



common.getCookieData = function() {
    return ($.cookie('logindata'));
}

