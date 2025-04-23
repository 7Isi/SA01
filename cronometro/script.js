let timer;                         // Armazena o ID do setInterval, usado para iniciar/parar o cronômetro
let totalCentiseconds = 0;        // Contador de centésimos de segundo (1 segundo = 100 centésimos)
//booleanas \|/
let isRunning = false;            // Controla o estado do cronômetro (ativo ou pausado)
let laps = [];                    // Lista para armazenar os tempos das voltas
let lastLapCentiseconds = 0;      // Armazena o tempo acumulado no momento da última volta

// ==========================
// Inicia ou pausa o cronômetro
// ==========================a
function startStopTimer() {
  const statusEl = document.getElementById("status"); // Elemento que exibe o estado do cronômetro
    //booleana \|/
  if (isRunning) {
    clearInterval(timer);             // Pausa o cronômetro interrompendo o setInterval
    statusEl.innerText = "Pausado";   // Atualiza o texto do status
    statusEl.classList.remove("running"); // Remove a classe visual de "rodando"
  } else {
    timer = setInterval(updateTime, 10); // Inicia o cronômetro e atualiza a cada 10ms (centésimo)
    statusEl.innerText = "Rodando";      // Atualiza o texto do status
    statusEl.classList.add("running");   // Adiciona a classe visual de "rodando"
  }

  isRunning = !isRunning; // Alterna o estado entre rodando e pausado
  toggleButton();         // Atualiza o texto do botão para refletir o novo estado
}

// ==========================
// Atualiza o tempo mostrado na tela
// ==========================
function updateTime() {
  totalCentiseconds++; // Incrementa o tempo total em centésimos (10ms)

  // Converte o tempo total em minutos, segundos e centésimos
  const mins = Math.floor(totalCentiseconds / 6000); // 6000 centésimos = 60 segundos = 1 minuto.
  const secs = Math.floor((totalCentiseconds % 6000) / 100); // 1 seg = 100 centésimos
  const cents = totalCentiseconds % 100; // Centésimos restantes

  // Atualiza a exibição na tela com tempo formatado
  document.getElementById("time-display").innerText = 
    `${formatTime(mins)}:${formatTime(secs)}.${formatTime(cents)}`; //Mostra o tempo formatado na tela (ex: "02:34.56").
}

// ==========================
// Reinicia cronômetro e limpa voltas
// ==========================
function resetTimer() {
  clearInterval(timer);                    // Para o cronômetro
  totalCentiseconds = 0;                   // Zera o tempo total
  lastLapCentiseconds = 0;                 // Zera o tempo da última volta

  // Reseta a exibição do tempo
  document.getElementById("time-display").innerText = "00:00.00";
  document.getElementById("status").innerText = "Pausado";
  document.getElementById("status").classList.remove("running");

  isRunning = false;                       // Atualiza o estado
  toggleButton();                          // Atualiza o botão para "Iniciar"

  // Limpa as voltas registradas
  laps = [];
  document.getElementById("lap-list").innerHTML = '';
  //Limpa o array de voltas e a lista HTML que mostra essas voltas.
}

// ==========================
// Alterna o texto do botão entre "Iniciar" e "Pausar"
// ==========================
function toggleButton() {
  const button = document.getElementById("start-stop");
  button.innerText = isRunning ? "Pausar" : "Iniciar"; // Altera o texto do botão conforme o estado
}

// ==========================
// Registra uma nova volta e calcula o tempo da volta
// ==========================
function addLap() {
  const current = totalCentiseconds;               // Tempo atual total
  const diff = current - lastLapCentiseconds;      // Diferença desde a última volta
  lastLapCentiseconds = current;                   // Atualiza o tempo da última volta

  // Converte o tempo da volta em minutos, segundos e centésimos
  const lapMins = Math.floor(diff / 6000);
  const lapSecs = Math.floor((diff % 6000) / 100);
  const lapCents = diff % 100;
  // Converte a diferença em minutos, segundos e centésimos.

  // Formata o tempo da volta
  const lapTimeFormatted = `${formatTime(lapMins)}:${formatTime(lapSecs)}.${formatTime(lapCents)}`;
  //Formata e adiciona o tempo da volta no array de voltas.

  laps.push(lapTimeFormatted); // Armazena a volta no array

  // Cria e adiciona o item na lista de voltas na tela
  const lapItem = document.createElement("li");
  lapItem.innerText = `Volta ${laps.length} - Tempo da volta: ${lapTimeFormatted}`;
  document.getElementById("lap-list").appendChild(lapItem);
}

// ==========================
// Atalho de teclado: espaço inicia/pausa
// ==========================
document.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    e.preventDefault();     // Evita scroll da página com a barra de espaço
    startStopTimer();       // Ativa ou pausa o cronômetro
  }
});

// ==========================
// Formata os números para dois dígitos (ex: 03)
// ==========================
function formatTime(unit) {  //operador ternario
  return unit < 10 ? `0${unit}` : unit; // Retorna sempre dois dígitos (ex: "03" em vez de "3")
}
