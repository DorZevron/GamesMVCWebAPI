function putGame() {
    let req = new XMLHttpRequest();
    let id = document.getElementById('inID').value;
    let url = 'http://localhost:60594/api/Games/' + id
    req.open('PUT', url)
    req.setRequestHeader("Content-Type", "application/json")

    req.onload = function () {
        alert('Updated!');
    }
    req.onerror = function () {
        alert('you have error in Function Put Game');
    }
    let data = {};
    data.Game_Name = document.getElementById('inGameName').value;
    data.Player1 = document.getElementById('inPlayer1').value;
    data.Player2 = document.getElementById('inPlayer2').value;
    data.Who_won = document.getElementById('inWhoWon').value;

    let json = JSON.stringify(data);

    req.send(json);
}

function putGameJquery() {
    let id = $("#inID").val();
    let url = 'http://localhost:60594/api/Games/' + id

    let item = {
        Game_Name: $("#inGameName").val(),
        Player1: $("#inPlayer1").val(),
        Player2: $("#inPlayer2").val(),
        Who_won: $("#inWhoWon").val(),
    }
    console.log(item)

    let ajaxPutDataConfig = {
        type: 'PUT',
        url: url,
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify(item)
    }
    $.ajax(ajaxPutDataConfig).done(
        function (data) {
            console.log(data)
            alert("Success!")
        }).fail(
        function (err) {
            console.error(err)
            alert("you have error in Function Put Game Jquery")
        })
}