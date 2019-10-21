$(document).ready(function () {
    document.cookie = "LastVisit=" + Date.now().toString();

    $(".nav-link").click(function () {
        $(".nav-link").removeClass("active");
        $(this).addClass("active");
    });
});

function openHatch(material) {
    $("#disposal-feedback").text("Die Abfallluke wird geöffnet für die Entsorgung von " + material);
    setTimeout(() => {
        $("#disposal-feedback").text("");
    }, 6000);
}

function unlock() {
    $("#login-mask").hide();
}
