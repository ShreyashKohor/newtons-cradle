class Bob{
    constructor(x,y,r) {
    var options = {
     isStatic:false,
     restitution:0.3,
     friction:0.5,
     density:1.2
    }
 
 
 
  
   this.x=x
   this.y=y
   this.r=r
   this.body = Matter.Bodies.circle(this.x,this.y,this.r,options,0)
   
   World.add(world,this.body)
    } 
   display(){
   var pos =this.body.position;
   
   rectMode(CENTER)
   strokeWeight(1)
   stroke("black")
   fill(255,0,255)
   ellipse(this.x,this.y,this.r)
   }
 }