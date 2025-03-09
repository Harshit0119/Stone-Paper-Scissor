document.addEventListener('DOMContentLoaded', () => {
    const choices = ['rock', 'paper', 'scissor'];
    const userScore = document.querySelector('.part1 p');
    const computerScore = document.querySelector('.part2 p');
    const playButton = document.querySelector('.play');
    const restartButton = document.querySelector('.restart');
    const winnerDiv = document.querySelector('.winner');
    const winnerText = document.querySelector('#winner-text');
    const closeButton = document.querySelector('.close');

    let userPoints = 0;
    let computerPoints = 0;

    const signs = document.querySelectorAll('.signs');
    signs.forEach(sign => {
        sign.addEventListener('click', () => {
            const userChoice = sign.alt;
            const computerChoice = choices[Math.floor(Math.random() * 3)];
            determineWinner(userChoice, computerChoice);
        });
    });

    function determineWinner(userChoice, computerChoice) {
        let result = '';
        if (userChoice === computerChoice) {
            result = `It's a draw! Both chose ${userChoice}`;
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissor') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissor' && computerChoice === 'paper')
        ) {
            userPoints++;
            userScore.textContent = `YOUR: ${userPoints}`;
            result = `You win! ${userChoice} beats ${computerChoice}`;
        } else {
            computerPoints++;
            computerScore.textContent = `COMPUTER: ${computerPoints}`;
            result = `You lose! ${computerChoice} beats ${userChoice}`;
        }
        showWinner(result);
        checkWinner();
    }

    function showWinner(result) {
        winnerText.textContent = result;
        winnerDiv.style.display = 'block';
    }

    function checkWinner() {
        if (userPoints === 10) {
            winnerText.textContent = 'Player';
            winnerDiv.style.display = 'block';
            setTimeout(resetGame, 3000); // Restart game after 3 seconds
        } else if (computerPoints === 10) {
            winnerText.textContent = 'Computer';
            winnerDiv.style.display = 'block';
            setTimeout(resetGame, 3000); // Restart game after 3 seconds
        }
    }

    function resetGame() {
        userPoints = 0;
        computerPoints = 0;
        userScore.textContent = 'YOUR: 0';
        computerScore.textContent = 'COMPUTER: 0';
        winnerDiv.style.display = 'none';
    }

    playButton.addEventListener('click', () => {
        userPoints = 0;
        computerPoints = 0;
        userScore.textContent = 'YOUR: 0';
        computerScore.textContent = 'COMPUTER: 0';
        alert('Game reset. Let\'s play again!');
    });

    restartButton.addEventListener('click', () => {
        resetGame();
    });

    closeButton.addEventListener('click', () => {
        winnerDiv.style.display = 'none';
    });
});
