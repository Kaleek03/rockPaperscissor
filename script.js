

 function versus(playerSelection ){
    if (getComputerChoice() == "Rock" && playerSelection == "Rock" ) {
        return `You chose ${playerSelection } I chose ${getComputerChoice() } so Tie game`
    } 
    else if (getComputerChoice() == "Paper" && playerSelection == "Paper") {
        return `You chose ${playerSelection } I chose ${getComputerChoice() } so Tie game`
    } 
    else if (getComputerChoice() == "Scissors" && playerSelection == "Scissors") {
        return `You chose ${playerSelection } I chose ${getComputerChoice() } so Tie game`
    } 
    else if(getComputerChoice() == "Rock" && playerSelection == "Scissors") {
        return `You chose ${playerSelection } I chose ${getComputerChoice() } so I won!! and you LOST!`
    } 
    else if(getComputerChoice() == "Rock" && playerSelection == "Paper") {
        return `You chose ${playerSelection } I chose ${getComputerChoice() } so I lost! and you WON!!`
    } 
    else if(getComputerChoice() == "Paper" && playerSelection == "Rock") {
        return `You chose ${playerSelection } I chose ${getComputerChoice() } so I won!! and you LOST!`
    } 
    else if(getComputerChoice() == "Paper" && playerSelection == "Scissors") {
        return `You chose ${playerSelection } I chose ${getComputerChoice() } so I lost! and you WON!!`
    } 
    else if(getComputerChoice() == "Scissors" && playerSelection == "Paper") {
        return `You chose ${playerSelection } I chose ${getComputerChoice() } so I won!! and you LOST!`
    } 
    else if(getComputerChoice() == "Scissors" && playerSelection == "Rock") {
        return `You chose ${playerSelection } I chose ${getComputerChoice() } so I lost! and you WON!`
    } 
    else if(playerSelection == "Rock" && getComputerChoice() == "Rock") {
        return `You chose ${playerSelection } I chose ${getComputerChoice() } so Tie game`
    } 
    else if (playerSelection == "Paper" && getComputerChoice() == "Paper") {
        return `You chose ${playerSelection } I chose ${getComputerChoice() } so Tie game`
    } 
    else if (playerSelection == "Scissors" && getComputerChoice() == "Scissors") {
        return `You chose ${playerSelection } I chose ${getComputerChoice() } so You chose ${playerSelection } I chose ${getComputerChoice() } so Tie game`
    } 
    else if(playerSelection == "Rock" && getComputerChoice() == "Scissors") {
        return `You chose ${playerSelection } I chose ${getComputerChoice() } so I lost! and you WON!!`
    } 
    else if(playerSelection == "Rock" && getComputerChoice() == "Paper") {
        return `You chose ${playerSelection } I chose ${getComputerChoice() } so I won!! and you LOST!`
    } 
    else if(playerSelection == "Paper" && getComputerChoice() == "Rock") {
        return `You chose ${playerSelection } I chose ${getComputerChoice() } so I lost! and you WON!!`
    } 
    else if(playerSelection == "Paper" && getComputerChoice() == "Scissors") {
        return `You chose ${playerSelection } I chose ${getComputerChoice() } so I won!! and you LOST!`
    } 
    else if(playerSelection == "Scissors" && getComputerChoice() == "Paper") {
        return `You chose ${playerSelection } I chose ${getComputerChoice() } so I lost! and you WON!!`
    } 
    else if(playerSelection == "Scissors" && getComputerChoice() == "Rock") {
        return `You chose ${playerSelection } I chose ${getComputerChoice() } so I won!! and you LOST!`
    } 
    else {
        console.log("ERROR")
    }
 }


 function getComputerChoice() {
    const gameArray = ["Rock", "Paper", "Scissors"]
    const randomizer = gameArray[(Math.random() * gameArray.length) | 0];
    return randomizer
    }

   
