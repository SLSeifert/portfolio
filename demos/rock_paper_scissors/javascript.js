function getComputerChoice() {
    randomNum = Math.floor(Math.random()*3);
    switch (randomNum) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

/* function getHumanChoice() {
    return prompt("rock, paper, or scissors?").toLowerCase();
} */

let humanScore = 0;
let computerScore = 0;
const score = document.querySelector('#score');


function getScore() {
    score.textContent = `Your score: ${humanScore}, Computers score: ${computerScore}`;
    if (humanScore === 5 || computerScore ===5) {
    displayWinner();
   }
}

/* function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    if ((humanChoice === 'paper' && computerChoice === 'rock')
        || (humanChoice === 'scissors' && computerChoice === 'paper')
        || (humanChoice === 'rock' && computerChoice === 'scissors')) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        } else if (humanChoice === computerChoice) {
            console.log('Tie!')
        } else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        }

        getScore();

    
} */

document.querySelector('#rock').addEventListener('click', ()=>playRound('rock'));
document.querySelector('#paper').addEventListener('click', ()=>playRound('paper'));
document.querySelector('#scissors').addEventListener('click', ()=>playRound('scissors'));


function playRound(playerSelection) {

    if (humanScore === 5 || computerScore ===5) return;

    let computerChoice = getComputerChoice();
    const results = document.querySelector('#results');
    const user = document.querySelector('#user');
    const comp = document.querySelector('#comp');
    const rock = document.createElement('img');
    rock.src = 'img/rock.png';
    rock.classList.add("icon-10x");
    
    const wins = {
        rock: 'scissors',
        scissors: 'paper',
        paper: 'rock'
    };

const userIcons = {
  rock: () => {
    const img = document.createElement("img");
    img.src = "img/rock.png";
    img.classList.add("icon-10x");
    return img;
  },
  scissors: () => {
    const i = document.createElement("i");
    i.classList.add("fa-solid", "fa-scissors", "fa-5x");
    return i;
  },
  paper: () => {
    const i = document.createElement("i");
    i.classList.add("fa-regular", "fa-map", "fa-5x");
    return i;
  }
};

user.replaceChildren(userIcons[playerSelection]());

const compIcons = {
  rock: () => {
    const img = document.createElement("img");
    img.src = "img/rock.png";
    img.classList.add("icon-10x");
    return img;
  },
  scissors: () => {
    const i = document.createElement("i");
    i.classList.add("fa-solid", "fa-scissors", "fa-5x");
    return i;
  },
  paper: () => {
    const i = document.createElement("i");
    i.classList.add("fa-regular", "fa-map", "fa-5x");
    return i;
  }
};

comp.replaceChildren(compIcons[computerChoice]());


    if (computerChoice === wins[playerSelection]) {
        humanScore++;
        results.textContent = `You win! ${playerSelection} beats ${computerChoice}.`;
        console.log(`You win! ${playerSelection} beats ${computerChoice}.`);
    } else if (playerSelection === computerChoice) {
        results.textContent = 'Tie!'
        console.log('Tie!')
    } else {
        computerScore++;
        results.textContent = `You lose! ${computerChoice} beats ${playerSelection}.`;
        console.log(`You lose! ${computerChoice} beats ${playerSelection}.`);
    }

    getScore();
   
}

function displayWinner() {
    const winner = document.createElement('div'); 
    winner.className = 'text-center fw-bold mt-3';
    document.querySelector('.container').appendChild(winner);
    if (humanScore ===5) {
            winner.textContent = 'YOU WIN!';
        } else if (computerScore ===5) {
            winner.textContent = 'COMPUTER WINS!'
        }
    }