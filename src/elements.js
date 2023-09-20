class Element {
  constructor(gameScreen, type, direction, top) {
    this.gameScreen = gameScreen;
    this.type = type;
    this.direction = direction;
    this.top = top;
    this.height = 60;
    this.width = 60;
    this.crushed = false;
    this.left =
      this.direction === 1 ? 0 : this.gameScreen.clientWidth - this.width;

    this.element = document.createElement('img');

    this.element.style.position = 'absolute';
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;

    this.gameScreen.appendChild(this.element);

    switch (type) {
      case 1:
        this.element.src = './images/rock.png';
        break;
      case 2:
        this.element.src = './images/paper.png';
        break;
      case 3:
        this.element.src = './images/scissors.png';
        break;

      default:
        this.element.src = './images/rock.png';
        break;
    }
  }

  move() {
    this.updatePosition();
    this.element.style.left = `${this.left}px`;
  }

  updatePosition() {
    if (this.direction === 1) {
      this.left += 3;
    } else {
      this.left -= 3;
    }
  }

  didCollide(bullet, obstacle) {
    const bulletRect = bullet.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      ((bullet.type === 1 && obstacle.type === 3) ||
        (bullet.type === 2 && obstacle.type === 1) ||
        (bullet.type === 3 && obstacle.type === 2)) &&
      bulletRect.left < obstacleRect.right &&
      bulletRect.right > obstacleRect.left &&
      bulletRect.top < obstacleRect.bottom &&
      bulletRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
