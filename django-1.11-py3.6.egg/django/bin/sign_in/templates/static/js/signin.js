/**
 * Created by niyaou on 2017/4/14.
 */


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
        // 发送登录的异步请求
        $.post(
            "/login",
            { 'name':userId.val(),'psw':password.val(),},
                function(data){
                console.info(data);
                ok(data);
        });
    }




function ok(str){
    if(str=='ok'){
        $("#confirm").removeClass("hidden");
        $("#confirm").show();
        $("#logindev").hide();

    }
}

