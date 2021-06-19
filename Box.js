class Box{
    constructor(x,y,width,height){
      var option={
        restitution:0.2,
        friction:0.2,
        //density:1
      }
      this.body=Bodies.rectangle(x,y,width,height,option);
      this.width=width;
      this.height=height;
      this.visibility=255;
     
      World.add(world,this.body);
    
    }

    display(){
        
      
        if(this.body.speed<5){
        
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        }
        else{
        World.remove(world,this.body);
      
      push()
      var angle=this.body.angle;
      
      
       //fill("#7411EE");
        
        /*translate(this.body.position.x,this.body.position.y);
        rotate(angle);*/
        this.visibility=this.visibility-5;
        tint(255,this.visibility);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop()
        }
    }
}   