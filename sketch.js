var movrect,fixedrect;
function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(600,400,50,80);
  fixedrect.shapeColor = "green";
fixedrect.debug = true;
movrect = createSprite(400,200,80,30);
  movrect.shapeColor = "green";
movrect.debug = true;
}

function draw() {
  background(0,0,0);
  movrect.x = World.mouseX;  
  movrect.y = World.mouseY;
  if(movrect.x - fixedrect.x < fixedrect.width/2 + movrect.width/2
    && fixedrect.x - movrect.x < fixedrect.width/2 + movrect.width/2
    && movrect.y - fixedrect.y < fixedrect.height/2 + movrect.height/2
    && fixedrect.y - movrect.y < fixedrect.height/2 + movrect.height/2) {
      fixedrect.shapeColor = "red";
      movrect.shapeColor = "red";
    } 
    else{
      fixedrect.shapeColor = "green";
      movrect.shapeColor = "green";
    }
  drawSprites();
}