let userScore = 0; // Pontuação do usuário
let computerScore = 0; // Pontuação do computador
const winningScore = 15; // Pontuação necessária para ganhar o jogo

// Obtendo os elementos do DOM que serão usados para exibir o resultado e o placar
const resultText = document.getElementById('result');
const userScoreText = document.getElementById('user-score');
const computerScoreText = document.getElementById('computer-score'); 
const computerChoiceImg = document.getElementById('computer-choice-img'); // Imagem da escolha do computador

// Função que é chamada quando o usuário faz uma escolha
function play(userChoice) {
  const computerChoice = getComputerChoice(); // Obtém a escolha do computador

  // Atualiza a imagem com a escolha do computador
  updateComputerChoiceImage(computerChoice);

  // Verifica quem ganhou a rodada
  if (userChoice === computerChoice) {
    resultText.innerText = 'Empate!'; // Se as escolhas forem iguais, é empate
  } else if (
    (userChoice === 'pedra' && computerChoice === 'tesoura') ||
    (userChoice === 'papel' && computerChoice === 'pedra') ||
    (userChoice === 'tesoura' && computerChoice === 'papel')
  ) {
    resultText.innerText = 'Você venceu!'; // O usuário venceu
    userScore++; // A pontuação do usuário é aumentada
  } else {
    resultText.innerText = 'Você perdeu!'; // O computador venceu
    computerScore++; // A pontuação do computador é aumentada
  }

  // Atualiza o placar na tela
  userScoreText.innerText = userScore;
  computerScoreText.innerText = computerScore;

  // Verifica se alguém alcançou a pontuação de vitória
  if (userScore >= winningScore) {
    resultText.innerText = 'Você ganhou o jogo!'; // O usuário ganhou o jogo
    resetGame(); // Reinicia o jogo
  } else if (computerScore >= winningScore) {
    resultText.innerText = 'O computador ganhou o jogo!'; // O computador ganhou o jogo
    resetGame(); // Reinicia o jogo
  }
}

// Função para reiniciar o jogo
function resetGame() {
  userScore = 0; // Zera a pontuação do usuário
  computerScore = 0; // Zera a pontuação do computador
  resultText.innerText = 'Faça sua escolha'; // Instrução para o jogador
  computerChoiceImg.src = ''; // Limpa a imagem da escolha do computador
  computerChoiceImg.alt = ''; // Limpa a descrição da imagem
  userScoreText.innerText = '0'; // Zera a pontuação exibida do usuário
  computerScoreText.innerText = '0'; // Zera a pontuação exibida do computador
}

// Função que gera a escolha do computador
function getComputerChoice() {
  const choices = ['pedra', 'papel', 'tesoura']; // Opções possíveis de escolha
  const randomIndex = Math.random(); // Gera um número aleatório entre 0 e 1

  // Configura o comportamento das escolhas do computador
  if (randomIndex < 0.4) {
    // 40% de chance para qualquer escolha
    return choices[Math.floor(Math.random() * 3)]; 
  } else if (randomIndex < 0.7) {
    // 30% de chance de escolher 'pedra'
    return 'pedra';
  } else {
    // 30% de chance de escolher 'papel'
    return 'papel';
  }
}

// Função para atualizar a imagem da escolha do computador
function updateComputerChoiceImage(choice) {
  // Com base na escolha do computador, a imagem correspondente é exibida
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
