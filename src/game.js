class Game {
  constructor() {
    this.startScreen = document.querySelector('#game-intro');
    this.scoreContainer = document.querySelector('#game-container > div');
    this.gameScreen = document.querySelector('#game-screen');
    this.gameEndScreenLoose = document.querySelector('#game-end-loose');
    this.gameEndScreenWin = document.querySelector('#game-end-win');
    this.audioLoop = document.querySelector('#myAudioLoop');
    this.winAudio = document.querySelector('#winAudio');
    this.looseAudio = document.querySelector('#looseAudio');
    this.lifeLostAudio = document.querySelector('#lifeLostAudio');
    this.crushRockAudio = document.querySelector('#crushRockAudio');
    this.crushScissorsAudio = document.querySelector('#crushScissorsAudio');
    this.crushPaperAudio = document.querySelector('#crushPaperAudio');
    this.player = new Player(this.gameScreen, 210, 80, 100);
    this.obstacles = [];
    this.bullets = [];
    this.animateId = 0;
    this.score = 0;
    this.lives = 3;
    this.isShooting = false;
    this.gameSpeed = 0;
  }

  start() {
    this.startScreen.style.display = 'none';
    this.gameScreen.style.display = 'block';
    this.scoreContainer.classList.add('score');

    this.gameLoop();

    this.audioLoop.loop = true;
    this.audioLoop.play();
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

    if (this.animateId % (100 - this.gameSpeed) === 0) {
      if (this.gameSpeed < 20) {
        setTimeout(() => {
          this.gameSpeed += 2;
        }, 10);
      }
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
      this.gameScreen.style.display = 'none';
      this.gameEndScreenLoose.style.display = 'block';
      this.audioLoop.pause();
      this.looseAudio.play();
    } else if (this.score === 5) {
      this.gameScreen.style.display = 'none';
      this.gameEndScreenWin.style.display = 'block';
      this.audioLoop.pause();
      this.winAudio.play();
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
          this.score += 1;

          switch (obstacle.type) {
            case 1:
              this.crushRockAudio.play();
              break;
            case 2:
              this.crushPaperAudio.play();
              break;
            case 3:
              this.crushScissorsAudio.play();
              break;

            default:
              break;
          }
          bullet.element.remove();
          obstacle.element.remove();
          obstacle.crushed = true;
        } else {
          nextBullets.push[bullet];
        }
      });

      if (obstacle.left < 0) {
        this.lives -= 1;
        this.lifeLostAudio.pause();
        this.lifeLostAudio.currentTime = 0;
        this.lifeLostAudio.play();
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
