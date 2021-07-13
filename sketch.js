
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject, groundObject, dustbinObject,paperImg,dustbinImg;
function preload()
{
	paperImg = loadImage("paper.png");
    dustbinImg = loadImage("dustbin.png")
}

function setup() {
	createCanvas(1600,750);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paperObject=new paper(200,450,40);
	dustbinObj=new dustbin(1200,650);
	groundObject=new ground(width/2,670,width,20);

	
	
    dustbinObj.display();
    Engine.run(engine);
  }


function draw() {
  rectMode(CENTER);
  background(0);
    
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:90,y:-90});	
		}
}
