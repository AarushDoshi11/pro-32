var box1,box2,box3,box4,box5;
var music
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  music = loadSound("music.mp3");

  box1 = createSprite(180,500,100,20);
  box1.shapeColor  = "green";
  box1.debug = true;

  box2 = createSprite(60,500,100,20);
  box2.shapeColor  = "blue";
  box2.debug = true;

  box3 = createSprite(300,500,100,20);
  box3.shapeColor  = "red";
  box3.debug = true;

 box4 = createSprite(420,500,100,20);
 box4.shapeColor  = "yellow";
 box4.debug = true;

 box5 = createSprite(500,300,20,20);


 box5.debug = true;


}

function draw() {
  background("lightblue");
  
  box5.y = World.mouseY
  box5.x = World.mouseX


  if(box5.isTouching(box1)){
   box1.shapeColor = "green"
  }
  
  if(box5.isTouching(box2)){
      box2.shapeColor = "blue"
     }

     if(box5.isTouching(box3)){
      box3.shapeColor = "red"
     }

     if(box5.isTouching(box4)){
      box4.shapeColor = "green"
     }
  drawSprites();
}