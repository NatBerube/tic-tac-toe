// alert("Base fonctionnelle")
window.addEventListener("DOMContentLoaded", () => {
    const tiles = document.querySelectorAll(".tile");
    const playerDisplay = document.querySelector(".display-player");
    const resetButton = document.querySelector("#reset");
    const resetScoreButton = document.getElementById('reset_score')
    const announcer = document.querySelector(".announcer");
    let playerOneScore = 0
    let playerTwoScore = 0
    const playerOneScoreEl = document.getElementById('player_one_score')
    const playerTwoScoreEl = document.getElementById('player_two_score')

    let board = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = "X";
    let isGameActive = true;

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    resetButton.addEventListener('click', resetBoard)
    resetScoreButton.addEventListener('click', resetScoreBoard)

    function resetBoard() {
        for (let i = 0; i < tiles.length; i++) {
            tiles[i].innerHTML = ''
        }
        board = ["", "", "", "", "", "", "", "", ""]
        resetButton.innerHTML = 'Recommencer'
        currentPlayer = 'X'
        updatePlayerDisplay()
        announcer.innerHTML = ''
        isGameActive = true
    }

    function resetScoreBoard() {
        resetBoard()
        playerOneScore = 0
        playerOneScoreEl.innerHTML = '0'
        playerTwoScore = 0
        playerTwoScoreEl.innerHTML = '0'
    }

    (function eventListeners() {
        for (let i = 0; i < board.length; i++) {
            tiles[i].addEventListener("click", function () {
                if (isGameActive) {
                    if (tiles[i].innerHTML !== '') {
                        return alert('Tuile est déjà occupée par un joueur.!')
                    }
                    addPlayerSelectionToBoard(i);
                }
            });
        }
    })();



    function addPlayerSelectionToBoard(tileIndex) {
        tiles[tileIndex].innerHTML = currentPlayer;
        board[tileIndex] = currentPlayer;
        console.log(checkForWin());
        if (checkForWin()) {
            announcer.innerHTML = `Joueur ${currentPlayer} gagne!`
            updateScoreBoard()
            resetButton.innerHTML = 'Commencer une nouvelle partie'
        } else {
            changePlayer();
        }
    }

    function updateScoreBoard() {
        if (currentPlayer === 'X') {
            playerOneScore++
            playerOneScoreEl.innerHTML = playerOneScore.toString()
        } else {
            playerTwoScore++
            playerTwoScoreEl.innerHTML = playerTwoScore.toString()
        }
    }

    function changePlayer() {
        if (currentPlayer === "X") {
            currentPlayer = "O";
        } else {
            currentPlayer = "X";
        }
        updatePlayerDisplay()
    }

    function updatePlayerDisplay() {
        playerDisplay.innerHTML = currentPlayer

    }

    function checkForWin() {
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            const a = board[winCondition[0]];
            const b = board[winCondition[1]];
            const c = board[winCondition[2]];
            if (a === "" || b === "" || c === "") {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                isGameActive = false
                break;
            }
        }
        if (roundWon) {
            return true;
        }
        if (!board.includes("")) {
            isGameActive = false
            return roundTie();
        }
        return false;
    }

    function roundTie() {
        console.log("Tie");
    }

    // start game
    // check which player is playing
    //    start turn
    //      player selects tile
    //      update board with player selection
    //      check for win
    //    if no win
    //      change player
    //      start next round
    //    else
    //      update scoreboard
    //      announce round winner
    //      check gameover
    //          if one player has score of 3
    //              end game
    //              announce game winner
    //          else
    //              start next round
});
