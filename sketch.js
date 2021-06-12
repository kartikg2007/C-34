
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18
var grd

var ball;
var thrd

function preload()
{
	
}

function setup() {
	createCanvas(1500, 800);


	engine = Engine.create();
	world = engine.world;
	grd = new Ground(750, 750, 2000, 20)

	
	//First column
	b1 = new Block(1000, 700)
	b2 = new Block(1000, 700)
	b3 = new Block(1000, 700)
	b4 = new Block(1000, 700)
	b5 = new Block(1000, 700)
	b6 = new Block(1000, 700)

	//2 column
	b7 = new Block(1100, 700)
	b8  = new Block(1100, 700)
	b9 = new Block(1100, 700)
	b10= new Block(1100, 700)
	b11 = new Block(1100, 700)
	b12 = new Block(1100, 700)
	//3 column
	b13 = new Block(1200, 700)
	b14 = new Block(1200, 700)
	b15 = new Block(1200, 700)
	b16 = new Block(1200, 700)
	b17 = new Block(1200, 700)
	b18 = new Block(1200, 700)

	ball = new Ball(800, 400)
	thrd = new Thread(ball.body, {x: 800, y:100})



	
	

	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);	

	grd.display();
	b1.display();
	b2.display();
	b3.display();
	b4.display();
	b5.display();
	b6.display();

	b7.display();
	b8.display();
	b9.display();
	b10.display();
	b11.display();
	b12.display();

	b13.display();
	b14.display();
	b15.display();
	b16.display();
	b17.display();
	b18.display();

	ball.display();
	thrd.display();
  
  
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY});
}


