var box;

function setup() {
  createCanvas(400,400);
  box= createSprite(40,90,70,92);

}

function draw() 
{
  background("yellow");
  
if (keyIsDown(RIGHT_ARROW)){
  box.x=box.x+5;
}
 
  if(keyIsDown(LEFT_ARROW)){
    box.x=box.x-2;
  }
  drawSprites ();
}




