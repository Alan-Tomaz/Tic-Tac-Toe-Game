const gameSquares = document.getElementsByClassName("game-dividers");
var turn = 1;
let xPos = [];
let circlePos = [];
let squareMarked = [];
let isOver = false;


function addMark(id) {
    if ((xPos[(id - 1)] == undefined) && (circlePos[(id - 1)] == undefined) && (isOver == false)) {
        if (turn === 1) {
            let gameSquare = gameSquares[(id - 1)];

            let imgSrc = '<img src="img/x.png" class="marks">';
            gameSquare.innerHTML = imgSrc;
            xPos[(id - 1)] = true;
            squareMarked[(id - 1)] = true;
            turn--;
        } else {
            let gameSquare = gameSquares[(id - 1)];
            let imgSrc = '<img src="img/circle.png" class="marks">';
            gameSquare.innerHTML = imgSrc;
            circlePos[(id - 1)] = true;
            squareMarked[(id - 1)] = true;
            turn++;
        }

        if (((xPos[0] == true) && (xPos[4] == true) && (xPos[8] == true)) || ((xPos[2] == true) && (xPos[4] == true) && (xPos[6] == true)) || ((xPos[3] == true) && (xPos[4] == true) && (xPos[5] == true)) || ((xPos[1] == true) && (xPos[4] == true) && (xPos[7] == true)) || ((xPos[0] == true) && (xPos[3] == true) && (xPos[6] == true)) || ((xPos[2] == true) && (xPos[5] == true) && (xPos[8] == true)) || ((xPos[0] == true) && (xPos[1] == true) && (xPos[2] == true)) || ((xPos[6] == true) && (xPos[7] == true) && (xPos[8] == true))) {
            window.alert("O X Ganhou");
            isOver = true;
            reset();
        }
        if (((circlePos[0] == true) && (circlePos[4] == true) && (circlePos[8] == true)) || ((circlePos[2] == true) && (circlePos[4] == true) && (circlePos[6] == true)) || ((circlePos[3] == true) && (circlePos[4] == true) && (circlePos[5] == true)) || ((circlePos[1] == true) && (circlePos[4] == true) && (circlePos[7] == true)) || ((circlePos[0] == true) && (circlePos[3] == true) && (circlePos[6] == true)) || ((circlePos[2] == true) && (circlePos[5] == true) && (circlePos[8] == true)) || ((circlePos[0] == true) && (circlePos[1] == true) && (circlePos[2] == true)) || ((circlePos[6] == true) && (circlePos[7] == true) && (circlePos[8] == true))) {
            window.alert("O Círculo Ganhou");
            isOver = true;
            reset();
        }
        if ((squareMarked[0] == true) && (squareMarked[1] == true) && (squareMarked[2] == true) && (squareMarked[3] == true) && (squareMarked[4] == true) && (squareMarked[5] == true) && (squareMarked[6] == true) && (squareMarked[7] == true) && (squareMarked[8] == true)) {
            window.alert("Empate");
            isOver = true;
            reset();
        }
    }
}

function reset() {
    let marks = document.querySelectorAll(".marks");
    for (i = 0; i <= (xPos.length - 1); i++) {
        xPos[i] = undefined;
    }
    for (i = 0; i <= (circlePos.length - 1); i++) {
        circlePos[i] = undefined;
    }
    for (i = 0; i <= (squareMarked.length - 1); i++) {
        squareMarked[i] = undefined;
    }
    turn = 1;
    isOver = false;
    for (i = 0; i <= (marks.length - 1); i++) {
        marks[i].remove();
    }
}