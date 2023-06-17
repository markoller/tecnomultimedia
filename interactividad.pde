void keyPressed(){
 if(key == '1'){
  c1 = color(random(0, 255), random(0, 255), random(0, 255));
 }
 if(key == '2'){
  c2 = color(random(0, 255), random(0, 255), random(0, 255));
 }
 if(key == '3'){
  c3 = color(random(0, 255), random(0, 255), random(0, 255));
 }
 if(key == '4'){
  c4 = color(random(0, 255), random(0, 255), random(0, 255));
 }
 if(key == '5'){
  c5 = color(random(0, 255), random(0, 255), random(0, 255));
 }
 if(key == '6'){
  c6 = color(random(0, 255), random(0, 255), random(0, 255));
 }
}

void mousePressed(){
  if(dist(mouseX, mouseY, 50, 360) < 50/2){
    c1= color(114, 153, 93);
    c2 = color(35, 148, 157);
    c3 = color(192, 25, 39);
    c4 = color(68, 148, 133);
    c5 = color(231, 156, 76);
    c6 = color(253, 84, 19);
  }
}
