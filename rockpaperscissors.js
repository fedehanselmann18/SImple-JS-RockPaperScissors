const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};


localStorage.setItem('score', JSON.stringify(score));

function UpdateScoreElement() {
    document.querySelector('.js-score').innerHTML = 
    `The score is : Wins = ${score.wins}, Losses = ${score.losses}, Ties : ${score.ties}`
}

UpdateScoreElement()

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
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'Rock'){
        if (computerMove === 'Rock'){
            score.ties += 1
            result = 'You Tied!'
        }
        else if (computerMove === 'Scissors'){
            score.wins += 1
            result = 'You Win'
        }
        else if (computerMove === 'Paper'){
            score.losses +=1
            result = 'You Lose'
        }
    }
    else if (playerMove === 'Paper'){
        if (computerMove === 'Paper'){
            score.ties += 1
            result = 'You Tied'
        }
        else if (computerMove === 'Rock'){
            score.wins += 1
            result = 'You Won'
        }
        else if (computerMove === 'Scissors'){
            score.losses +=1
            result = 'You Lose'
        }
    }
    else if (playerMove === 'Scissors'){
        if (computerMove === 'Scissors'){
            score.ties += 1
            result = 'You Tied'
        }
        else if (computerMove === 'Paper'){
            score.wins +=1
            result = 'You Win'
        }
        else if (computerMove === 'Rock'){
            score.losses +=1
            result = 'You Lose'
        }
    }

    localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('.js-moves').innerHTML = `You --> ${playerMove} vs ${computerMove} --> Computer.\nResult = ${result}`
    UpdateScoreElement()
}



function resetScore(){
    score.wins = 0
    score.ties = 0
    score.losses = 0
    localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('.js-moves').innerHTML = 'SCORE RESETED TO 0'
    UpdateScoreElement()
}