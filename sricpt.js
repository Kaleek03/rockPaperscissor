
 function getcomputerChoice() {
    const gameArray = ["Rock", "Paper", "Scissors"]
    return gameArray[(Math.random() * gameArray.length) | 0];
}

function showResult(text) {
    document.getElementById("result").innerText = text
}

function versus(clickedValue) {			
    var computerChoice = getcomputerChoice();

    if (computerChoice == "Rock" && clickedValue == "Rock") {
        showResult(`You chose ${clickedValue} I chose ${computerChoice} so Tie game`)
    } else if (computerChoice == "Paper" && clickedValue == "Paper") {
        showResult(`You chose ${clickedValue} I chose ${computerChoice} so Tie game`)
    } else if (computerChoice == "Scissors" && clickedValue == "Scissors") {
        showResult(`You chose ${clickedValue} I chose ${computerChoice} so Tie game`)
    } else if (computerChoice == "Rock" && clickedValue == "Scissors") {
        showResult(`You chose ${clickedValue} I chose ${computerChoice} so I won!! and you LOST!`)
    } else if (computerChoice == "Rock" && clickedValue == "Paper") {
        showResult(`You chose ${clickedValue} I chose ${computerChoice} so I lost! and you WON!!`)
    } else if (computerChoice == "Paper" && clickedValue == "Rock") {
        showResult(`You chose ${clickedValue} I chose ${computerChoice} so I won!! and you LOST!`)
    } else if (computerChoice == "Paper" && clickedValue == "Scissors") {
        showResult(`You chose ${clickedValue} I chose ${computerChoice} so I lost! and you WON!!`)
    } else if (computerChoice == "Scissors" && clickedValue == "Paper") {
        showResult(`You chose ${clickedValue} I chose ${computerChoice} so I won!! and you LOST!`)
    } else if (computerChoice == "Scissors" && clickedValue == "Rock") {
        showResult(`You chose ${clickedValue} I chose ${computerChoice} so I lost! and you WON!`)
    } else if (clickedValue == "Rock" && computerChoice == "Rock") {
        showResult(`You chose ${clickedValue} I chose ${computerChoice} so Tie game`)
    } else if (clickedValue == "Paper" && computerChoice == "Paper") {
        showResult(`You chose ${clickedValue} I chose ${computerChoice} so Tie game`)
    } else if (clickedValue == "Scissors" && computerChoice == "Scissors") {
        showResult(`You chose ${clickedValue} I chose ${computerChoice} so You chose ${clickedValue} I chose ${computerChoice()} so Tie game`)
    } else if (clickedValue == 'Rock' && computerChoice == "Scissors") {
        showResult(`You chose ${clickedValue} I chose ${computerChoice} so I lost! and you WON!!`)
    } else if (clickedValue == "Rock" && computerChoice == "Paper") {
        showResult(`You chose ${clickedValue} I chose ${computerChoice} so I won!! and you LOST!`)
    } else if (clickedValue == "Paper" && computerChoice == "Rock") {
        showResult(`You chose ${clickedValue} I chose ${computerChoice} so I lost! and you WON!!`)
    } else if (clickedValue == "Paper" && computerChoice == "Scissors") {
        showResult(`You chose ${clickedValue} I chose ${computerChoice} so I won!! and you LOST!`)
    } else if (clickedValue == "Scissors" && computerChoice == "Paper") {
        showResult(`You chose ${clickedValue} I chose ${computerChoice} so I lost! and you WON!!`)
    } else if (clickedValue == "Scissors" && computerChoice == "Rock") {
        showResult(`You chose ${clickedValue} I chose ${computerChoice} so I won!! and you LOST!`)
    } else {
        showResult("ERROR")
    }
}