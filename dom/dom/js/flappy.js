function newElement(tagName, className) {
  const elem = document.createElement(tagName);
  elem.className = className;
  return elem;
}

function Barreira(reverse = false) {
  this.element = newElement('div', 'barreira');

  const borda = newElement('div', 'borda');
  const corpo = newElement('div', 'corpo');

  this.element.appendChild(reverse ? corpo : borda);
  this.element.appendChild(reverse ? borda : corpo);

  this.setHeight = height => corpo.style.height = `${height}px`;
}

function ParDeBarreiras(height, abertura, x) {
  this.element = newElement('div', 'par-de-barreiras');

  this.superior = new Barreira(true);
  this.inferior = new Barreira(false);

  this.element.appendChild(this.superior.element);
  this.element.appendChild(this.inferior.element);

  this.sortearAbertura = () => {
    const alturaSuperior = Math.random() * (height - abertura);
    const alturaInferior = height - abertura - alturaSuperior;
    this.superior.setHeight(alturaSuperior);
    this.inferior.setHeight(alturaInferior);
  }

  this.getX = () => parseInt(this.element.style.left.split('px')[0]);
  this.setX = x => this.element.style.left = `${x}px`;
  this.getWidth = () => this.element.clientWidth;

  this.sortearAbertura();
  this.setX(x);
}

function Barreiras(height, width, abertura, space, notifyPoint) {
  this.pares = [
    new ParDeBarreiras(height, abertura, width),
    new ParDeBarreiras(height, abertura, width + space),
    new ParDeBarreiras(height, abertura, width + space * 2),
    new ParDeBarreiras(height, abertura, width + space * 3),
  ];

  const deslocamento = 4;
  this.animation = () => {
    this.pares.forEach(par => {
      par.setX(par.getX() - deslocamento);
      // when element is out of the screen
      if (par.getX() < -par.getWidth()) {
        par.setX(par.getX() + space * this.pares.length);
        par.sortearAbertura();
      }

      const middle = width / 2;
      const cruzouMeio = par.getX() + deslocamento >= middle
        && par.getX() < middle;
      if (cruzouMeio) notifyPoint();
    })
  }
}

function Bird(gameHeight) {
  let flying = false;

  this.element = newElement('img', 'passaro');
  this.element.src = 'imgs/passaro.png';

  this.getY = () => parseInt(this.element.style.bottom.split('px')[0]);
  this.setY = y => this.element.style.bottom = `${y}px`;

  window.onkeydown = e => flying = true;
  window.onkeyup = e => flying = false;

  this.animation = () => {
    const newY = this.getY() + (flying ? 7 : -5);
    const maxHeight = gameHeight - this.element.clientWidth;

    if (newY <= 0) {
      this.setY(0);
    } else if (newY >= maxHeight) {
      this.setY(maxHeight);
    } else {
      this.setY(newY);
    }
  }

  this.setY(gameHeight / 2);
}

function Progress() {
  this.element = newElement('span', 'progresso');
  this.updatePoints = points => {
    this.element.innerHTML = points;
  }
  this.updatePoints(0);
}

function isOverlaid(elementA, elementB) {
  const a = elementA.getBoundingClientRect();
  const b = elementB.getBoundingClientRect();

  const horizontal = a.left + a.width >= b.left
    && b.left + b.width >= a.left;
  const vertical = a.top + a.height >= b.top
    && b.top + b.height >= a.top;

  return horizontal && vertical;
}

function crashed(bird, barreiras) {
  let crashed = false;
  barreiras.pares.forEach(par => {
    if (!crashed) {
      const superior = par.superior.element;
      const inferior = par.inferior.element;

      crashed = isOverlaid(bird.element, superior)
        || isOverlaid(bird.element, inferior);
    }
  });
  return crashed;
}

function FlappyBird() {
  let points = 0;

  const gameArea = document.querySelector('[wm-flappy]');
  const height = gameArea.clientHeight;
  const width = gameArea.clientWidth;

  const progress = new Progress();
  const barreiras = new Barreiras(height, width, 200, 400, () => {
    progress.updatePoints(++points);
  })
  const bird = new Bird(height);

  gameArea.appendChild(progress.element);
  gameArea.appendChild(bird.element);
  barreiras.pares.forEach(par => gameArea.appendChild(par.element))

  this.start = () => {
    const timer = setInterval(() => {
      barreiras.animation();
      bird.animation();

      if (crashed(bird, barreiras)) {
        clearInterval(timer);
      }
    }, 20);
  }
}

new FlappyBird().start();