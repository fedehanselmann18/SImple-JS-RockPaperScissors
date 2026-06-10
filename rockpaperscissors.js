function pickComputerMove() {
    const randomNumber = Math.random()
    let computerMove = ''

    if (randomNumber>=0 && randomNumber<= 1/3){
        computerMove = 'Rock';
    }

    else if (randomNumber>=1/3 && randomNumber<= 2/3){
        computerMove = 'Paper';
    }

    else if (randomNumber>=2/3 && randomNumber<= 1){
        computerMove = 'Scissors';
    }
    return computerMove
}
        
function RpsResult(playerMove){
    const computerMove = pickComputerMove()

    if (playerMove === 'Rock'){
        if (computerMove == 'Rock'){
            alert(`You picked ${playerMove} and the oponent ${computerMove} , its a TIE!`);
        }
        else if (computerMove == 'Scissors'){
            alert(`You picked ${playerMove} and the oponent ${computerMove} , you won!`);
        }
        else if (computerMove == 'Paper'){
            alert(`You picked ${playerMove} and the oponent ${computerMove} , you lost!`);
        }
    }
    else if (playerMove === 'Paper'){
        if (computerMove == 'Paper'){
            alert(`You picked ${playerMove} and the oponent ${computerMove} , its a TIE!`);
        }
        else if (computerMove == 'Rock'){
            alert(`You picked ${playerMove} and the oponent ${computerMove} , you won!`);
        }
        else if (computerMove == 'Scissors'){
            alert(`You picked ${playerMove} and the oponent ${computerMove} , you lost!`);
        }
    }
    else if (playerMove === 'Scissors'){
        if (computerMove == 'Scissors'){
            alert(`You picked ${playerMove} and the oponent ${computerMove} , its a TIE!`);
        }
        else if (computerMove == 'Paper'){
            alert(`You picked ${playerMove} and the oponent ${computerMove} , you won!`);
        }
        else if (computerMove == 'Rock'){
            alert(`You picked ${playerMove} and the oponent ${computerMove} , you lost!`);
        }
    }
}