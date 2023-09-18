class Game {
  constructor() {
    this.introPage = document.querySelector('#game-intro');
    this.gamePage = document.querySelector('#game-screen');
    this.endPage = document.querySelector('#game-end');
  }

  start() {
    console.log('Game Starts');
    this.introPage.style.display = 'none';
    this.gamePage.style.display = 'block';
  }
}
