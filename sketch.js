const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground,ground2,ground3;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20;
var polygon,poly;
var sling;


function preload(){
  //poly=loadImage("polygon.png");
}

function setup(){
    createCanvas(1600,400);

    engine=Engine.create();
    world=engine.world;

    ground = new Ground(390,300,250,10);
    ground2 = new Ground(700,200,200,10);
    ground3 = new Ground(800,height,width,20);
 
  //row1
   
    block1 = new Box(330,275,30,40);
    block2 = new Box(370,275,30,40);
    block3 = new Box(390,275,30,40);
    block4 = new Box(400,275,30,40);
    block20=new Box(420,275,30,40);

  //row2
    //fill()
    block5 = new Box(370,260,30,40);
    block6 = new Box(390,260,30,40);
    block7 = new Box(400,260,30,40);

  //row3
    block8 = new Box(380,230,30,40);
    block9 = new Box(385,230,30,40);

  //row4
    block10 = new Box(385,200,30,40);

  //stack 2 row 1
   block11 = new Box(670,190,30,30);
   block12 = new Box(690,190,30,30);
   block13 = new Box(710,190,30,30);
   block14 = new Box(730,190,30,30);
   block15 = new Box(750,190,30,30);

  //row 2
 // push()
  
   block16 = new Box(690,180,30,30);
   block17 = new Box(710,180,30,30);
   block18 = new Box(730,180,30,30);
  //pop()
  //row 3
  //push()
  
 
   block19 = new Box(710,180,30,30);
  //pop()

    polygon = new Polygon(100,250);

    sling=new SlingShot(polygon.body,{x:100,y:100});

   
}
function draw(){
  Engine.update(engine);
  
  background("#A1F5F7");
    ground.display();
    ground2.display();
    ground3.display();
    fill("pink");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block20.display();
   
    fill("#C68FEA");
    block5.display();
    block6.display();
    block7.display();
    fill("#B4BAE9");
    block8.display();
    block9.display();
    fill("#C3EFC2");
    block10.display();
    fill("#DF1111");
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    fill("#ECE509");
    block16.display();
    block18.display();
    block19.display();
    fill("orange");
    block17.display();
    


    sling.display();

    polygon.display();

    detectollision(polygon,block1);
    detectollision(polygon,block2);
    detectollision(polygon,block3);
    detectollision(polygon,block4);
    detectollision(polygon,block5);
    detectollision(polygon,block6);
    detectollision(polygon,block7);
    detectollision(polygon,block8);
    detectollision(polygon,block9);
    detectollision(polygon,block10);
    detectollision(polygon,block11);
    detectollision(polygon,block12);
    detectollision(polygon,block13);
    detectollision(polygon,block14);
    detectollision(polygon,block15);
    detectollision(polygon,block16);
    detectollision(polygon,block17);
    detectollision(polygon,block18);
    detectollision(polygon,block19);


}

function mouseDragged(){
 
   Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
  
}
function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(polygon.body,{x:100,y:100});
    sling.attached(polygon.body);
  }
}

function detectollision(lpolygon,lblock){

  blockBodyPosition=lblock.body.position
  polygonBodyPosition=lpolygon.body.position
  
  var distance=dist(polygonBodyPosition.x, polygonBodyPosition.y, blockBodyPosition.x, blockBodyPosition.y)
  	if(distance<=lblock.r+lpolygon.r)
    {
  	  Matter.Body.setStatic(lblock.body,false);
    }

  }
