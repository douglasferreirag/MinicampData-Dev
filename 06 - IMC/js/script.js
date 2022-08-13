function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');

  buttonCalculateImc.addEventListener('click', handleButtonClick);
}

function handleButtonClick() {
  console.log('cliquei');
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

start();
