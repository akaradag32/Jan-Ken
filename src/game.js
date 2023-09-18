class Game {
  constructor() {
    this.introPage = document.querySelector('#game-intro');
    this.scoreContainer = document.querySelector('#game-container > div');
    this.gamePage = document.querySelector('#game-screen');
    this.endPage = document.querySelector('#game-end');
    this.player = new Player(this.gamePage, 210, 80, 100);
  }

  start() {
    console.log('Game Starts');
    this.introPage.style.display = 'none';
    this.gamePage.style.display = 'block';
    this.scoreContainer.classList.add('score');
  }
}
