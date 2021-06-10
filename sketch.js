
var maze,mazeImg;
var pointer,pointerImg;
var tile,tileImg;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21;
var gameOver,gameOverImg;
var win,winImg;
var sprite;


function preload(){

mazeImg=loadImage("maze 1.png");
pointerImg=loadImage("star.png"); 
tileImg = loadImage("GREY.JPG"); 
gameOverImg=loadImage("game_over.png");  
winImg  =loadImage("youWin.jpeg");

}

function setup() {
  createCanvas(400, 400);
  maze = createSprite(200,200);
  maze.addImage(mazeImg);
  maze.scale=0.14;
  maze.depth=-2;

  
  pointer = createSprite(67,372);
  pointer.addImage(pointerImg);
  pointer.scale=0.10;
  
   
  tile = createSprite(67,382);
  tile.addImage(tileImg);
  tile.scale=1.3;
  tile.depth=-2;
  
  sprite = createSprite(355,32,6,5);
  sprite.visible=false;
  
  
  
  b1 = createSprite(44,200,3,400);
  b1.visible=false;
  b2 = createSprite(200,10,400,1);
  b2.visible=false;
  b3 = createSprite(210,54,240,1);
  b3.visible=false;
  b4 = createSprite(105,94,135,1);
  b4.visible=false;
  b5 = createSprite(360,200,1,400);
  b5.visible=false;
  b6 = createSprite(340,222,1,340);
  b6.visible=false;
  b7 = createSprite(235,390,300,1);
  b7.visible=false;
  b7 = createSprite(87,322,1,110);
  b7.visible=false;
  b8 = createSprite(298,155,1,127);
  b8.visible=false;
  b9 = createSprite(255,116,1,127);
  b9.visible=false;
  b10 = createSprite(213,155,1,120);
  b10.visible=false;
  b11 = createSprite(213,365,1,127);
  b11.visible=false;
  b12 = createSprite(170,305,1,87);
  b12.visible=false;
  b13 = createSprite(255,305,1,87);
  b13.visible=false;
  b14 = createSprite(298,325,1,127);
  b14.visible=false;
  b15 = createSprite(129,285,1,127);
  b15.visible=false;
  b16 = createSprite(125,220,180,1);
  b16.visible=false;
  b17 = createSprite(297,220,84,1);
  b17.visible=false;
  b18= createSprite(234,263,124,1);
  b18.visible=false;
  b19 = createSprite(90,180,94,1);
  b19.visible=false;
  b20 = createSprite(170,200,1,40);
  b20.visible=false;
  b21 = createSprite(150,137,124,1);
  b21.visible=false;
  

}


  

function draw() {
  background(220);
  
  pointer.velocityX=0;
  pointer.velocityY=0;
  
  
     
  if(keyDown("UP_ARROW")){
    
    pointer.velocityY=-3;
    
  }
  
   if(keyDown("DOWN_ARROW")){
    
    pointer.velocityY=3;
    
  }
  
   if(keyDown("RIGHT_ARROW")){
    
    pointer.velocityX=3;
    
  }
  
   if(keyDown("LEFT_ARROW")){
    
    pointer.velocityX=-3;
    
  }
  
  
 
  if((pointer.isTouching(b1) ||pointer.isTouching(b2) ||
  pointer.isTouching(b3))    ||pointer.isTouching(b4) ||
  pointer.isTouching(b5)     ||pointer.isTouching(b6) ||
  pointer.isTouching(b7)     ||pointer.isTouching(b8) ||
  pointer.isTouching(b9)     ||pointer.isTouching(b10)||
  pointer.isTouching(b11)    ||pointer.isTouching(b12)||
  pointer.isTouching(b13)    ||pointer.isTouching(b14)||
  pointer.isTouching(b15)    ||pointer.isTouching(b16)||
  pointer.isTouching(b17)    ||pointer.isTouching(b18)||
  pointer.isTouching(b19)     ||pointer.isTouching(b20)||
  pointer.isTouching(b21)){
    
    
    
     pointer.velocityX=0;
  pointer.velocityY=0;
    
      gameOver=createSprite(200,200);
  gameOver.addImage(gameOverImg);
  gameOver.scale=0.09;
  
  
  }
  if(pointer.isTouching(sprite)){
     win = createSprite(200,200);
     win.addImage(winImg);
     win.scale=0.3;
     pointer.velocityX=0;
     pointer.velocityY=0;
    
  }
  
  drawSprites();

}
