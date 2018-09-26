function Delete() {
    var req = new XMLHttpRequest();
    var id_delete = document.getElementById("inID").value;

    req.open('DELETE', 'http://localhost:60594/api/Games/' + id_delete)

    req.onload = function () {
        alert("Success, this ID: " + id_delete + "Delete!")
    }

    req.onerror = function () {
        alert("Error , func DELETE is Not working")
    }

    req.send();
}

function DeleteJquery() {
    var id_delete = $('#inID').val();
    $.ajax({
        method: 'delete',
        url: 'http://localhost:60594/api/Games/' + id_delete
    }).done(
        function (data) {
            console.log(data)
            alert("Success, this ID: " + id_delete + "Delete!")
        }).fail(function (data) {
            console.log(data)
            alert("Error, func DeleteJquery is not working");
        })
}