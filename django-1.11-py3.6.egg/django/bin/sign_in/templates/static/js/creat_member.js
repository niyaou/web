/**
 * Created by niyaou on 2017/4/14.
 */

var common = {
    setCookie: null, getCookie: null, getCookieData: null
};
// 登录验证
function clickbtn() {
    $("#alert_password").alert('close');
    $("#alert_error").alert('close');
    // 做表单输入校验
    var pswfirst = $("#pswfirst");
    var pswconfirm = $("#pswconfirm");
    var ali = $("#ali");
    var phone = $("#phone");
    var realname = $("#realname");
    var identify = $("#identi");
    var username = $("#name");
    var msg = "";
    // 获取表单中的参数
    var params = $("#loginForm").serialize();
    if (!username.val()) {
        creat_dialog_empty(username.attr('id'));
        return
    }

    if (pswfirst.val() != pswconfirm.val()) {
        creat_dialog(false);
        return;
    } else if (!pswfirst.val()) {
        creat_dialog(true);
        return;
    }
    ;
    if (!phone.val()) {
        creat_dialog_empty(phone.attr('id'));
        return
    }
    if (!realname.val()) {
        creat_dialog_empty(realname.attr('id'));
        return
    }
    if (!identify.val()) {
        creat_dialog_empty(identify.attr('id'));
        return
    }
    var data = common.getCookieData();

    var a = {
        cid: "data.cid",
        token: "data.token",
        data: {
            "aliAccount": ali.val(), "password": pswfirst.val(), "username": username.val(),
            "identityid": identify.val(), realname: realname.val(),  phone: phone.val()
        }

    };
    alert(JSON.stringify(a));

    $.ajax({
        type: "POST",
        url: "/eysystem/Register",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify('a'),
        dataType: "json", success: function (data) {
            console.info(data);
            ok(data);
        }, complete: function (XMLHttpRequest, textStatus) {
            console.info(textStatus)
        }
    })
}


function ok(str) {
    if (str.code == '200') {
        alert('dome')
    }
}


var LOGINDATA = "logindata";

common.setCookie = function (username, token, cid, expiresNum) {
    var cookieValue = {
        username: username, token: token, cid: cid
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


common.getCookieData = function () {
    return ($.cookie('logindata'));
};

function creat_dialog_empty(id) {
    var warm_error = $('<div class=" alert alert-warning col-xs-12 text-center" id="alert_error">        <a href="#" class="close"    data-dismiss="alert">        &times;</a>    此项不能为空。</div>')
    var dom = "#" + id + "_";
    $(dom).append(warm_error);

}


function creat_dialog(none) {
    var warm_error = $('<div class=" alert alert-warning col-xs-12 text-center" id="alert_password">        <a href="#" class="close"    data-dismiss="alert">        &times;</a>    两次输入的密码不一致。</div>')
    var warm_none = $('<div class=" alert alert-warning col-xs-12 text-center" id="alert_password">        <a href="#" class="close"    data-dismiss="alert">        &times;</a>    密码不能为空。</div>')
    if (none) {
        $("#error").append(warm_none);
    } else {
        $("#error").append(warm_error);
    }

}




