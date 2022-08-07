// PASO 1: crear las opciones que va a elegir la PC (array) y contadores.
const options = ['rock', 'paper', 'scissors'];
let userPoints = 0;
let pcPoints = 0;

// PASO 2: seleccionar node que va a mostrar al ganador.
let congratsMessage = document.querySelector('#congratsMessage');

// PASO 3: crear los contadores visibles en pantalla, que vayan mostrando los puntos.
let playerScore = document.querySelector('#playerScore');    // paso 5 FUNCIONA BIEN.
playerScore.innerText = `${userPoints}`;
console.log(`mi puntaje: ${playerScore.innerText}`)
let pcScore = document.querySelector('#pcScore');
pcScore.innerText = `${pcPoints}`;

// PASO 4: crear jugada de la PC.
let computerSelection;
function computerChoice () {
let chosenByPc = Math.floor(Math.random() * options.length);
  computerSelection = options[chosenByPc];
} 

// PASO 5: crear juego, condiciones y sumar puntos.
function playRound() {
  computerChoice();
  if (playerSelection == computerSelection) { 
   console.log("Well, it's a tie.")
  } else if ((playerSelection == 'scissors') && (computerSelection == 'rock')) {
    console.log("You lose!")
    pcScore.innerText = `${pcPoints +=1}`;
  } else if ((playerSelection == 'paper') && (computerSelection == 'scissors')) {
    console.log("You lose!");
    pcScore.innerText = `${pcPoints +=1}`;
  } else if ((playerSelection == 'rock') && (computerSelection == 'paper')) {
   console.log("You lose!");
   pcScore.innerText = `${pcPoints +=1}`;

  } else if ((playerSelection == 'rock') && (computerSelection == 'scissors')) {
    console.log("You win! 1 point.");
    playerScore.innerText = `${userPoints +=1}`;
  } else if ((playerSelection == 'paper') && (computerSelection == 'rock')) {
    console.log("You win! 1 point.");
    playerScore.innerText = `${userPoints +=1}`;
  } else if ((playerSelection == 'scissors') && (computerSelection == 'paper')) {
    console.log("You win! 1 point.");
    playerScore.innerText = `${userPoints +=1}`;}
  }

// PASO 6: cierre del juego.

let buttons = document.querySelector('#buttons');
function endOfGame () {
  if (userPoints == 5) {
    buttons.remove();
    congratsMessage.innerText = "YOU WON!! CONGRATS!";
  } else if (pcPoints == 5) {
    buttons.remove();
    congratsMessage.innerText = "GOOD LUCK NEXT TIME, BITCH.";
  }
}

// PASO 6: crear botones, eventos al tocar el botón y límite de clicks.
let rock = document.querySelector('#rock');
  playerSelection = rock.innerText;
rock.addEventListener('click', () => {
  playRound();
  endOfGame();
})

let scissors = document.querySelector('#scissors');
  playerSelection = scissors.innerText;
scissors.addEventListener('click', () => {
  playRound();
  endOfGame();
})

let paper = document.querySelector('#paper');
  playerSelection = paper.innerText;
paper.addEventListener('click', () => {
  playRound();
  endOfGame();
})

/*  RESPUESTA DE OTRA ALUMNA:

const optionBtn = document.querySelectorAll('div.optionBtn button');
const roundResults = document.querySelector('#roundResults');
const playerPoints = document.querySelector('#playerScore');
const computerPoints = document.querySelector('#computerScore');
const resetBtn = document.querySelector('#reset');

//refresh page for new game
resetBtn.addEventListener('click',() => location.reload());
  
optionBtn.forEach(button => { button.addEventListener('click', getPlayerChoice) });

let computerChoices = [{choice: 'Rock', value: 0}, {choice: 'Paper', value: 1}, {choice: 'Scissors', value: 2}];
let playerScore = 0;
let compScore = 0;
let playerChoice;

function computerPlay () {
  let result = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  return result;
}

function playRound (playerSelection, computerSelection) {
  let roundWinCombo = `${playerSelection}-${computerSelection.value}`;
  let playerWinCombo = ['1-0', '0-2', '2-1'];

    if (Number(playerSelection) === computerSelection.value) {
      playerPoints.textContent = ++playerScore
      computerPoints.textContent = ++compScore
      roundResults.textContent = "Tie!"
    }else if (playerWinCombo.includes(roundWinCombo)) {
        playerPoints.textContent = ++playerScore
        roundResults.textContent = `You win! ${playerChoice} beats ${computerSelection.choice}`;
    }else {
        computerPoints.textContent = ++compScore
        roundResults.textContent = `You lose! ${computerSelection.choice} beats ${playerChoice}`;
    }
 checkWinner();
}

const winnerResults ={
  computer: ["You Lost the game to a computer!", 'red'],
  player: ["You Win the game!!!!", 'green'],
  tie: ["The game is a Tie!", 'blue']
}

function checkWinner() {
  if (compScore === 5 || playerScore === 5) {
    if (compScore === playerScore){
      updateWinner('tie')
    }else{
      let win = `${(compScore > playerScore) ? 'computer' : 'player'}`;
      updateWinner(win);
    }
  }
}

function updateWinner(winner){
  roundResults.textContent = winnerResults[winner][0];
  roundResults.style.color = winnerResults[winner][1];

  optionBtn.forEach(button => {
    button.removeEventListener('click', getPlayerChoice);
  });
}

function getPlayerChoice(e) {
  let playerSelection= (e.target.id);
  playerChoice = e.target.textContent;
  playRound(playerSelection, computerPlay());
}*/