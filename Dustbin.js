class Dustbin
{
    constructor(x,y,w,h)
    {
        var options={
            isStatic:true
        }
        this.dust=Bodies.rectangle(x,y,w,h,options);
        this.w=w;
        this.h=h;
        World.add(world,this.dust);
        this.img=loadImage("dustbingreen.png");
    }
    display()
    {
        //fill("white");
        //rectMode(CENTER)
        //rect(this.dust.position.x,this.dust.position.y,this.w,this.h);
        imageMode(CENTER)
        image(this.img,this.dust.position.x,this.dust.position.y-62,this.w,this.h+120)

    }
}