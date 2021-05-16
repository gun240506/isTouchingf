var fixedr
var movingr
function setup() {
  createCanvas(800,400);
 fixedr = createSprite(400, 200, 50, 50);
 movingr = createSprite(300,100,50,50);
}

function draw() {
  movingr.x = mouseX
  movingr.y = mouseY
  background(255,255,255);  
  if(movingr.x-fixedr.x<fixedr.width/2+movingr.width/2
    && fixedr.x-movingr.x<fixedr.width/2+movingr.width/2
    && movingr.y-fixedr.y<fixedr.height/2+movingr.height/2
    && fixedr.y-movingr.y<fixedr.height/2+movingr.height/2){
    fixedr.shapeColor = "blue"
    movingr.shapeColor = "blue"
  }
  else
{
  movingr.shapeColor = "green"
  fixedr.shapeColor = "green"
}
  drawSprites();
}