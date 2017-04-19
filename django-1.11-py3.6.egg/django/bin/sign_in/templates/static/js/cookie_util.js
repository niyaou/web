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

common.getCookie = function() {
    return $.cookie(LOGINDATA);
}

common.getCookieData = function() {
    return  JSON.parse($.cookie('LOGINDATA'));
}

common.delCookie = function(cookieName) {
    $.cookie(cookieName, '', {
        'path': '/',
        'expires': -1
    });
}