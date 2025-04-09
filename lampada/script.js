const lampImg = document.getElementById('lamp-img');
const onSound = document.getElementById('on-sound');
const offSound = document.getElementById('off-sound');
const breakSound = document.getElementById('break-sound');
let isLampOn = false;
let isLampBroken = false;

// Função para acender a lâmpada
function turnOn() {
  if (isLampBroken) return; // Se a lâmpada estiver quebrada, não acende

  lampImg.src = "https://img.icons8.com/ios/452/light-on.png";
  lampImg.style.transform = "scale(1.1)";
  lampImg.style.filter = "brightness(1)";
  onSound.play();
  isLampOn = true;
  document.getElementById('on-btn').disabled = true;
  document.getElementById('off-btn').disabled = false;
  document.getElementById('break-btn').disabled = false;
}

// Função para apagar a lâmpada
function turnOff() {
  if (isLampBroken) return; // Se a lâmpada estiver quebrada, não apaga

  lampImg.src = "https://img.icons8.com/ios/452/light-off.png";
  lampImg.style.transform = "scale(1)";
  lampImg.style.filter = "brightness(0.5)";
  offSound.play();
  isLampOn = false;
  document.getElementById('on-btn').disabled = false;
  document.getElementById('off-btn').disabled = true;
  document.getElementById('break-btn').disabled = false;
}

// Função para quebrar a lâmpada
function breakLamp() {
  lampImg.src = "https://img.icons8.com/ios/452/broken-lamp.png";
  lampImg.style.animation = "breakEffect 1s forwards";
  breakSound.play();
  isLampOn = false;
  isLampBroken = true;
  document.getElementById('on-btn').disabled = true;
  document.getElementById('off-btn').disabled = true;
  document.getElementById('break-btn').disabled = true;
  document.getElementById('replace-btn').disabled = false;
}

// Função para trocar a lâmpada
function replaceLamp() {
  lampImg.src = "https://img.icons8.com/ios/452/light-off.png";
  lampImg.style.animation = "none";
  lampImg.style.transform = "scale(1)";
  lampImg.style.filter = "brightness(0.5)";
  isLampOn = false;
  isLampBroken = false;
  document.getElementById('on-btn').disabled = false;
  document.getElementById('off-btn').disabled = true;
  document.getElementById('break-btn').disabled = false;
  document.getElementById('replace-btn').disabled = true;
}

// Função para alternar o tema
function toggleTheme() {
  document.body.classList.toggle('light-theme');
}
