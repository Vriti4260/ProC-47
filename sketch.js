var Ria, Key, Chest, RiaImage, ground;
var bgGroup, bg, bg1, bg2, bg3, bg4;
var gameState=0;

function preload(){
bg1 = loadImage ("Images/Image1.jpg")
bg2 = loadImage ("Images/Image2.jpg")
bg3= loadImage ("Images/Image3.jpg")
bg4 = loadImage ("Images/Image4.jpg")
RiaImage = loadImage ("Images/Image5.png")
}

function setup() {
  createCanvas(1200,800);
  bg = createSprite(200,200,displayWidth,displayHeight);
  bg.addImage("bg1",bg1);
  bg.scale = 0.8;
  bg.velocityX = -2
  
  ground = createSprite(600,790,1200,10)
  
}


function draw() {
  background("black");
  drawSprites();
  text(mouseX+","+mouseY,mouseX,mouseY)
 
  if(gameState===0){
    fill("red")
    textSize(25);
    text("Find the treasure!!!!",260,53)

    fill("red")
    textSize(25);
    text("You have a map for the treasure. In order to get the treasure you need to solve 10 riddles .",61,83)

    fill("red")
    textSize(25);
    text("Remember you have only 1 chance per riddle and you have to answer more than 6 riddles",61,108)

    fill("red")
    textSize(25);
    text(" correctly or else you won't get the treasure. You will recieve the key of the treasure when",61,130)

    fill("red")
    textSize(25);
    text("you will get more than 6 correct answers.",61,150)

    fill("red")
    textSize(25);
    text("Press Enter to Continue.",61,253)
    if(keyDown("Enter")){
    gameState=1
    }
  }

  if(gameState===1){
  Ria = createSprite(86,784)
  Ria.addImage(RiaImage) 
  Ria.scale=0.5
  Ria.collide(ground)
  Ria.setCollider("circle",0,0,20);
}
}
/*function spawnBackground(){
  var rand = Math.round(random(1,4));
  switch(rand) {
    case 1: bg.addImage(bg1);
            break;
    case 2: bg.addImage(bg2);
            break;
    case 3: bg.addImage(bg3);
            break;
    case 4: bg.addImage(bg4);
            break;
    default: break;
  }
}*/ 
