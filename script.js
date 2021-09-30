const options = ["rock", 'paper', 'scissors'];

function game() {
    for (let i = 0; i < 4; i++) {



function computerPlay(_computerSelection) {
    return options[Math.floor(Math.random() * 3)]
}

function playerPlay(_playerSelection) {
    return prompt('choose an option! ').toLowerCase();
    
};


const computerSelection = computerPlay();
const playerSelection = playerPlay();

alert('Computer chose ' + computerPlay())


if (playerSelection === computerSelection) {
    alert ('Tie Game!');
}else if (playerSelection === 'rock' && computerSelection === 'paper') {
    alert ('You lose! Paper beats Rock!');
} else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    alert ('You Win! Rock beats Scissors')
} else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    alert ('You Lose! Scissors beats Paper!')
} else if (playerSelection === 'paper' && computerSelection === 'rock') {
    alert ('You Win! Paper beats Scissors')
} else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    alert ('You lose! Rock beats Scissors')
} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    alert ('You Win! Scissors beats Paper')
}
     
}}

game()