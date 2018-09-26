class WebApiClient {

    constructor(mock) {
        this.mock = mock;
    }

    fireGet() {
        //if (!this.mock) {
        //    let promise = $.ajax({
        //        url: 'http://jsonplaceholder.typicode.com/todos'
        //    })
        //    return promise;
        //}
        let p = new Promise(function (
            resolve, //this will be used to fire success result
            reject) // this will be used to fire failure result
        {
            let _todos = [new Todo("Pubg", "Dor", "Niv", "Dor"),
            new Todo("CS", "Niv", "Eden", "Niv")]
            setTimeout(() => { resolve(_todos) }, 2000);
            //resolve(_todos)
        });
        return p
    }
}

function Todo(gameName, player1, player2, whoWin) {
    this.gameName = gameName
    this.player1 = player1
    this.player2 = player2
    this.whoWin = whoWin
    this.myToString = function () {
        return "gameName: " + this.gameName + ", " +
        "player1: " + this.player1 + ", " +
        "player2: " + this.player2 + ", " +
            "whoWin: " + this.whoWin
    }
}

let winApi = new WindowAPI();

function WindowAPI() {
    this.todos = {}

    // let self = this // self pattern
    this.getTodosJquery = function () {

        let myWebApiClient = new WebApiClient(true) // if WebApiClient Get True Is Mock and if func get False use by $.ajax 

        //$.ajax({
        //url: 'http://jsonplaceholder.typicode.com/todos'
        //}).then(
        // after return from server do this:

        let promiseResult = myWebApiClient.fireGet();

        promiseResult.then(
            (data) => // resolve = success
            {
                //self.todos = data
                this.todos = data
                console.log(data)
            },
            (err) => // reject = failure
            {
                console.error(err)
            }
        )

    }
    this.printTodos = function () {
        console.log(this.todos)
        for (var i = 0; i < this.todos.length; i++) {
            let todo = new Todo(this.todos[i].gameName,
                this.todos[i].player1, this.todos[i].player2,
                this.todos[i].whoWin)
            $('#divResult').append(todo.myToString())
            $('#divResult').append("<br>")

        }
    }
}
