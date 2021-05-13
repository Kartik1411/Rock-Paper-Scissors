const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const computerPointDisplay = document.getElementById('computerPoint');
const userPointDisplay = document.getElementById('userPoint');

let userChoice;
let computerChoice;
let result;
let computerPoint = 0;
let userPoint = 0;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click' , (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if(randomNumber === 1){
        computerChoice = 'Rock';
    }
    if(randomNumber === 2){
        computerChoice = 'Paper';
    }
    if(randomNumber === 3){
        computerChoice = 'Scissors';
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult(){

    if(computerChoice === userChoice){
        result = "Umm! It is a draw"
    }

    if(computerChoice === 'Rock' && userChoice === 'Paper'){
        result = 'Yeah! You Won';
        userPoint++;
    }

    if(computerChoice === 'Rock' && userChoice === 'Scissors'){
        result = 'Ohh! You Lost';
        computerPoint++;
    }

    if(computerChoice === 'Paper' && userChoice === 'Rock'){
        result = 'Ohh! You Lost';
        computerPoint++;
    }

    if(computerChoice === 'Paper' && userChoice === 'Scissors'){
        result = 'Yeah! You Won';
        userPoint++;
    }

    if(computerChoice === 'Scissors' && userChoice === 'Paper'){
        result = 'Ohh! You Lost';
        computerPoint++;
        
    }

    if(computerChoice === 'Scissors' && userChoice === 'Rock'){
        result = 'Yeah! You Won';
        userPoint++;
    }
    
    resultDisplay.innerHTML = result;
    computerPointDisplay.innerHTML = computerPoint;
    userPointDisplay.innerHTML = userPoint;

}
