/**
 * Created by niyaou on 2017/4/14.
 */
var isDisplay=true;
var common={
    setCookie:null,getCookie:null,getCookieData:null
};
var person= {
    "cid": 4,
    "aliAccount": "test",
    "authority": 1,
    "password": "123456",
    "phone": "55555",
    "realname": "白百合",
    "registertime": "Apr 12, 2017 1:07:36 PM",
    "superior": 1,
    "username": "xsong233",
    "status": 1,

}

$(document).ready(function () {
    async_userInfo();
});
function fill_info(data){
    $("#username").val(data.username);
    $("#ali").val(data.aliAccount);
    $("#phone").val(data.phone);
    $("#realname").val(data.realname);
    $("#identi").val(data.registertime);
}
function async_userInfo(){
    var data = common.getCookieData();
    $.ajax({
        type: "POST",
        //url:"url",
        url: "/eysystem/GetUserInfo",

        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
            cid: 'data.cid',
            token:'data.token',
            data:{
                cid:'cid'
            }
        }),
        dataType: "json",
        success: function (data) {
            fill_info(data.data);
        },complete:function(){
            fill_info(person);
        },
        error: function (xhr, status, error) {
            console.info(status + xhr + error);
            //alert(error);
        }
    })
}



function setEditType(type){
    if(type){
        $("#psw").removeClass("hidden");
        $("#btn").val("提交");
        $("#ali").attr('disabled',false);
        $("#phone").attr('disabled',false);
        $("#realname").attr('disabled',false);
        isDisplay=false;
    }else{
        $("#psw").addClass("hidden");
        $("#btn").val("提交");
        $("#ali").attr('disabled',true);
        $("#phone").attr('disabled',true);
        $("#realname").attr('disabled',true);
    }
}

// 登录验证
function clickbtn(){

    if(isDisplay){
        setEditType(true);
        return;
    }

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

    //var a=  {username:storage["username"],cid:storage["cid"],token:storage["token"],data:{username:storage["username"],aliAccount:ali.val(),password:oldpsw.val(),phone:phone.val()}};
    //var a=  {username:data.username,cid:data.cid,token:data.token,data:{username:data.username,aliAccount:ali.val(),password:oldpsw.val(),phone:phone.val()}};

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
        data: JSON.stringify('a'),
        dataType: "json",success:
            function(data){
                console.info(data);
                ok(data);
            },  complete: function(XMLHttpRequest, textStatus) {
            ok();
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
    setEditType(false);
    if(str.code=='200'){
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


