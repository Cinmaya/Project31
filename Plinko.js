class Plinko{
    constructor(x,y){
    var options={
        isStatic:true
    }
    this.x= x;
    this.y = y;
    this.body = Bodies.circle(x,y,10,options);
    
   

    World.add(world,this.body);
    }
    display(){
      ellipseMode(CENTER);
      fill("red");
      ellipse(this.x,this.y,14);


    }
}