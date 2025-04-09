let timer;
let minutes = 0;
let seconds = 0;
let isRunning = false;
let isPaused = false;

// Função para formatar o tempo em "mm:ss"
function formatTime(mins, secs) {
  return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Função para atualizar a tela com o tempo atual
function updateDisplay() {
  const timeDisplay = document.getElementById('time-display');
  timeDisplay.textContent = formatTime(minutes, seconds);
}

// Função para iniciar ou pausar o cronômetro
function startStopTimer() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById('status').textContent = "Pausado";
    isRunning = false;
    document.getElementById('start-stop').textContent = "Iniciar";
  } else {
    if (isPaused) {
      // Retomar de onde parou
      document.getElementById('status').textContent = "Em andamento";
    } else {
      minutes = 0;
      seconds = 0;
      updateDisplay();
      document.getElementById('status').textContent = "Em andamento";
    }

    timer = setInterval(function() {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      updateDisplay();
    }, 1000);

    isRunning = true;
    isPaused = false;
    document.getElementById('start-stop').textContent = "Pausar";
  }
}

// Função para reiniciar o cronômetro
function resetTimer() {
  clearInterval(timer);
  minutes = 0;
  seconds = 0;
  isRunning = false;
  isPaused = false;
  updateDisplay();
  document.getElementById('status').textContent = "Pausado";
  document.getElementById('start-stop').textContent = "Iniciar";
}
