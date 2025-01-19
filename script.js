const choice = document.querySelectorAll(".player1");
const playerScore = document.querySelector(".playerScore");
const compScore = document.querySelector(".compScore");
const result = document.querySelector(".result")
const buttArray = Array.from(choice);
function getComputerChoice(){
    compChoice = Math.floor(Math.random()*3);
    switch(compChoice){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors"
    }
}

// function getHumanChoice(){
//     let a = prompt("Choose, Rock, Paper or Scissors?");
//     a.toLowerCase();
//     while (a!=="rock" && a!=="paper" && a!=="scissors"){
//         console.log("Invalid Choice try again!")
//         a = prompt("Choose, Rock, Paper or Scissors?");
//         a.toLowerCase();
//     }
//     return a;
// }

let humanScore=0;
let computerScore=0;

function isDraw(humanChoice, computerChoice){
    if(humanChoice===computerChoice.toLowerCase()){
        console.log("Draw!")

    }
};
buttArray.forEach((button) =>{
    button.addEventListener('click', (humanChoice) => {
    result.textContent="";
    computerChoice = getComputerChoice();
    humanChoice = humanChoice.target.value;
    if(humanChoice===computerChoice.toLowerCase()){
        console.log("Draw!")
        computerScore+=1;
        humanScore+=1;
    }
    else if(humanChoice==="rock" && computerChoice==="Paper"){
        console.log("You Lose Paper beats rock!")
        computerScore+=1;
    }
    else if((humanChoice==="paper" && computerChoice==="Scissors")){
        console.log("You Lose Scissors beats paper!")
        computerScore+=1;
    }
    else if((humanChoice==="scissors" && computerChoice==="Rock")){
        console.log("You Lose rock beats Scissors!")
        computerScore+=1;
    }
    else{
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
        humanScore+=1;
    }
    playerScore.textContent = "Player Score: " + humanScore;
    compScore.textContent= "Computer Score: " + computerScore;
    if(humanScore === 5){
        result.textContent= "Player wins!"
        humanScore=0;
        computerScore=0;
        playerScore.textContent = "Player Score: " + humanScore;
        compScore.textContent= "Computer Score: " + computerScore;
    }else if (computerScore === 5){
        result.textContent= "Computer wins!"
        humanScore=0;
        computerScore=0;
        playerScore.textContent = "Player Score: " + humanScore;
        compScore.textContent= "Computer Score: " + computerScore;
    }
        
})
})

// function playGame(){
//     for(let i=0; i<5; i++){
//         let a = getHumanChoice();
//         let b = getComputerChoice();
//         playRound(a,b)
//     }
//     return (humanScore>computerScore) ? console.log("You Win!") : console.log("Computer Wins!");
// }

// playGame()