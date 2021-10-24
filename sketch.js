const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var bg;
var snow;
var s=[];

function preload(){
  bg=loadImage("snow3.jpg");
  }

function setup() {
  createCanvas(1600,1000);
 
  engine = Engine.create();
  world = engine.world;

  
  for(var i = 0; i <=width; i=i+60){
    s.push(new Snow(i,random(0,80)));
    }

}


function draw() {
  background(bg);  

  Engine.update(engine);

  
  for(var i = 0; i <s.length; i++){
  s[i].display();
}
}