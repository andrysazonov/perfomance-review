

function getResultOfGame(gameSituation){
    lines = []
    diagonal1 = ""
    diagonal2 = ""
    for (i = 0; i<3; i++){
        row = ""
        column = ""
        diagonal1+=gameSituation[i][i]
        diagonal2+=gameSituation[i][2-i]
        for(j = 0; j<3; j++){
            row+=gameSituation[i][j]
            column+=gameSituation[j][i]
        }
        lines.push(row)
        lines.push(column)
    }
    lines.push(diagonal1)
    lines.push(diagonal2)
    winner = ""
    lines.forEach(line=> 
        {
            if(line=="XXX"){winner = "X"}
            else if(line == "000"){winner = "0"}
        })
    if(winner == ""){
        console.log("There is no winner")
    }
    else{
        console.log(`The winner is ${winner}`)
    }
}

getResultOfGame([["X","0","O"],["X","O","X"],["X","X","O"]])