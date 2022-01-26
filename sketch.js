var bg,bgImage;
var snowflake,snowflakeImage;
var snowflake2,snowflake2Image;


function setup() {
  createCanvas(800,400);
 c1= createSprite(200,200)
 c1.addImage(s1)
 c1.scale = 0.1;
   character= createSprite(400, 200);
  character.addImage(character1)
  character.scale = 0.1;
}

function draw() {
  background(bg);  
  if(keyDown("LEFT_ARROW")){ 
    character.x = character.x -2; }
 if(keyDown("RIGHT_ARROW")){ 
      character.x = character.x +2; }
  drawSprites();
}

function preload () {
  bg =loadImage("snow1.jpg");
  character1= loadImage("boy.png");
  s1= loadImage("snow5.webp");
  s2= loadImage("snow4.webp");


}
function frameCount() {
  if (frameCount % 20 === 0) {
    snowflake = createSprite(random(100, 1000), 0, 100, 100);
    snowflake.velocityY = 10;
    var rand = Math.round(random(1,2));
    switch(rand){
        case 1: snowflake.addImage("snow4",s2_img);
        break;
        case 2: snowflake.addImage("snow5", s1_img);
        break;
    }
    snowflakeGroup.add(snowflake);
  }   
}
  
