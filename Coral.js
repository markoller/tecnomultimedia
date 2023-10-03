class Coral {
  constructor() {
    this.tam = random(30, 140);
    this.x = random(0, width - this.tam);
    this.y = height;
    this.c = random(190, 255);
    this.comestible = true;
    this.pinchar = false;
  }

  //despues de 15 segundos, el coral crecerá +10
  //crecer(){
  
  //}
  

  dibujar() {
    fill(this.c);
    triangle(this.x, this.y, this.x + this.tam, this.y, this.x + this.tam / 2, this.y - this.tam * 0.87);
  }
}
