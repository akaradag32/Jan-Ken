window.addEventListener('load', function () {
  const selectors = {
    startButton: this.document.querySelector('#start-button'),
    restartButton: this.document.querySelector('.restart-button'),
    restartButtonWin: this.document.querySelector('.restart-button-win'),
  };

  function startGame() {
    game = new Game();
    game.start();
  }

  selectors.startButton.addEventListener('click', startGame);
  selectors.restartButton.addEventListener('click', function () {
    window.location.reload();
  });
  selectors.restartButtonWin.addEventListener('click', function () {
    window.location.reload();
  });

  document.addEventListener('keydown', (event) => {
    let key = event.code;

    switch (key) {
      case 'KeyA':
        game.shoot(1, game.player.topPosition());
        break;
      case 'KeyS':
        game.shoot(2, game.player.topPosition());
        break;
      case 'KeyD':
        game.shoot(3, game.player.topPosition());
        break;
      case 'ArrowUp':
        game.player.directionY = -100;
        game.player.move();
        break;
      case 'ArrowDown':
        game.player.directionY = 100;
        game.player.move();
        break;

      default:
        break;
    }
  });
});
