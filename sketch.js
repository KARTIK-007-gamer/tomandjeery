var tom,tomImg;
var jerry,jerryImg;
var garden,gardenImg;

function preload() {
    //load the images here
 tomImg.loadAnimation("tomOne.png","tomTwo.png","tomThree.png");
 jerryImg.loadAnimation("jerryOne.png","jerryTwo.png","jerryThree.png");
 gardenImg.loadAnimation("garden.png");   
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(200,200,20,20);
    jerry=createSprite(200,200,30,30);
 
}

function draw() {

     background(255);
    //Write condition here to evalute if tom and jerry collide
      
  




    drawSprites();
}


function keyPressed(){
    if (keyCode === LEFT_ARROW){
        tom.velocityX = -5;
        tom.addAnimation("tomRunning",tomTwo.png);
        tom.changeAnimation("tomRunning");
    }
  
text(jerryX+','+jerryY,10,45);

}
