class Element {
  constructor(gameScreen, type, direction, top) {
    this.gameScreen = gameScreen;
    this.type = type;
    this.direction = direction;
    this.top = top;
    this.height = 60;
    this.width = 60;
    this.left = this.gameScreen.clientWidth - this.width;

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
    this.left -= 1;
  }

  didCollide() {}
}
