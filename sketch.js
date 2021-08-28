const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  var ground_options={isStatic:true}
  ground=Bodies.rectangle(400,390,800,20,ground_options)
  World.add(world,ground)
  var ball_options={restitution:1}
  ball=Bodies.circle(400,100,60,ball_options)
  World.add(world,ball)
}

function draw() {
  background(0);  
  drawSprites();
  Engine.update(engine)
  rectMode(CENTER)
  fill('red')
  rect(ground.position.x,ground.position.y,800,20)
  fill('yellow')
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,60,60)
}