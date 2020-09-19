var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var leftzone;
var rightzone;
var bottomzone;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, 650, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 20 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	leftzone = Bodies.rectangle(300,595, 20, 100, {isStatic:true} );
	World.add(world, leftzone);

	rightzone = Bodies.rectangle(500, 595, 20, 100, {isStatic:true} );
	World.add(world, rightzone);

	bottomzone = Bodies.rectangle(400, 640, 200, 20, {isStatic:true} );
	World.add(world, bottomzone);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  fill('red');
  rect(leftzone.position.x, leftzone.position.y, 20, 100);

  fill('red');
  rect(rightzone.position.x, rightzone.position.y, 20, 100);

  fill('red');
  rect(bottomzone.position.x, bottomzone.position.y, 200, 20);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody, false);    
  }
}



