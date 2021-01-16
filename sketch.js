var canvas;
var music;
var block1,block2,block3,block4,ball,obj1,obj2;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
  block1=createSprite(100,550,100,10);
  block1.shapeColor=(80,0,0)
  block2=createSprite(200,550,100,10);
  block2.shapeColor=rgb(0,0,100
  block3=createSprite(300,550,100,10);
  block3.shapeColor=rgb(50,90,150)
  block4=createSprite(400,550,10,10);
  block4.shapeColor=rgb(100,50,40
  ball=createSprite(random(20,750),200,10,10);
  ball.shapeColor=rgb(0,90,0)
  ball.velocityY=random(7,20);
  ball.velocityX=random(7,20);
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
     edges =createEdgeSprites();
    ball.bounceOff(edges)
    ball.bounceOff(Edges);
    ball.bounceOff(block1);
    ball.bounceOff(block2);
    ball.bounceOff(block3);
    ball.bounceOff(block4);
    if(ball.isTouching(block4)){
      ball.shapeColor=rgb(100,50,40)
      music.play();
    }    

    
    drawSprites();
  }



    //add condition to check if box touching surface and make it box

