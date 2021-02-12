class Paper
{
    constructor(x,y,r)
    {
        var options={
            density:1.2,
            isStatic:false,
            restitution:0.3,
            friction:0.5
        }
        this.body=Bodies.circle(x,y,r,options);
        this.img=loadImage("paper.png")
        this.r=r;
        World.add(world,this.body);
    }
    display()
    {
        var paperpos=this.body.position;		
			push()
			//translate(paperpos.x, paperpos.y);
			imageMode(CENTER);
			image(this.img, paperpos.x,paperpos.y+45,this.r,this.r)
			pop()
    }
}