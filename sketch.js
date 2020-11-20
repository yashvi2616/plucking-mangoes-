
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//var tree,boy;
//var ground;
var boyimg,treeimg;

var mango1;

function preload()
{
	boyimg=loadImage("boy.png")
 treeimg=loadImage("tree.png");
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
   //boy=new Boy(250,600,500,400);
  // tree=new Tree(1000,300,550,550);
   ground=new Ground(700,700,1400,20);
   mango1=new mango(1100,300,60);
   mango2=new mango(1170,130,60);
   mango3=new mango(1010,140,60);
   mango4=new mango(1000,70,60);
   mango5=new mango(1100,70,60);
   mango6=new mango(1000,230,60);
   mango7=new mango(900,230,60);
   mango8=new mango(1140,150,60);
   mango9=new mango(1100,230,80); 
   mango10=new mango(1200,200,80); 
   mango11=new mango(1120,50,80);
   mango12=new mango(900,160,80);
   rock1=new rock(190,490,30);
   r1=new Rope(rock1.body,{x:190,y:490});
   //console.log(r1.x);

	
	Engine.run(engine);
  
}


function draw() {
  background(255);
 
  image(boyimg,150,400,200,300)
  image(treeimg,750,10,550,550)
 // Engine.update(engine);
  strokeWeight(4);
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  
 // boy.display();
 
 //tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  rock1.display();
  ground.display();
  r1.display();

dt(rock1,mango1); 
dt(rock1,mango2);
dt(rock1,mango3);
dt(rock1,mango4);
dt(rock1,mango5); 
dt(rock1,mango6);
dt(rock1,mango7); 
dt(rock1,mango8); 
dt(rock1,mango9);
dt(rock1,mango10); 
dt(rock1,mango11); 
dt(rock1,mango12);
  
}

function mouseDragged (){

  Matter.Body.setPosition(rock1.body,{x:mouseX,y:mouseY});
  
  }
  
  function mouseReleased(){
  
  r1.fly();
  
  
  
  }

  
function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(rock1.body, {x:190, y:490}) 
	  r1.attach(rock1.body);
	}
  }

  function dt(lstone,lmango){

    mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lstone.body.position
    
    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
    console.log(lmango.r+lstone.r)
      if(distance<=lmango.r+lstone.r)
      {
        console.log("distance");
        Matter.Body.setStatic(lmango.body,false);
      }

  }
  


