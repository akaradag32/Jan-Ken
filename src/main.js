window.addEventListener('load', function () {
  const selectors = {
    startButton: this.document.querySelector('#start-button'),
  };

  function startGame() {
    game = new Game();
    game.start();
  }

  selectors.startButton.addEventListener('click', startGame);

  document.addEventListener('keydown', (event) => {
    let key = event.code;

    switch (key) {
      case 'KeyA':
        break;
      case 'KeyS':
        break;
      case 'KeyD':
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
