

function positions(firstPlace, secondPlace, lastPlace){

    let array = [firstPlace, secondPlace, lastPlace]
        if (firstPlace == "Daniel") {
            console.log(
                "1ª - Colocado " + firstPlace +
                " 2ª - Colocado " + secondPlace +
                " 3ª - Colocado " + lastPlace )
        }

        if (secondPlace == "Daniel") {
            console.log(
                "1ª - Colocado " + secondPlace +
                " 2ª - Colocado " + firstPlace +
                " 3ª - Colocado " + lastPlace)
        }

        if (lastPlace == "Daniel") {
            console.log(
                "1ª - Colocado " + firstPlace +
                " 2ª - Colocado " + lastPlace +
                " 3ª - Colocado " + secondPlace)
        }


}
positions("Rafael", "Manoel", "Daniel")



