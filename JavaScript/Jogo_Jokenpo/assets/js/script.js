const scorePlayer = document.querySelector(".player-score");
const scoreComputer = document.querySelector(".machine-score");
const result = document.querySelector(".resultado");
let playerScore = 0;
let machineScore = 0;

const playHuman = (humanChoise) => {
  playGame(humanChoise, playComputer());
  
};

const playComputer = () => {
  const choices = ["rock", "paper", "scissors"];

  return choices[Math.floor(Math.random() * choices.length)];
};

const playGame = (human, machine) => {
  if (human === machine) {
    result.innerHTML = "Empate!";
    console.log("Empate!");
  } else if (
    (human === "rock" && machine === "scissors") ||
    (human === "paper" && machine === "rock") ||
    (human === "scissors" && machine === "paper")
  ) {
    result.innerHTML = "Você ganhou!";
    let resultadoPlayer = playerScore++;
    scorePlayer.innerHTML = resultadoPlayer;
  } else {
    result.innerHTML = "Você perdeu!";
    let resultadoMachine = machineScore++;
    scoreComputer.innerHTML = resultadoMachine;
  }
};

const resetGame = () => {
  playerScore = 0;
  machineScore = 0;
  scorePlayer.innerHTML = playerScore;
  scoreComputer.innerHTML = machineScore;
  result.innerHTML = "Jogo reiniciado!";
}
