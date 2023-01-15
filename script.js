

function versus(playerSelection ){
    let computerChoice = getcomputerChoice();

    if (computerChoice == "Rock" && playerSelection == "Rock" ) {
        return `You chose ${playerSelection } I chose ${computerChoice } so Tie game`
    } 
    else if (computerChoice == "Paper" && playerSelection == "Paper") {
        return `You chose ${playerSelection } I chose ${computerChoice } so Tie game`
    } 
    else if (computerChoice == "Scissors" && playerSelection == "Scissors") {
        return `You chose ${playerSelection } I chose ${computerChoice } so Tie game`
    } 
    else if(computerChoice == "Rock" && playerSelection == "Scissors") {
        return `You chose ${playerSelection } I chose ${computerChoice } so I won!! and you LOST!`
    } 
    else if(computerChoice == "Rock" && playerSelection == "Paper") {
        return `You chose ${playerSelection } I chose ${computerChoice } so I lost! and you WON!!`
    } 
    else if(computerChoice == "Paper" && playerSelection == "Rock") {
        return `You chose ${playerSelection } I chose ${computerChoice } so I won!! and you LOST!`
    } 
    else if(computerChoice == "Paper" && playerSelection == "Scissors") {
        return `You chose ${playerSelection } I chose ${computerChoice } so I lost! and you WON!!`
    } 
    else if(computerChoice == "Scissors" && playerSelection == "Paper") {
        return `You chose ${playerSelection } I chose ${computerChoice } so I won!! and you LOST!`
    } 
    else if(computerChoice == "Scissors" && playerSelection == "Rock") {
        return `You chose ${playerSelection } I chose ${computerChoice } so I lost! and you WON!`
    } 
    else if(playerSelection == "Rock" && computerChoice == "Rock") {
        return `You chose ${playerSelection } I chose ${computerChoice } so Tie game`
    } 
    else if (playerSelection == "Paper" && computerChoice == "Paper") {
        return `You chose ${playerSelection } I chose ${computerChoice } so Tie game`
    } 
    else if (playerSelection == "Scissors" && computerChoice == "Scissors") {
        return `You chose ${playerSelection } I chose ${computerChoice } so You chose ${playerSelection } I chose ${computerChoice() } so Tie game`
    } 
    else if(playerSelection == "Rock" && computerChoice == "Scissors") {
        return `You chose ${playerSelection } I chose ${computerChoice } so I lost! and you WON!!`
    } 
    else if(playerSelection == "Rock" && computerChoice == "Paper") {
        return `You chose ${playerSelection } I chose ${computerChoice } so I won!! and you LOST!`
    } 
    else if(playerSelection == "Paper" && computerChoice == "Rock") {
        return `You chose ${playerSelection } I chose ${computerChoice } so I lost! and you WON!!`
    } 
    else if(playerSelection == "Paper" && computerChoice == "Scissors") {
        return `You chose ${playerSelection } I chose ${computerChoice } so I won!! and you LOST!`
    } 
    else if(playerSelection == "Scissors" && computerChoice == "Paper") {
        return `You chose ${playerSelection } I chose ${computerChoice } so I lost! and you WON!!`
    } 
    else if(playerSelection == "Scissors" && computerChoice == "Rock") {
        return `You chose ${playerSelection } I chose ${computerChoice } so I won!! and you LOST!`
    } 
    else {
        console.log("ERROR")
    }
 }


 function getcomputerChoice() {
    const gameArray = ["Rock", "Paper", "Scissors"]
    const randomizer = gameArray[(Math.random() * gameArray.length) | 0];
    return randomizer
    }

   
