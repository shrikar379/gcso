var thickness,wall;
var weight,speed,bullet;

function setup() {
  createCanvas(1600,400);

  weight = random(30,52);
  speed = random(223,321);
  bullet = createSprite(100,200,20,20);                         
 
  thickness= random(22,83);
  wall = createSprite(1200,200,thickness,height/2);

}

function draw() {
  background(0);

  bullet.velocityX = speed;

  if(hascollided){
  bullet.velocityX=0;
  var damage = 0.5 *weight*speed*speed/(thickness * thickness *thickness);

  
 
  if(damage>10){
    wall.shapeColor=color(0,255,0);
  }
  if(damage<10){
    wall.shapeColor=color(230,230,0);
  }

}

 
  drawSprites();

}
function hascollided(lbullet,lwall){
  bulletRightEdge=lbullet.x + lbullet.width; 
  wallLeftEdge=lwall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}