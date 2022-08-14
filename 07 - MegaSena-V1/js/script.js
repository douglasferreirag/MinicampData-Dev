var state = { board: [], currentGame: [], savedGames: [] };

function start() {
  addNumberToGame(1);
  addNumberToGame(2);
  addNumberToGame(3);
  addNumberToGame(4);
  addNumberToGame(5);
  saveGame();
  addNumberToGame(6);
  saveGame();
  saveGame();
  console.log(state.currentGame);
  console.log(state.savedGames);
}

function addNumberToGame(numberToAdd) {
  if (numberToAdd < 1 || numberToAdd > 60) {
    console.error('Número inválido', numberToAdd);
    return;
  }
  if (state.currentGame.length >= 6) {
    console.error('O jogo está completo.');
    return;
  }

  if (isNumberInGame(numberToAdd)) {
    console.error('Este número já está no jogo', numberToAdd);
    return;
  }

  state.currentGame.push(numberToAdd);
}

function removeNumberFromGame(numberToRemove) {
  if (numberToRemove < 1 || numberToRemove > 60) {
    console.error('Número inválido', numberToRemove);
    return;
  }

  var newGame = [];

  for (var i = 0; i < state.currentGame.length; i++) {
    var currentNumber = state.currentGame[i];

    if (currentNumber === numberToRemove) {
      continue;
    }

    newGame.push(currentNumber);
  }

  state.currentGame = newGame;
}

function saveGame() {
  if (!isGameComplete()) {
    console.error('O jogo não está completo!');
    return;
  }

  state.savedGames.push(state.currentGame);
}

function isGameComplete() {
  return state.currentGame.length === 6;
}

function isNumberInGame(numberToCheck) {
  /*if (states.currentGame.includes(numberToCheck)) {
    return true;
  }*/

  return state.currentGame.includes(numberToCheck);
}

start();
