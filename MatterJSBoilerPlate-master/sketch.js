var Constrain
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
	roof= new Roof(300,100,550,50)
	bob_Object1= new Bob(100,500,100)
	bob_Object2= new Bob(200,500,100)
	bob_Object3= new Bob(300,500,100)
	bob_Object4= new Bob(400,500,100)
	bob_Object5= new Bob(500,500,100)
	rope1= new Rope(bob_Object1,roof,100,0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  
  roof.display();
  bob_Object1.display();
  bob_Object2.display();
  bob_Object3.display();
  bob_Object4.display();
  bob_Object5.display();
  rope1.display();



  drawSprites();
 
}



