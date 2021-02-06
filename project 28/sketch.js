
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,tree
var boy,stone

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,600,1200,10);
  tree = new Tree(850,330,330,580);
  boy = new Boy(300,530,300,150);
  stone = new Stone(260,450,50,50);
  mango1 = new Mango(850,200,50,50)
	
  rope = new Rope(stone.body,{x:260,y:450})
}


function draw() {
  background(200);
  Engine.update(engine);

  ground.display();
  tree.display();
  boy.display();
  stone.display();
  rope.display();
  mango1.display();






  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});

}

function mouseReleased(){
  rope.fly();
}

