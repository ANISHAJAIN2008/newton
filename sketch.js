
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var rope;
var paper;
var engine, world;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(600,100,1200,20);
	paper = new Paper(200,200,20);
	paper2 = new Paper(300,200,20);
	paper3 = new Paper(400,200,20);
	paper4 = new Paper(500,200,20);
	paper5 = new Paper(600,200,20);
	rope = new Rope(paper.body,{x:600,y:100});
	rope2 = new Rope(paper2.body,{x:700,y:100});
	rope3 = new Rope(paper3.body,{x:800,y:100});
	rope4 = new Rope(paper4.body,{x:900,y:100});
	rope5 = new Rope(paper5.body,{x:500,y:100});
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  
  roof.display();
  rope.display();
  paper.display();
  rope2.display();
  paper2.display();
  rope3.display();
  paper3.display();
  rope4.display();
  paper4.display();
  rope5.display();
  paper5.display();
}



