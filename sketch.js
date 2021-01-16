var canvas;
var music;
var block1,block2,block3,block4,ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
  block1=createSprite(100,590,100,50);
  block1.shapeColor=rgb(73,38,40)
  block2=createSprite(200,590,100,50);
  block2.shapeColor=rgb(0,0,250)
  block3=createSprite(300,590,100,50);
  block3.shapeColor=rgb(50,150,29)
  block4=createSprite(400,590,100,50);
  block4.shapeColor=rgb(728,45,10)
  ball=createSprite(random(20,750),200,10,10);
  ball.velocityY=random(7,20);
  ball.velocityX=random(7,20);
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
   edges = createEdgeSprites();
    ball.bounceOff(edges);
    
    if(ball.isTouching(block1) && ball.bounceOff(block1)){
      ball.shapeColor=rgb(73,38,40)
      music.play();
    }    
    
    if(ball.isTouching(block2) && ball.bounceOff(block2)){
       ball.shapeColor=rgb(0,0,250)
      ball.velocityY=0
      ball.velocityX=0
      music.stop();
    }
    if(ball.isTouching(block3) && ball.bounceOff(block3)){
      ball.shapeColor=rgb(50,150,29)
      
    }
    if(ball.isTouching(block4) && ball.bounceOff(block4)){
      ball.shapeColor=rgb(728,45,10)
      
    }
    
    
    drawSprites();
  }




    //add condition to check if box touching surface and make it box

