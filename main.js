$(document).ready(function () {
    document.cookie = "GoeselCookie=" + Date.now();

    $(".nav-link").click(function () {
        $(".nav-link").removeClass("active");
        $(this).addClass("active");
    })


});
