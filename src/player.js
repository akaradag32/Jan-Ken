class Player {
  constructor(gameScreen, top, height, width) {
    this.gameScreen = gameScreen;
    this.left = 0;
    this.top = top;
    this.height = height;
    this.width = width;
    this.directionY = 0;
    this.element = document.createElement('img');

    this.element.src = './images/before-fire.png';

    this.element.style.position = 'absolute';
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;

    this.gameScreen.appendChild(this.element);
  }

  move() {
    this.updatePosition();
    this.element.style.top = `${this.top}px`;
  }

  updatePosition() {
    debugger;
    if (this.top < 10) {
      this.top = 10;
    } else if (this.top > this.gameScreen.clientHeight - 20 - this.height) {
      this.top = this.gameScreen.clientHeight - 20 - this.height;
    } else {
      this.top += this.directionY;
    }
  }
}
