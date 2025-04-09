let userScore = 0;
let computerScore = 0;

const resultText = document.getElementById('result');
const scoreText = document.getElementById('score');
const userScoreText = document.getElementById('user-score');
const computerScoreText = document.getElementById('computer-score');
const computerChoiceText = document.getElementById('computer-choice');

// Função para jogar
function play(userChoice) {
  const choices = ['pedra', 'papel', 'tesoura'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  document.getElementById('computer-choice').innerText = computerChoice;

  if (userChoice === computerChoice) {
    resultText.innerText = 'Empate!';
  } else if (
    (userChoice === 'pedra' && computerChoice === 'tesoura') ||
    (userChoice === 'papel' && computerChoice === 'pedra') ||
    (userChoice === 'tesoura' && computerChoice === 'papel')
  ) {
    resultText.innerText = 'Você venceu!';
    userScore++;
  } else {
    resultText.innerText = 'Você perdeu!';
    computerScore++;
  }

  // Atualizar placar
  userScoreText.innerText = userScore;
  computerScoreText.innerText = computerScore;
}

// Função para reiniciar o jogo
function resetGame() {
  userScore = 0;
  computerScore = 0;
  resultText.innerText = 'Faça sua escolha';
  computerChoiceText.innerText = '?';
  userScoreText.innerText = '0';
  computerScoreText.innerText = '0';
}
