const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};


localStorage.setItem('score', JSON.stringify(score));

function UpdateScoreElement() {
    document.querySelector('.js-score').innerHTML = 
    `The score is : Wins = ${score.wins}, Losses = ${score.losses}, Ties : ${score.ties}`;
}

UpdateScoreElement();

function pickComputerMove() {
    const randomNumber = Math.random()
    let computerMove = '';

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
    document.querySelector('.js-moves').innerHTML = `You --> <img src="images/${playerMove}.png" class="move-icon result-icon" alt="">
    vs  <img src="images/${computerMove}.png" class="move-icon result-icon" alt="">--> Computer.
    \nResult = ${result}`
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

function autoPlay () {
    const autoPlayButton = document.querySelector('.auto-play-button')

    if (autoPlayButton.innerText === 'Autoplay'){
        autoPlayButton.innerText = 'Autoplaying...'
        autoPlayButton.classList.add('pressed')
        intervalId = setInterval(() => {
            const playerMove = pickComputerMove()
            RpsResult(playerMove)
        }, 1500)
    }
    else {
        autoPlayButton.innerText = 'Autoplay'
        autoPlayButton.classList.remove('pressed')
        clearInterval(intervalId)
    }
}

function playGameKeyboard(event){
    if (event.key === 'r'){
        RpsResult('Rock');
    }
    else if (event.key === 'p'){
        RpsResult('Paper');
    }
    else if (event.key === 's'){
        RpsResult('Scissors');
    }
}


document.querySelector('.js-rock-button').addEventListener('click', () => RpsResult('Rock'));
document.querySelector('.js-paper-button').addEventListener('click', () => RpsResult('Paper'));
document.querySelector('.js-scissors-button').addEventListener('click', () => RpsResult('Scissors'));
document.querySelector('.js-reset-button').addEventListener('click', resetScore);
document.querySelector('.js-autoplay-button').addEventListener('click', autoPlay);
document.body.addEventListener('keydown', playGameKeyboard);