 var wall1,wall2,wall3,wall4;
var box1,box2,box3,box4,box5,box6,box7;
var ground;
var strokeWiegth;

function setup() {
  createCanvas(800,400);
  wall1 = createSprite(100,300,30,200);
  wall1.shapeColor="aqua";
  wall2 = createSprite(700,300,30,200);
  wall2.shapeColor="aqua";
  wall3 = createSprite(385,315,600,170);
  wall3.shapeColor="aqua";
  wall4 = createSprite(400,220,100,50);
  wall4.shapeColor="aqua";

  box1 = createSprite(100,190,20,20);
  box1.shapeColor="yellow";
  box2 = createSprite(170,220,20,20);
  box2.shapeColor="yellow";
  box3 = createSprite(270,220,20,20);
  box3.shapeColor="yellow";
  box4 = createSprite(400,185,20,20);
  box4.shapeColor="yellow";
  box5 = createSprite(500,220,20,20);
  box5.shapeColor="yellow";
  box6 = createSprite(600,220,20,20);
  box6.shapeColor="yellow";
  box7 = createSprite(700,190,20,20);
  box7.shapeColor="yellow";


  
}

function draw() {
  background(0); 
 
 drawSprites();
}