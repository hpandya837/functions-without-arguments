var fix
var moving
var square
var hi
function setup() {
  createCanvas(400,400);
 fix=createSprite(300,100,20,20)
 moving=createSprite(100,100,20,20)
 square=createSprite(200,200,20,20)
 hi=createSprite(100,300,20,20)
    }

function draw() {
  background(255,255,255);  
  drawSprites();
moving.x=mouseX
moving.y=mouseY

isTouching(moving,fix)
isTouching(moving,square)
isTouching(moving,hi)

}

 function isTouching(object1,object2){
  if(object1.x-object2.x< object1.width/2 + object2.width/2
    && object2.x-object1.x<object2.width/2+ object1.width/2
    && object1.y-object2.y<object1.height/2 + object2.height/2
    &&object2.y-object1.y< object2.height/2 + object1.height/2  ){
  
  object2.shapeColor="red"
  object1.shapeColor="blue"
  
  
    }
  





 }








