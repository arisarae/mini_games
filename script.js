let boxes = document.querySelectorAll(".box");
let playerO = true; // Player O starts
let message = document.querySelector(".msgContainer")
let board = document.querySelector(".TicTacToe");
let newGame = document.querySelector(".newGame");
let startGame = document.querySelector(".startGame");
let inGame = document.querySelector(".inGame");
let gameOver = document.querySelector(".gameover");
let winner = document.querySelector("#winner");

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const addPin = (box) => {
  box.innerText = playerO ? "O" : "X";
  box.style.color = playerO ? "#0EB7D0" : "#F5719D";
  box.disabled = true;
  checkWinner();
  playerO = !playerO

};

const showWinner = (player) => {
  winner.innerText = `Congratulation, Player ${player}!`;
  inGame.classList.add("hide");
  gameOver.classList.remove("hide");
  for (let box of boxes) {
    box.disabled = true;
  }
};

const checkWinner = () => {
  let getWinner = false;
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (
      pos1Val !== "" &&
      pos2Val !== "" &&
      pos3Val !== "" &&
      pos1Val === pos2Val &&
      pos2Val === pos3Val
    ) {
      showWinner(pos1Val);
      getWinner = true;
      return;
    }
  }

  if (!getWinner) {
    const allBoxes = [...boxes].every((box) => box.innerText !== "");
    if (allBoxes) {
      inGame.classList.add("hide");
      gameOver.classList.remove("hide");
      winner.innerText = "Match Drawn";
    }
  }
};

const resetGame = () => {
  playerO = true;
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
  message.style.width = "330px"
  board.classList.remove("hide")
  startGame.classList.add("hide");
  inGame.classList.remove("hide")
  gameOver.classList.add("hide");
};
