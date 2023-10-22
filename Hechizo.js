class hechizo {

  //variables
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.tam = 20;
    this.vel = 6;
    this.disparada = false;
    this.sprite = [];
    this.miPreload();
    this.numImg = round(random(0, 2));
  }

  //vuelve la variable disparada = true, posibilitando que se dibuje el hechizo
  disparo() {
    this.disparada = true;
  }

  //se mueve hacia arriba, cuando pasa el límite de la pantalla, se destruye
  moverse() {
    this.posY -= this.vel;

    if (this.posY <= 0) {
      this.disparada = false;
    }
  }

  dibujar() {
    //solo se dibuja si disparada = true
    if (this.disparada) {
      fill(106, 195, 230);
      ellipse(this.posX, this.posY, this.tam, this.tam);
      image(this.sprite[this.numImg], this.posX, this.posY);
      this.moverse();
    }
  }

  //carga imagenes
  miPreload() {
    for (let i = 0; i < 3; i++) {
      this.sprite.push(loadImage('assets/hechizo0' + i + '.png'));
    }
  }
}
