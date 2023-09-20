class Game {
  constructor() {
    this.startScreen = document.querySelector('#game-intro');
    this.scoreContainer = document.querySelector('#game-container > div');
    this.gameScreen = document.querySelector('#game-screen');
    this.gameEndScreen = document.querySelector('#game-end');
    this.player = new Player(this.gameScreen, 210, 80, 100);
    this.obstacles = [];
    this.bullets = [];
    this.animateId = 0;
    this.score = 0;
    this.lives = 3;
    this.gameOver = false;
    this.isShooting = false;
  }

  start() {
    //console.log('Game Starts');
    this.startScreen.style.display = 'none';
    this.gameScreen.style.display = 'block';
    this.scoreContainer.classList.add('score');

    this.gameLoop();
  }

  shoot(elementId, top) {
    if (!this.isShooting) {
      this.bullets.push(new Element(this.gameScreen, elementId, 1, top));
      this.isShooting = true;
      setTimeout(() => {
        this.isShooting = false;
      }, 500);
    }
  }

  gameLoop() {
    this.update();

    if (this.animateId % 100 === 0) {
      //console.log('Entered the animation');
      this.obstacles.push(
        new Element(
          this.gameScreen,
          Math.floor(Math.random() * 3) + 1,
          -1,
          Math.floor(Math.random() * 6) * 100 + 20
        )
      );
    }

    document.getElementById('score').innerText = this.score;
    document.getElementById('lives').innerText = this.lives;

    if (this.lives < 1) {
      this.gameOver = true;
    }

    if (this.gameOver) {
      this.gameScreen.style.display = 'none';
      this.gameEndScreen.style.display = 'block';
    } else {
      this.animateId = requestAnimationFrame(() => this.gameLoop());
    }
  }

  update() {
    const nextObstacles = [];
    const nextBullets = [];

    this.bullets.forEach((bullet) => {
      bullet.move();
    });

    this.obstacles.forEach((obstacle) => {
      obstacle.move();

      this.bullets.forEach((bullet) => {
        if (bullet.didCollide(bullet, obstacle)) {
          //console.log('[-----------Collide--------------]');
          bullet.element.remove();
          obstacle.element.remove();
          obstacle.crushed = true;
        } else {
          nextBullets.push[bullet];
        }
      });

      if (obstacle.left < 0) {
        this.lives -= 1;
        obstacle.element.remove();
      } else {
        if (!obstacle.crushed) {
          nextObstacles.push(obstacle);
        }
      }
    });

    this.obstacles = nextObstacles;
  }
}
