
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render
var ground,paper,trash1,trash2,trash3
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,height,800,10)
	paper=new Paper(100,600)
	trash1=new Trash()
	
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });
  
	  
	  Render.run(render);
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 ground.display()
 paper.display()
 trash1.display()
 
  drawSprites();
 
}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:30,y:-85})
	}
}



