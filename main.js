$(document).ready(function () {
    getAmount();
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
function getAmount() {
    let data = {
        'jsonrpc': '2.0',
        'method': 'generateIntegers',
        'params': {
            'apiKey': RANDOM_API_KEY,
            'n': 5,
            'min': 0,
            'max': 7,
            'replacement': true,
        },
        'id': 4321
    }

    $.ajax({
        url: 'https://api.random.org/json-rpc/1/invoke',
        type: "POST",
        data: JSON.stringify(data), // stringify data object
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            $('#rubish-amount').append(JSON.stringify(response.result.random.data[0] + "kg"));
            $('#paper-amount').append(JSON.stringify(response.result.random.data[1] + "kg"));
            $('#glass-amount').append(JSON.stringify(response.result.random.data[2] + "kg"));
            $('#alu-amount').append(JSON.stringify(response.result.random.data[3] + "kg"));
            console.log(response.result.random.data);
        }
    });
}