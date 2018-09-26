function TestingNode() {
    let Choose = $("input[name=testNode]:checked").val()

    if (!Choose == null) {
        switch (Choose) {
            case "empty":
                $.ajax({
                    url: 'http://localhost:3018/api/empty'
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
                    alert("You Have Error in func empty ")
                    );
                break;

            case "large":
                $.ajax({
                    url: 'http://localhost:3018/api/Large'
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
                    alert("You Have Error in func Large")
                    )
                break;

            case "error":
                $.ajax({
                    url: 'http://localhost:3018/api/Error'
                }).done(
                    //after return from server do this :
                    function (data) {
                        console.log(data)
                        $('#divResult').append(data);

                    }).fail(
                    alert("You Have Error in func Error ")
                    );
                break;
        }
    }
    else {
        alert("Please select one of the testing options")
    }





}