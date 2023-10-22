class exorcista {

  //variables
  constructor() {
    this.posX = width/2;
    this.posY = height/2 + 190;
    this.tam = 40;
    this.vida = 3;
    this.vel = 3;
    this.hech = [];
    this.hechizosLanzados = 0;
    this.contadorhech = 0;
    this.puedeLanzarHechizo = true;
    this.sprite = [];
    this.municion = [];
    this.miPreload();
    this.numImg = 0;
  }

  //se hacen los cálculos para saber si puede tirar hechizos o no, si tiró más de 8 hechizos
  //se activa un contador que funciona como una recarga, luego  se reinician la cantidad de hechizos
  actualizar() {
    if (!this.puedeLanzarHechizo) {
      this.contadorhech++;

      if (this.contadorhech >= 180) {
        this.puedeLanzarHechizo = true
          this.hechizosLanzados = 0;
      }
    }
  }

  //solo se lanzan hechizos si tiro menos de 8
  lanzarHechizo() {
    if (this.puedeLanzarHechizo) {
      this.hech.push(new hechizo(this.posX, this.posY));
      this.hech[this.hech.length - 1].disparo();
      this.hechizosLanzados++;

      if (this.hechizosLanzados >= 8) {
        this.puedeLanzarHechizo = false;
        this.contadorhech = 0;
      }
    }
  }

  //si un alma infernal lo toca, pierde una vida
  quitarVida() {
    this.vida--;
  }


  dibujar() {
    //dibuja los hechizos por debajo de la imagen del exorcista
    for (let i = 0; i < this.hech.length; i++) {
      this.hech[i].dibujar();
    }

    image(this.sprite[this.numImg], this.posX, this.posY);

    //imagenes que indican si el exorcista puede tirar hechizos o no
    if (this.puedeLanzarHechizo == true) {
      image(this.municion[0], 720, 550);
    } else if (this.puedeLanzarHechizo == false) {
      image(this.municion[1], 720, 550);
    }
  }

  mover(keyCode) {
    if (keyCode == RIGHT_ARROW) {
      this.numImg = 1;
      this.posX += this.tam;
    } else if (keyCode == LEFT_ARROW) {
      this.numImg = 2;
      this.posX -= this.tam;
    } else if (keyCode == UP_ARROW) {
      this.numImg = 3;
      this.lanzarHechizo();
    }
  }

  //carga de imagenes
  miPreload() {
    for (let i = 0; i < 4; i++) {
      this.sprite.push(loadImage('assets/exorcista0' + i + '.png'));
    }

    for (let i = 0; i < 2; i++) {
      this.municion.push(loadImage('assets/municion0' + i + '.png'));
    }
  }

  //si el juego termina, se reinician las variables del exorcista
  reiniciarExorcista() {
    this.posX = width/2;
    this.posY = height/2 + 190;
    this.tam = 40;
    this.vida = 3;
    this.vel = 3;
    this.hech = [];
    this.hechizosLanzados = 0;
    this.contadorhech = 0;
    this.puedeLanzarHechizo = true;
    this.numImg = 0;
  }
}
