PImage opart;


//verde
color c1= color(114, 153, 93);
//azul
color c2 = color(35, 148, 157);
//celeste
color c3 = color(192, 25, 39);
//rojo
color c4 = color(68, 148, 133);
//amarillo
color c5 = color(231, 156, 76);
//naranja
color c6 = color(253, 84, 19);

boolean dentroDelBoton(int x, int y, int r){
float dist = dist(mouseX, mouseY, x, y);
if(dist < r){
return true;
} else {
return false;
}
}
