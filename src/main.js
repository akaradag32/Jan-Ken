window.addEventListener('load', function () {
  const selectors = {
    startButton: this.document.querySelector('#start-button'),
  };

  function startGame() {
    debugger;
    game = new Game();
    game.start();
  }

  selectors.startButton.addEventListener('click', startGame);
});
