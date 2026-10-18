document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board > div");
    const statusDiv = document.getElementById("status");

    const newGameButton = document.querySelector(".btn");
  
    let currentPlayer = "X"; 

    function checkWinner() {
        
        const winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], 
            [0, 3, 6], [1, 4, 7], [2, 5, 8], 
            [0, 4, 8], [2, 4, 6]             
        ];

        for (let i = 0; i < winningCombos.length; i++) {
            const [a, b, c] = winningCombos[i];
            
            if (squares[a].textContent !== "" && 
                squares[a].textContent === squares[b].textContent && 
                squares[a].textContent === squares[c].textContent) {

                const winner = squares[a].textContent;
                statusDiv.textContent = "Congratulations! " + winner + " is the Winner!";
                statusDiv.classList.add("you-won");
                return; // Stop checking, we already found a winner
            }
        }
    }

    squares.forEach(function (square) {
        square.classList.add("square");


        square.addEventListener("click", function () {
            if (square.textContent !== "") {
                return; 
            }
            
            square.textContent = currentPlayer;  
            square.classList.add(currentPlayer);
            
            checkWinner();


            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }
        });

        square.addEventListener("mouseenter", function () {
            square.classList.add("hover");
        });

        square.addEventListener("mouseleave", function () {
            square.classList.remove("hover");
        });

    });

    newGameButton.addEventListener("click", function () {
        squares.forEach(function (square) {
            square.textContent = "";
            square.classList.remove("X", "O");
        });

        currentPlayer = "X";
        statusDiv.textContent = "Move your mouse over a square and click to play an X or an O.";
        statusDiv.classList.remove("you-won");
    });
});