// ==========================
// Variáveis principais do cronômetro
// ==========================
let timer;                         // Armazena o setInterval
let totalCentiseconds = 0;        // Total de centésimos (1 centésimo = 10ms)
let isRunning = false;            // Indica se o cronômetro está ativo
let laps = [];                    // Armazena as voltas
let lastLapCentiseconds = 0;      // Tempo da última volta

// ==========================
// Inicia ou pausa o cronômetro
// ==========================
function startStopTimer() {
  const statusEl = document.getElementById("status");

  if (isRunning) {
    clearInterval(timer);             // Pausa o cronômetro
    statusEl.innerText = "Pausado";
    statusEl.classList.remove("running");
  } else {
    timer = setInterval(updateTime, 10); // Inicia e atualiza a cada 10ms
    statusEl.innerText = "Rodando";
    statusEl.classList.add("running");
  }

  isRunning = !isRunning;
  toggleButton();
}

// ==========================
// Atualiza o tempo mostrado na tela
// ==========================
function updateTime() {
  totalCentiseconds++;

  const mins = Math.floor(totalCentiseconds / 6000); // 1 min = 6000 cs
  const secs = Math.floor((totalCentiseconds % 6000) / 100);
  const cents = totalCentiseconds % 100;

  document.getElementById("time-display").innerText = 
    `${formatTime(mins)}:${formatTime(secs)}.${formatTime(cents)}`;
}

// ==========================
// Reinicia cronômetro e limpa voltas
// ==========================
function resetTimer() {
  clearInterval(timer);
  totalCentiseconds = 0;
  lastLapCentiseconds = 0;

  document.getElementById("time-display").innerText = "00:00.00";
  document.getElementById("status").innerText = "Pausado";
  document.getElementById("status").classList.remove("running");

  isRunning = false;
  toggleButton();

  laps = [];
  document.getElementById("lap-list").innerHTML = '';
}

// ==========================
// Alterna o texto do botão entre "Iniciar" e "Pausar"
// ==========================
function toggleButton() {
  const button = document.getElementById("start-stop");
  button.innerText = isRunning ? "Pausar" : "Iniciar";
}

// ==========================
// Registra uma nova volta e calcula o tempo da volta
// ==========================
function addLap() {
  const current = totalCentiseconds;
  const diff = current - lastLapCentiseconds;
  lastLapCentiseconds = current;

  const lapMins = Math.floor(diff / 6000);
  const lapSecs = Math.floor((diff % 6000) / 100);
  const lapCents = diff % 100;

  const lapTimeFormatted = `${formatTime(lapMins)}:${formatTime(lapSecs)}.${formatTime(lapCents)}`;

  laps.push(lapTimeFormatted);

  const lapItem = document.createElement("li");
  lapItem.innerText = `Volta ${laps.length} - Tempo da volta: ${lapTimeFormatted}`;
  document.getElementById("lap-list").appendChild(lapItem);
}

// ==========================
// Atalho de teclado: espaço inicia/pausa
// ==========================
document.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    e.preventDefault();
    startStopTimer();
  }
});

// ==========================
// Formata os números para dois dígitos (ex: 03)
// ==========================
function formatTime(unit) {
  return unit < 10 ? `0${unit}` : unit;
}
