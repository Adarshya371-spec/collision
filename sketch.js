var fixedRect, movingRect;
var car,wall;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(300,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car=createSprite(100,50,30,50);
  car.shapeColor="violet";
  car.debug=true;
car.velocityX=2;


  wall=createSprite(700,200,30,380);
  wall.shapeColor="orange";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  console.log(movingRect.x-fixedRect.x)

  if(isTouching(movingRect,wall)){
    movingRect.shapeColor = "brown";
    wall.shapeColor = "brown";
  }
  else{
  movingRect.shapeColor = "green";
wall.shapeColor = "green";
}

bounceOff(car,wall)

  drawSprites();
}

