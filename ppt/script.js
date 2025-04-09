let userScore = 0;
let computerScore = 0;
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const computerChoiceElement = document.getElementById('computer-choice');

// Função principal para jogar
function play(userChoice) {
  const computerChoice = getComputerChoice();
  const result = getResult(userChoice, computerChoice);
  displayResult(userChoice, computerChoice, result);
  updateScore(result);
}

// Função para pegar a escolha do computador
function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3);
  return ['pedra', 'papel', 'tesoura'][randomChoice];
}

// Função para decidir o resultado
function getResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) return 'Empate';
  if (
    (userChoice === 'pedra' && computerChoice === 'tesoura') ||
    (userChoice === 'papel' && computerChoice === 'pedra') ||
    (userChoice === 'tesoura' && computerChoice === 'papel')
  ) {
    return 'Você ganhou!';
  }
  return 'Você perdeu!';
}

// Função para exibir o resultado com animação
function displayResult(userChoice, computerChoice, result) {
  resultElement.textContent = result;
  computerChoiceElement.innerHTML = `<img src="https://genialcursos.com.br/jogo/pedra-papel-tesoura/img/${computerChoice}-reverse.jpg" alt="${computerChoice}" />`;

  // Adicionando animação ao resultado
  const choiceImages = document.querySelectorAll('.choice img');
  choiceImages.forEach((img) => img.classList.add('animate-img'));

  setTimeout(() => {
    choiceImages.forEach((img) => img.classList.remove('animate-img'));
  }, 300);
}

// Função para atualizar a pontuação
function updateScore(result) {
  if (result === 'Você ganhou!') {
    userScore++;
  } else if (result === 'Você perdeu!') {
    computerScore++;
  }
  scoreElement.textContent = `Você: ${userScore} | Computador: ${computerScore}`;
}

// Função para reiniciar o jogo
function resetGame() {
  userScore = 0;
  computerScore = 0;
  scoreElement.textContent = `Você: 0 | Computador: 0`;
  resultElement.textContent = '';
  computerChoiceElement.innerHTML = '';
}
