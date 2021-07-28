var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var redGroup,blueGroup,greenGroup,pinkGroup,arrowGroup;


var score;


function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  
  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

  score = 0;

  redGroup = new Group();
  blueGroup = new Group();
  greenGroup = new Group();
  pinkGroup = new Group();
  arrowGroup = new Group();
  
  
  
}

function draw() {
 background(0);
 
 
 
  scene.velocityX = -3 

  

  if (scene.x < 0){
    scene.x = scene.width/2;
  }

  if (keyDown("space")) {
    createArrow();
    
  }

  bow.y = World.mouseY;
  

  redBalloon();
  blueBalloon();
  greenBalloon();
  pinkBalloon();

  
  if(arrowGroup.isTouching(redGroup)){
    redGroup.destroyEach();
    arrowGroup.destroyEach();
  }

  if(arrowGroup.isTouching(blueGroup)){
    blueGroup.destroyEach();
    arrowGroup.destroyEach();
    
  }

  if(arrowGroup.isTouching(greenGroup)){
    greenGroup.destroyEach();
    arrowGroup.destroyEach();
    
  }

  if(arrowGroup.isTouching(pinkGroup)){
    pinkGroup.destroyEach();
    arrowGroup.destroyEach();
    
  }

  drawSprites();

  text("Score: "+ score, 270,30);
 
  
  
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
}


function redBalloon() {
  if (World.frameCount % 100 == 0){
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redGroup.add(red);
  score = score + 3;
  }

  
  }


function blueBalloon() {
  if (World.frameCount % 150 == 0) {
 
  var blue = createSprite(0,Math.round(random(100, 300)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueGroup.add(blue);
  score = score + 4;
  
  }
}

function greenBalloon() {
  if (World.frameCount % 60 == 0) {
  
  var green = createSprite(0,Math.round(random(50, 250)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenGroup.add(green);
  score = score + 1;
  
  }
}

function pinkBalloon() {
  if (World.frameCount % 200 == 0) {
 
  var pink = createSprite(0,Math.round(random(10, 250)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1.3;
  pinkGroup.add(pink);
  score = score + 5;
  }
 
  }


