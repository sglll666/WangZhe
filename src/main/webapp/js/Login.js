$(function () {
    $(".login-title p:last-child").click(function () {
        $(".login-admin-title p:last-child").css("background","aqua");
        $(".login-admin-title p:first-child").css("background","transparent");
        $(".login-admin").css("display","block");
        $(".login").css("display","none");
    })

    $(".login-admin-title p:first-child").click(function () {
        $(".login-title:first-child").css("background","aqua");
        $(".login-title:last-child").css("background","transparent");
        $(".login-admin").css("display","none");
        $(".login").css("display","block");
    })
})