$.fn.extend({
    vip2: function () {
        $(this).html(
            '<button id="login">登录</button>' +
            '<div class="login-content">' +
            '<div class="mosk"></div>' +
            '<div class="login-bar">' +
            '<div class="login-header">' +
            '<span>登录</span>' +
            '<span id="close">X</span>' +
            '</div>' +
            '<div class="content">' +
            '登录' +
            '</div>' +
            '</div>' +
            '</div>'
        )
        $("#login").click(function () {
            $(".login-content").show();
        })
        $("#close").click(function () {
            $(".login-content").hide();
        })
    }
})