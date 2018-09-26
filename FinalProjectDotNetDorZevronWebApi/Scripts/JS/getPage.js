function GetAllData() {
    let req = new XMLHttpRequest();
    let url_Web_api = 'http://localhost:60594/api/Games'
    req.open('GET', url_Web_api)
    document.getElementById("divResult").innerHTML = "";

    req.onload = function () {
        //document.getElementById("divResult").innerHTML = req.response + '<br>'
        let list = JSON.parse(req.response)
        console.log(req.response)
        for (let i = 0; i < list.length; i++) {
            let item = list[i];
            for (let field in item) {
                document.getElementById("divResult").innerHTML += field + ": " + item[field] + ", "
            }
            document.getElementById("divResult").innerHTML += "<br>"
        }
    }
    req.onerror = function () {
        alert('You Have Error In Func Get All Data');
    }
    req.send()
}

function GetById() {
    let req = new XMLHttpRequest();
    let id = document.getElementById("inID").value;
    let url_Web_api = 'http://localhost:60594/api/Games/' + id
    req.open('GET', url_Web_api)
    //document.getElementById("divResult").innerHTML = "";

    req.onload = function () {
        //document.getElementById("divResult").innerHTML = req.response + '<br>'
        let item = JSON.parse(req.response)
        console.log(req.response)

        //for (let field in item) {
        //    document.getElementById("divResult").innerHTML += field + ": " + item[field] + ", "
        
        //}

        document.getElementById("inGameName").value = item.Game_Name;
        document.getElementById("inPlayer1").value = item.Player1;
        document.getElementById("inPlayer2").value = item.Player2;
        document.getElementById("inWhoWon").value = item.Who_won;

        //document.getElementById("divResult").innerHTML += "<br>"

    }
    req.onerror = function () {
        alert('You Have Error In Func Get By Id');
    }
    req.send()
}
// this function not working 
function GetBySearch() {
    let req = new XMLHttpRequest();
    let id = document.getElementById("inID").value;
    let GameName = document.getElementById("inGameName").value;
    let Player1 = document.getElementById("inPlayer1").value;
    let Player2 = document.getElementById("inPlayer2").value;
    let WhoWon = document.getElementById("inWhoWon").value;
    let url_Web_api = 'http://localhost:60594/api/Games//search?gameID=' + id + "&gameName=" + GameName + "&player1=" + Player1 + "&player2=" + Player2 + "&whoWon=" + WhoWon
    req.open('GET', url_Web_api)
   
    req.onload = function () {
        
        let item = JSON.parse(req.response)
        console.log(req.response)
        
        document.getElementById("inGameName").value = item.Game_Name;
        document.getElementById("inPlayer1").value = item.Player1;
        document.getElementById("inPlayer2").value = item.Player2;
        document.getElementById("inWhoWon").value = item.Who_won;

    }
    req.onerror = function () {
        alert('You Have Error In Func Get By Search');
    }
    req.send()
}

function GetAllDataJquery() {
    $('#divResult').empty()
    $.ajax({
        url: 'http://localhost:60594/api/Games'
    }).done(
        //after return from server do this :
        function (data) {
            console.log(data)
            for (let i = 0; i < data.length; i++) {
                let item = data[i];
                for (let field in item) {
                    $('#divResult').append(" " + field + ": " + item[field] + ", ")
                }
                $('#divResult').append('<br>')
            }
        }).fail(
        alert("You Have Error In Func Get All Data jquery")
        )
}

function GetByIdJquery() {
    let id = $('#inID').val();
    $.ajax({
        url: 'http://localhost:60594/api/Games/' + id
    }).done(
        //after return from server do this :
        function (data) {
            console.log(data)
                       
            $('#inGameName').val(data.Game_Name);
            $('#inPlayer1').val(data.Player1);
            $('#inPlayer2').val(data.Player2);
            $('#inWhoWon').val(data.Who_won);

        }).fail(
        alert("You Have Error In Func Get By Id jquery")
        )
}

function GetBySearchJquery() {

}