const lampImg = document.getElementById('lamp-img');
const onSound = document.getElementById('on-sound');
const offSound = document.getElementById('off-sound');
const breakSound = document.getElementById('break-sound');

let isLampOn = false;
let isLampBroken = false;
let toggleCount = 0;

// Acender a lâmpada
function turnOn() {
  if (isLampBroken) return;

  lampImg.src = "https://img.icons8.com/ios/452/light-on.png";
  lampImg.style.transform = "scale(1.1)";
  lampImg.style.filter = "brightness(1)";
  isLampOn = true;
  toggleCount++;

  // Altera o fundo para branco
  document.body.style.backgroundColor = "#ffffff";
  document.body.style.color = "#000000";

  if (toggleCount >= 7) {
    breakLamp();
    return;
  }

  document.getElementById('on-btn').disabled = true;
  document.getElementById('off-btn').disabled = false;
  document.getElementById('replace-btn').disabled = true;
}

// Apagar a lâmpada
function turnOff() {
  if (isLampBroken) return;

  lampImg.src = "https://img.icons8.com/ios/452/light-off.png";
  lampImg.style.transform = "scale(1)";
  lampImg.style.filter = "brightness(0.5)";
  isLampOn = false;

  // Altera o fundo para preto
  document.body.style.backgroundColor = "#000000";
  document.body.style.color = "#ffffff";

  document.getElementById('on-btn').disabled = false;
  document.getElementById('off-btn').disabled = true;
  document.getElementById('replace-btn').disabled = true;
}

// Quebrar a lâmpada
function breakLamp() {
  lampImg.src = "https://cdn-icons-png.flaticon.com/512/812/812926.png";
  lampImg.style.transform = "scale(1)";
  lampImg.style.filter = "brightness(0.5)";
  isLampOn = false;
  isLampBroken = true;

  // Adiciona efeito de "shake" ao quebrar a lâmpada
  lampImg.style.animation = "shake 0.5s ease-in-out";

  document.getElementById('on-btn').disabled = true;
  document.getElementById('off-btn').disabled = true;
  document.getElementById('replace-btn').disabled = false;

  console.log("A lâmpada quebrou!");
}

// Trocar a lâmpada
function replaceLamp() {
  lampImg.src = "https://img.icons8.com/ios/452/light-off.png";
  lampImg.style.transform = "scale(1)";
  lampImg.style.filter = "brightness(0.5)";
  isLampOn = false;
  isLampBroken = false;
  toggleCount = 0;

  // Resetar fundo
  document.body.style.backgroundColor = "";
  document.body.style.color = "#ffffff";

  document.getElementById('on-btn').disabled = false;
  document.getElementById('off-btn').disabled = true;
  document.getElementById('replace-btn').disabled = true;

  // Animação de brilho ao trocar a lâmpada
  document.getElementById('replace-btn').style.animation = "pulse 1s infinite";
}

// Clicar na lâmpada para quebrar
function clickLamp() {
  if (!isLampBroken) {
    breakLamp();
  }
}
