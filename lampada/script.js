const lampImg = document.getElementById('lamp-img');
const onSound = document.getElementById('on-sound');
const offSound = document.getElementById('off-sound');
const breakSound = document.getElementById('break-sound');

let isLampOn = false;
let isLampBroken = false;
let toggleCount = 0; // Contador para rastrear o número de vezes que a lâmpada foi ligada/desligada


// Função para acender a lâmpada
function turnOn() {
  if (isLampBroken) return; // Se a lâmpada estiver quebrada, não acende

  lampImg.src = "https://img.icons8.com/ios/452/light-on.png";
  lampImg.style.transform = "scale(1.1)";
  lampImg.style.filter = "brightness(1)";
  isLampOn = true;

  toggleCount++; // Incrementa o contador quando a lâmpada é ligada

  // Se a lâmpada foi ligada/desligada 5 vezes, quebra a lâmpada
  if (toggleCount >= 7) {
    breakLamp();
    return;
  }

  document.getElementById('on-btn').disabled = true;
  document.getElementById('off-btn').disabled = false;
  document.getElementById('break-btn').disabled = false;
  console.log(`Lâmpada ligada/desligada ${toggleCount} vez(es)`);
}

// Função para apagar a lâmpada
function turnOff() {
  if (isLampBroken) return; // Se a lâmpada estiver quebrada, não apaga

  lampImg.src = "https://img.icons8.com/ios/452/light-off.png";
  lampImg.style.transform = "scale(1)";
  lampImg.style.filter = "brightness(0.5)";
  isLampOn = false;

  document.getElementById('on-btn').disabled = false;
  document.getElementById('off-btn').disabled = true;
  document.getElementById('break-btn').disabled = false;
  console.log(`Lâmpada ligada/desligada ${toggleCount} vez(es)`);
}

// Função para quebrar a lâmpada
function breakLamp() {
  lampImg.src = "https://cdn-icons-png.flaticon.com/512/812/812926.png";
  lampImg.style.transform = "scale(1)";
  lampImg.style.filter = "brightness(0.5)";

  isLampOn = false;
  isLampBroken = true;

  document.getElementById('on-btn').disabled = true;
  document.getElementById('off-btn').disabled = true;
  document.getElementById('break-btn').disabled = true;
  document.getElementById('replace-btn').disabled = false;

  console.log("A lâmpada quebrou!");
}

// Função para trocar a lâmpada
function replaceLamp() {
  lampImg.src = "https://img.icons8.com/ios/452/light-off.png";
  lampImg.style.animation = "none";
  lampImg.style.transform = "scale(1)";
  lampImg.style.filter = "brightness(0.5)";
  isLampOn = false;
  isLampBroken = false;

  toggleCount = 0; // Reseta o contador de liga/desliga quando a lâmpada é substituída

  document.getElementById('on-btn').disabled = false;
  document.getElementById('off-btn').disabled = true;
  document.getElementById('break-btn').disabled = false;
  document.getElementById('replace-btn').disabled = true;
}
