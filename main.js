$(document).ready(function () {
    getAmount();
    drawStats();
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

function drawStats() {
    var canvas = $("#stats-animation")[0];
    var c = canvas.getContext("2d");

    c.beginPath();
    c.strokeStyle = "black";
    c.lineWidth = 2;
    c.moveTo(100, 10);
    c.lineTo(100, 200);
    c.moveTo(200, 10);
    c.lineTo(200, 200);
    c.moveTo(300, 10);
    c.lineTo(300, 200);
    c.stroke();

    // Trash
    drawMaterial(c, 0, 40, 215, 40, "red");
    setTimeout(() => {
        // Glass
        drawMaterial(c, 0, 80, 180, 80, "darkseagreen");
    }, 500);
    setTimeout(() => {
        // Paper
        drawMaterial(c, 0, 120, 60, 120, "lightskyblue");
    }, 1000);
    setTimeout(() => {
        // Alu
        drawMaterial(c, 0, 160, 130, 160, "lightgrey");
    }, 1500);
}

function drawMaterial(canvas, startX, startY, endX, endY, color) {

    var amount = 0;
    var x = 0;
    setInterval(function () {
        if (x >= endX) {

        } else {
            amount += 0.015;
            canvas.beginPath()
            canvas.strokeStyle = color;
            canvas.lineWidth = 10;
            canvas.moveTo(startX, startY);
            canvas.lineTo(startX + (endX - startX) * amount, startY + (endY - startY) * amount);
            canvas.stroke();
            x = startX + (endX - startX) * amount;
        }

    }, 30);
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