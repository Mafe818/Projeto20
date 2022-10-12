
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var plane;
var block1;
var block2;
var block3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
    var plane_options = {isStatic:true}
    plane =  Bodies.rectangle(400, 650, 800, 10, plane_options);
    World.add(world, plane);

    var block1_options = {restiturion: 0.5, friction: 0.02, frictionAir: 0}
	block1 = Bodies.circle(400,10,40,block1_options);
    World.add(world, block1);

    var block2_options = {restiturion: 0.7, friction: 0.01, frictionAir: 0.1}
	block2 = Bodies.rectangle(200,50,60,60,block2_options);
    World.add(world, block2);

    var block3_options = {restiturion: 0.01, friction: 1, frictionAir: 0.3}
	block3 = Bodies.rectangle(600,50,140,60,block3_options);
    World.add(world, block3);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  
  rect(plane.position.x,plane.position.y,800,10);
  rect(block2.position.x,block2.position.y,60,60);
  rect(block3.position.x,block3.position.y,140,60);

  ellipse(block1.position.x,block1.position.y,40)

  Engine.update(engine);
 
}



