var state = { board: [], currentGame: [], savedGames: [] };

function start() {
  createBoard();
  newGame();
}

function createBoard() {
  state.board = [];

  for (var i = 1; i <= 60; i++) {
    state.board.push(i);
  }
}

function newGame() {
  reseteGame();
  render();
  console.log(state.currentGame);
}

function render() {
  renderBoard();
  renderButtons();
  renderSavedGames();
}

function renderBoard() {
  var divBoard = document.querySelector('#megasena-board');
  divBoard.innerHTML = '';
  var ulNumbers = document.createElement('ul');
  for (var i = 0; i < state.board.length; i++) {
    var currentNumber = state.board[i];
    var liNumber = document.createElement('li');
    liNumber.textContent = currentNumber;
    liNumber.addEventListener('click', handleNumberClick);
    ulNumbers.appendChild(liNumber);
  }
  divBoard.appendChild(ulNumbers);
}

function handleNumberClick(event) {
  var value = Number(event.currentTarget.textContent);
  if (isNumberInGame(value)) {
    removeNumberFromGame(value);
  } else {
    addNumberToGame(value);
  }
  console.log(state.currentGame);
}

function renderButtons() {
  var divButtons = document.querySelector('#megasena-buttons');

  divButtons.innerHTML = '';

  var buttonNewGame = createNewGameButton();

  divButtons.appendChild(buttonNewGame);
}

function createNewGameButton() {
  var button = document.createElement('button');

  button.textContent = 'Novo Jogo';

  button.addEventListener('click', newGame);

  return button;
}

function renderSavedGames() {}

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

function reseteGame() {
  state.currentGame = [];
}

start();
