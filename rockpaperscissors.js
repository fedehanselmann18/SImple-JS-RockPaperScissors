const score = {
    wins : 0,
    losses : 0,
    ties : 0
}

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
        if (computerMove === 'Rock'){
            score.ties += 1
            alert(`You picked ${playerMove} and the oponent ${computerMove} , its a TIE!
                The score is : Wins = ${score.wins}, Losses = ${score.losses}, Ties : ${score.ties} `);
        }
        else if (computerMove === 'Scissors'){
            score.wins += 1
            alert(`You picked ${playerMove} and the oponent ${computerMove} , you won!
                The score is : Wins = ${score.wins}, Losses = ${score.losses}, Ties : ${score.ties} `);
        }
        else if (computerMove === 'Paper'){
            score.losses +=1
            alert(`You picked ${playerMove} and the oponent ${computerMove} , you lost!
                The score is : Wins = ${score.wins}, Losses = ${score.losses}, Ties : ${score.ties} `);
        }
    }
    else if (playerMove === 'Paper'){
        if (computerMove === 'Paper'){
            score.ties += 1
            alert(`You picked ${playerMove} and the oponent ${computerMove} , its a TIE!
                The score is : Wins = ${score.wins}, Losses = ${score.losses}, Ties : ${score.ties} `);
        }
        else if (computerMove === 'Rock'){
            score.wins += 1
            alert(`You picked ${playerMove} and the oponent ${computerMove} , you won!
                The score is : Wins = ${score.wins}, Losses = ${score.losses}, Ties : ${score.ties} `);
        }
        else if (computerMove === 'Scissors'){
            score.losses +=1
            alert(`You picked ${playerMove} and the oponent ${computerMove} , you lost!
                The score is : Wins = ${score.wins}, Losses = ${score.losses}, Ties : ${score.ties} `);
        }
    }
    else if (playerMove === 'Scissors'){
        if (computerMove === 'Scissors'){
            score.ties += 1
            alert(`You picked ${playerMove} and the oponent ${computerMove} , its a TIE!
                The score is : Wins = ${score.wins}, Losses = ${score.losses}, Ties : ${score.ties} `);
        }
        else if (computerMove === 'Paper'){
            score.wins +=1
            alert(`You picked ${playerMove} and the oponent ${computerMove} , you won!
                The score is : Wins = ${score.wins}, Losses = ${score.losses}, Ties : ${score.ties} `);
        }
        else if (computerMove === 'Rock'){
            score.losses +=1
            alert(`You picked ${playerMove} and the oponent ${computerMove} , you lost!
                The score is : Wins = ${score.wins}, Losses = ${score.losses}, Ties : ${score.ties} `);
        }
    }
}

function resetScore(){
    score.wins = 0
    score.ties = 0
    score.losses = 0
    alert(`The score is : Wins = ${score.wins}, Losses = ${score.losses}, Ties : ${score.ties}`)
}