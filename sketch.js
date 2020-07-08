var movingRect, fixedRect;

function setup() {
  createCanvas(1200,800);

  movingRect=createSprite(600,200,80,30);
  movingRect.shapeColor="green";
  fixedRect=createSprite(400,200,50,80);
  fixedRect.shapeColor="green";
  movingRect.debug=true;
  fixedRect.debug=true;
}

function draw() {
  background(0,0,0);  

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 
    && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 
    && movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
    && fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
    
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
    
  }
else {
  movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
}
  drawSprites();
}