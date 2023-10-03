class Mantaraya {

  constructor() {
    this.tam = random(40, 80);
    this.x = random(0, width - (this.tam * 2));
    this.y = random(this.tam, 500 - this.tam);
    this.c = random(10, 100);
    this.vel = random(1, 4);
    this.dire = 1;
    this.daño = false;
  }

  nadar() {
    this.x += this.vel * this.dire;

    if (this.x > width - this.tam) {
      this.dire = -1;
    } else if (this.x < 0) {
      this.dire = 1;
    }
  }
  
  //come peces más chicos que ella al estar muy cerca por más de 5 sg
  //comer(){
  
  //}
  
  //seguirá a un pez hasta lograr comerlo o hasta que este se esconda en los corales
  //perseguir(){
  
  //}


  dibujar() {
    fill(this.c);
    rect(this.x, this.y, this.tam*2, this.tam);
  }
}
