class Ground {
    constructor(x,y,height,width){
       var option={
           isStatic:true
       } 
        this.body=Bodies.rectangle(x,y,height,width,option);
        this.width=width;
        this.height=height;
       
        World.add(world,this.body);

    }
    display(){
        push()
        rectMode(CENTER);
        fill("brown");
        rect(this.body.position.x,this.body.position.y,this.height,this.width);
        pop()
    }
}
