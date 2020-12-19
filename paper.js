class paper{

    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2

        }
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.body=Bodies.circle(this.x,this.y,70,options);
           this.radius=radius;
           this.image=loadImage("paper obj.png");
           World.add(world,this.body);

    }


    display(){
        var pos =this.body.position
        push ()
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(5);
        stroke("blue");
        fill (225,0,225);
         ellipse(0,0,this.radius,this.radius);
        pop ();
    }

}