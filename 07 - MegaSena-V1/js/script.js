var state = { board: [], currentGame: [], savedGames: [] };

function start() {
  addNumberToGame(1);
  addNumberToGame(2);
  addNumberToGame(3);
  addNumberToGame(4);
  addNumberToGame(5);
  addNumberToGame(60);
  addNumberToGame(59);
  addNumberToGame(59);
  addNumberToGame(59);
  addNumberToGame(59);
  addNumberToGame(59);
  addNumberToGame(59);
  addNumberToGame(59);
  addNumberToGame(59);
  addNumberToGame(62);
  console.log(state.currentGame);
}

function addNumberToGame(numberToAdd) {
  if (numberToAdd < 1 || numberToAdd > 60) {
    console.error('Número inválido', numberToAdd);
    return;
  }
  if (state.currentGame.length) {
    console.error('O jogo está completo.');
    return;
  }

  state.currentGame.push(numberToAdd);
}

start();
