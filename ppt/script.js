let userScore = 0;
let computerScore = 0;
const winningScore = 5;

const resultText = document.getElementById('result');
const userScoreText = document.getElementById('user-score');
const computerScoreText = document.getElementById('computer-score');
const computerChoiceImg = document.getElementById('computer-choice-img'); // Imagem da escolha do computador



// Função para jogar
function play(userChoice) {
  const computerChoice = getComputerChoice();

  // Atualiza imagem do computador
  updateComputerChoiceImage(computerChoice);

  // Verifica o resultado
  if (userChoice === computerChoice) {
    resultText.innerText = 'Empate!';
    drawSound.play();
  } else if (
    (userChoice === 'pedra' && computerChoice === 'tesoura') ||
    (userChoice === 'papel' && computerChoice === 'pedra') ||
    (userChoice === 'tesoura' && computerChoice === 'papel')
  ) {
    resultText.innerText = 'Você venceu!';
    winSound.play();
    userScore++;
  } else {
    resultText.innerText = 'Você perdeu!';
    loseSound.play();
    computerScore++;
  }

  // Atualizar placar
  userScoreText.innerText = userScore;
  computerScoreText.innerText = computerScore;

  // Verifica vitória geral
  if (userScore >= winningScore) {
    resultText.innerText = '🎉 Você ganhou o jogo!';
    resetGame();
  } else if (computerScore >= winningScore) {
    resultText.innerText = '💻 O computador ganhou o jogo!';
    resetGame();
  }
}

// Reiniciar jogo
function resetGame() {
  userScore = 0;
  computerScore = 0;
  resultText.innerText = 'Faça sua escolha';
  computerChoiceImg.src = '';
  computerChoiceImg.alt = '';
  userScoreText.innerText = '0';
  computerScoreText.innerText = '0';
}

// Escolha do computador (com maior chance de pedra ou papel)
function getComputerChoice() {
  const choices = ['pedra', 'papel', 'tesoura'];
  const randomIndex = Math.random();
  if (randomIndex < 0.4) {
    return choices[Math.floor(Math.random() * 3)];
  } else if (randomIndex < 0.7) {
    return 'pedra';
  } else {
    return 'papel';
  }
}

// Atualizar imagem da escolha do computador
function updateComputerChoiceImage(choice) {
  switch (choice) {
    case 'pedra':
      computerChoiceImg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgHg53ls2b7VCc8NYFULqgEbEbvlnJI3rGnQ&s';
      computerChoiceImg.alt = 'Computador escolheu Pedra';
      break;
    case 'papel':
      computerChoiceImg.src = 'https://genialcursos.com.br/jogo/pedra-papel-tesoura/img/papel-reverse.jpg';
      computerChoiceImg.alt = 'Computador escolheu Papel';
      break;
    case 'tesoura':
      computerChoiceImg.src = 'https://genialcursos.com.br/jogo/pedra-papel-tesoura/img/tesoura-reverse.jpg';
      computerChoiceImg.alt = 'Computador escolheu Tesoura';
      break;

  }
}
