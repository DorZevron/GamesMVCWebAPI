const Button1 = document.getElementById('btnRx')

const url = 'http://localhost:60594/api/Games';

    let game = {
        next: (value) => {
            console.log(value)
            const list = value.response
            for (var i = 0; i < list.length; i++) {
                let item = list[i];
                for (let field in item) {
                    document.getElementById("ResultRx").innerHTML += field + ": " + item[field] + ", "
                }
                document.getElementById("ResultRx").innerHTML += "<br>"
            }
        },
        error: (err) => console.error('ERROR at ${err}'),
        complete: () => console.log('COMPLETED AT ${}')
    }

function getGames() {
    Rx.Observable.ajax(url).subscribe(game);
}
