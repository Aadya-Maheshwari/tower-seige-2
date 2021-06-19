class Polygon{
    constructor(x,y){
        this.body=Bodies.circle(x,y,50);

        World.add(world,this.body);
        this.image=loadImage("polygon.png");
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,50,50);
        pop();
    }
}