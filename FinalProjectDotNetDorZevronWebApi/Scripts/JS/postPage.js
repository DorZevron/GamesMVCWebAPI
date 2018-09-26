function postGame() {
    let req = new XMLHttpRequest();
    let url = 'http://localhost:60594/api/Games'
    req.open('POST', url)
    req.setRequestHeader("Content-Type", "application/json")

    req.onload = function () {
        alert('Created!')
    }
    req.onerror = function () {
        alert('You have error Function post Game')
    }
    let item = {
        Game_Name: document.getElementById('inGameName').value,
        Player1: document.getElementById('inPlayer1').value,
        Player2: document.getElementById('inPlayer2').value,
        Who_won: document.getElementById('inWhoWon').value
    }
    let json = JSON.stringify(item);
    req.send(json);
}

function postGameJquery() {
    let url = 'http://localhost:60594/api/Games'

    let item = {
        Game_Name: $('#inGameName').val(),
        Player1: $('#inPlayer1').val(),
        Player2: $('#inPlayer2').val(),
        Who_won: $('#inWhoWon').val()
    }
    console.log(item)

    let ajaxPostDataConfig = {
        type: "POST",
        url: url,
        contentType: "application/json",
        dataTape: "json",
        data: JSON.stringify(item) // request http body
    }

    $.ajax(ajaxPostDataConfig).done(
        function (data) {
            console.log(data)
            alert("Success!");
        }
    ).fail(
        function (err) {
            console.error(err)
            alert("you have error in function Post Jquery!");
        })
}