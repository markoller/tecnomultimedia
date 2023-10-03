class Pez {
  constructor() {
    this.tam = random(20, 50);
    this.x = random(100, width);
    this.y = random(this.tam, 500 - this.tam);
    this.c = random(200);
    this.vel = random(1, 6);
    this.dire = 1;
  }

  nadar() {
    this.x += this.vel * this.dire;


    if (this.x > width - this.tam) {
      this.dire = -1;
    } else if (this.x < 0) {
      this.dire = 1;
    }
  }

//si una mantaraya se acerca demasiado al pez, va a aumentar su velocidad y esconderse
//en los corales

  //escapar() {
  //  d = dist(this.x, this.y, this.Mantaraya.x, this.Mantaraya.y);
  //  if (d < 60) {
  //    this.vel =+ 2;
  //    this.y = random(500, width);
  //  }
  //}
  
  
  //solo podrá comer los corales comestibles o peces más pequeños
  //comer(){
  
  //}
  
  
  //si dos peces están más de 5 segundos en los corales, surgirá un nuevo pez
  //reproducirse(){
  //this.y = random(500, width);
  
  //}

  dibujar() {
    fill(this.c);
    rect(this.x, this.y, this.tam, this.tam);
  }
}
