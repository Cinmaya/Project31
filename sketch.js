const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;





function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,780,480,20);

  for(var k=0; k<=width;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
    
  }

  for(var j=0; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for(var j=15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,175))
  }
  for(var j=30; j<=width-20; j=j+50){
    plinkos.push(new Plinko(j,275))
  }
  for(var j=45; j<=width-30; j=j+50){
    plinkos.push(new Plinko(j,375))
  }
 
  
  
  
  

 
}

function draw() {
  background("black");  
  Engine.update(engine)
  ground.display();

  for(var j=0; j<plinkos.length; j++){
    plinkos[j].display()
  }
  for(var k=0; k<divisions.length;k++){
    divisions[k].display();
  }
  for(var i=0; i<particles.length;i++){
    particles[i].display();
  }
  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-10,width/2+10),10,10));
  }
  
 
  drawSprites();
}