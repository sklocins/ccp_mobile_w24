let XorO = "X"
const xlist = []
const olist = []
function playerMoved(num) {
    const square = document.getElementsByClassName('square')[num];
    if (square.innerText == "") {
        square.innerText = XorO;
        if(XorO === "X"){
            console.log("XorO should turn to O")
            xlist.push(num)
            XorO = "O"
        }
        else{
            console.log("XorO should turn to X")
            olist.push(num)
            XorO = "X"
        }
        if (checkGame2() == true){
            win();
        }
        checkGame()
    }
}

function checkGame() {
    const wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ]
    for (let win of wins) {
        if (win.every(element => xlist.includes(element))){
            console.log('X WINS')
            const squareWin = document.getElementsByClassName('square')[4];
            squareWin.innerText = "X WINS"

        }
        if (win.every(element => olist.includes(element))){
            console.log('O WINS')
            const squareWin = document.getElementsByClassName('square')[4];
            squareWin.innerText = "O WINS"
        }
        else if (xlist.length + olist.length == 9){
            console.log('TIE')
            const squareWin = document.getElementsByClassName('square')[4];
            squareWin.innerText = "TIE"
        }
        // check for draw
    }

}

function checkGame2() {
    const wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ]
    for (let win of wins) {
        if (win.every(element => xlist.includes(element))){
            return true;
        }
    }
        //     console.log('X WINS')
        //     const squareWin = document.getElementsByClassName('square')[4];
        //     squareWin.innerText = "X WINS"

        // }
        // if (win.every(element => olist.includes(element))){
        //     console.log('O WINS')
        //     const squareWin = document.getElementsByClassName('square')[4];
        //     squareWin.innerText = "O WINS"
        // }
        // else if (xlist.length + olist.length == 9){
        //     console.log('TIE')
        //     const squareWin = document.getElementsByClassName('square')[4];
        //     squareWin.innerText = "TIE"
        // }
        // check for draw
    // }
}

function win() {
    console.log("WORKINGGGGG!!!!!!")
}