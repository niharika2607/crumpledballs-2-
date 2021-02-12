
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball=new Paper(200,450,70)
	ground=new Ground(400,660,800,15);
    box1=new Dustbin(650,641,200,20);
	//box2=new Dustbin(550,591,20,80)
	//box3=new Dustbin(750,591,20,80)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
  box1.display();
  //box2.display();
  //box3.display()
  ground.display();
  ball.display();
  if(keyDown(UP_ARROW))
  {
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:130,y:-145})
  }
  drawSprites();
 
}



