// Variáveis globais
let timer;
let seconds = 0;
let isRunning = false;
let laps = [];

// Inicia ou pausa o cronômetro
function startStopTimer() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById("status").innerText = "Pausado";
  } else {
    timer = setInterval(updateTime, 1000);
    document.getElementById("status").innerText = "Rodando";
  }
  isRunning = !isRunning;
  toggleButton();
}

// Atualiza o cronômetro a cada segundo
function updateTime() {
  seconds++;
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  document.getElementById("time-display").innerText = `${formatTime(mins)}:${formatTime(secs)}`;
}

// Formata o tempo com 2 dígitos
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// Reinicia o cronômetro
function resetTimer() {
  clearInterval(timer);
  seconds = 0;
  document.getElementById("time-display").innerText = "00:00";
  document.getElementById("status").innerText = "Pausado";
  isRunning = false;
  toggleButton();
  laps = [];
  document.getElementById("lap-list").innerHTML = '';
}

// Alterna o texto do botão Iniciar/Pausar
function toggleButton() {
  const button = document.getElementById("start-stop");
  button.innerText = isRunning ? "Pausar" : "Iniciar";
}

// Adiciona uma volta à lista
function addLap() {
  const lapTime = document.getElementById("time-display").innerText;
  laps.push(lapTime);
  const lapList = document.getElementById("lap-list");
  const lapItem = document.createElement("li");
  lapItem.innerText = `Volta ${laps.length}: ${lapTime}`;
  lapList.appendChild(lapItem);
}
