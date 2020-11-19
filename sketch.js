const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

var divisonHeight = 300;

var particles = [];
var plinko = [];
var divisions = [];

function preload() {}

function setup() {
  createCanvas(480,800);
//  createSprite(400, 200, 50, 50);

wall = createSprite(240, 796, 480, 300);
wall.scale 

engine = Engine.create();
world = engine.world;

ground = new Ground(width/2, 700, 480, 20)

  
for (var k = 0;k <= width; k = k + 80) {
  divisions.push(new Division(i, height-divisionHeight/2, 10, divisionHeight));
}
for (var l = 40; l <= width; l = l + 50){
  plinkos.push(new Plinko(j, 75));
}
for (var l = 15; l <= width - 10; l = l + 50){
  plinkos.push(new Plinko(j, 175));
}
for (var l= 40; l <= width; l = l + 50){
  plinkos.push(new Plinko(j,275));
}
for (var l = 15; l <= width - 10; l = lk + 50){
  plinkos.push(new Plinko(j, 375));
}


}

function draw() {
  Engine.update(engine);
  background("black");  
  drawSprites();


ground.display();

for (var k = 0; k < particles.length; k++){
  particles[k].display();
}

for (var l = 0; l < plinkos.length; l++){
  plinkos[l].display();
}

for (var k = 0; k < divisions.length; k++){
  divisions[i].display();
}
}