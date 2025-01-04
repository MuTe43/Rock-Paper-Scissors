function getComputerChoice(){
    choice = Math.floor(Math.random()*3);
    switch(choice){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors"
    }
}

function getHumanChoice(){
    let a = prompt("Choose, Rock, Paper or Scissors?");
    a.toLowerCase();
    while (a!=="rock" && a!=="paper" && a!=="scissors"){
        console.log("Invalid Choice try again!")
        a = prompt("Choose, Rock, Paper or Scissors?");
        a.toLowerCase();
    }
    return a;
}

let humanScore=0;
let computerScore=0;

function isDraw(humanChoice, computerChoice){
    if(humanChoice===computerChoice.toLowerCase()){
        console.log("Draw!")

    }
}

function playRound(humanChoice, computerChoice){
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
    else if((humanChoice==="Scissors" && computerChoice==="rock")){
        console.log("You Lose rock beats Scissors!")
        computerScore+=1;
    }
    else{
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
        humanScore+=1;
    }
}


function playGame(){
    for(let i=0; i<5; i++){
        let a = getHumanChoice();
        let b = getComputerChoice();
        playRound(a,b)
    }
    return (humanScore>computerScore) ? console.log("You Win!") : console.log("Computer Wins!");
}

playGame()