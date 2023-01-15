
 function getcomputerChoice() {
    const gameArray = ["Rock", "Paper", "Scissors"]
    const randomizer = gameArray[(Math.random() * gameArray.length) | 0];
    return randomizer
    }



function versus(event){
    let computerChoice = getcomputerChoice();

    if (computerChoice == "Rock" && event.target.value == "Rock" ) {
        return `You chose ${event.target.value} I chose ${computerChoice } so Tie game`
    } 
    else if (computerChoice == "Paper" && event.target.value== "Paper") {
        return `You chose ${event.target.value } I chose ${computerChoice } so Tie game`
    } 
    else if (computerChoice == "Scissors" && event.target.value == "Scissors") {
        return `You chose ${event.target.value} I chose ${computerChoice } so Tie game`
    } 
    else if(computerChoice == "Rock" && event.target.value == "Scissors") {
        return `You chose ${event.target.value } I chose ${computerChoice } so I won!! and you LOST!`
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
    else if(playerSelection == 'Rock' && computerChoice == "Scissors") {
        return `You chose ${playerSelection } I chose ${computerChoice } so I lost! and you WON!!`
    } 
    else if(playerSelection == "Rock" && computerChoice == "Paper") {
        console.log(`You chose ${playerSelection } I chose ${computerChoice } so I won!! and you LOST!`)
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

 function extract(event) {
    var playerSelection = event.target.value
 }

