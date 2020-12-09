var fixed,moving;

function setup() {
  createCanvas(800,400);
  
  fixed=createSprite(300, 200, 50, 50);
  fixed.shapeColor="green";
  moving=createSprite(400,200,60,60);
  moving.shapeColor="green";
}

function draw() {
  background("black");  
  moving.x=World.mouseX;
  moving.y=World.mouseY;

  console.log(moving.x-fixed.x)

  if(moving.x-fixed.x<moving.width/2+fixed.width/2 && fixed.x-moving.x<moving.width/2+fixed.width/2 && 
    moving.y-fixed.y<moving.height/2+fixed.height/2 && fixed.y-moving.y<moving.height/2+fixed.height/2){ 
    fixed.shapeColor="red";
  }
  else{
    fixed.shapeColor="green"
  }

  drawSprites();
}