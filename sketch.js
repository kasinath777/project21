var canvas;
var music;
var block1,block2,block3,block4,ball,obj1,obj2;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
  block1=createSprite(200,50,200,550);
  block1.shapeColor="orange"
  block2=createSprite(200,50,400,550);
  block2.shapeColor="blue"
  block3=createSprite(200,50,600,550);
  block3.shapeColor="green"
  block4=createSprite(200,50,800,550);
  block4.shapeColor="pink"
  ball=createSprite(random(20,750),200,10,10);
  ball.shapeColor="orange"
  ball.velocityY=random(7,20);
  ball.velocityX=random(7,20);
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    createEdgeSprites();
    ball.bounceOff(Edges);
    ball.bounceOff(block1);
    ball.bounceOff(block2);
    ball.bounceOff(block3);
    ball.bounceOff(block4);
    if(ball.isTouching(block4)){
      ball.shapeColor=block4.shapeColor
      music.play("music.mp3")
    }    

    
    drawSprites();
  }



    //add condition to check if box touching surface and make it box

