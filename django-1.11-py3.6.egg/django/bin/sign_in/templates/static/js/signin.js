/**
 * Created by niyaou on 2017/4/14.
 */

var storage = window.localStorage;

// 登录验证
function clickbtn(){
    console.info('fdsa');
    // 做表单输入校验
    var userId = $("#inputEmail");
    var password = $("#inputPassword");
    var msg = "";
    //alert(userId.val());
    // 获取表单中的参数
    var params = $("#loginForm").serialize();
    var a=  {username:userId.val(),data:{username:userId.val(),password:password.val()}};
    //alert(JSON.stringify(a));
    // 发送登录的异步请求
    $.ajax({
        type: "POST",
        url:"/eysystem/Login",
        contentType: "application/json; charset=utf-8",
        //data:  JSON.stringify({ 'username':userId.val(),'password':password.val()}),

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
        $("#confirm").removeClass("hidden");
        $("#confirm").show();
        $("#logindev").hide();
        storage["username"]=str.data.username;
        storage["token"]=str.token;
        storage["cid"]=str.data.cid;
        setTimeout(function(){
            location.href ="personal.html"
        },2000);
    }
}

