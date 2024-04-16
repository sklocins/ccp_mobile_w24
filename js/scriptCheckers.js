let XorO = "X"
const xlist = []
const olist = []
let playermode = 2
const wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ]
const bestSpots = [4, 0, 2, 6, 8, 1, 3, 5, 7]

function toggleplayer(n){
    const onePlayerButton = document.getElementById('one-player-mode');
    const twoPlayerButton = document.getElementById('two-player-mode');
    
    if(n === 1){
        onePlayerButton.classList.add("selected-player");
        twoPlayerButton.classList.remove("selected-player");
        playermode = 1;
        console.log("ONE PLAYER mode selected")
    } else if (n === 2) {
        onePlayerButton.classList.remove("selected-player");
        twoPlayerButton.classList.add("selected-player");
        playermode = 2;
        console.log("TWO PLAYERS mode selected")
    }
}
function playerMoved(num) {
    const square = document.getElementsByClassName('square')[num];
    if (square.innerText == "") {
        square.innerText = XorO;
        console.log(XorO + " took square " + num)
        if(XorO === "X"){
            xlist.push(num)
            XorO = "O"
        }
        else{
            olist.push(num)
            XorO = "X"
        }
        // if (checkGame() == true){
        //     win();
        // }
        checkGame()
        if(playermode == 1 && XorO == "O"){
            computerMove();
        }
    }
}

function checkGame() {
    for (let win of wins) {
        if (win.every(element => xlist.includes(element))){
            console.log('X WINS')
            document.getElementsByClassName('message')[0].innerText = "X WINS!!!"

        }
        if (win.every(element => olist.includes(element))){
            console.log('O WINS')
            document.getElementsByClassName('message')[0].innerText = "O WINS!!!"
        }
        else if (xlist.length + olist.length == 9){
            console.log('TIE')
            const squareWin = document.getElementsByClassName('square')[4];
            document.getElementsByClassName('message')[0].innerText  = "TIE"
        }
    }

}

function computerMove() {
    var posswin = possiblewin(olist);
    var posswin2 = possiblewin(xlist)
    console.log(posswin)
    if(posswin>-1){
        playerMoved(posswin)
    }
    else if (posswin2>-1){
        playerMoved(posswin2)
    }
    else{
        playerMoved(bestMove())
    }

}

function possiblewin(mylist){
    for (let win of wins) {
        if (mylist.includes(win[0]) && mylist.includes(win[1]) && !xlist.includes(win[2])&& ! olist.includes(win[2])){
        console.log(win[2])
        console.log("Block is probably working.")
            return win[2]
        }
        else if (mylist.includes(win[0]) && mylist.includes(win[2]) && !xlist.includes(win[1])&& ! olist.includes(win[1])){
            console.log(win[1])
            return win[1]
        }
        else if (mylist.includes(win[1]) && mylist.includes(win[2]) && !xlist.includes(win[0])&& ! olist.includes(win[0])){
            console.log(win[0])
            return win[0]
        }
    }

}

function goodMove(mylist){
    for (let win of wins) {
        if (mylist.includes(win[0]) && !xlist.includes(win[1]) && !olist.includes(win[1]) && !xlist.includes(win[2])&& ! olist.includes(win[2])){
        console.log(win[2])
        console.log("Block is probably working.")
            return win[2]
        }
        else if (!xlist.includes(win[0]) && !olist.includes(win[0]) && mylist.includes(win[1]) &&  !xlist.includes(win[2])&& ! olist.includes(win[2])){
            console.log(win[1])
            return win[0]
        }
        else if (!xlist.includes(win[0]) && !olist.includes(win[0]) &&  !xlist.includes(win[1])&& ! olist.includes(win[1]) && mylist.includes(win[2])){
            console.log(win[0])
            return win[0]
        }
    }

}

function bestMove(){
    for (let spot of bestSpots) {
        if(!xlist.includes(spot) && !olist.includes(spot)){
            return spot
        }
    }
}