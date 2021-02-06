class Mango{
    constructor(x,y,width,height){
        var options ={
            isStatic:true
          }

        this.body = Bodies.rectangle(x,y, width,height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("mango.png") 

        World.add(world, this.body);
        
    }
    display(){
     var pos = this.body.position
     var angle = this.body.angle

     push();
    translate(pos.x,pos.y)
    rotate(angle)
    imageMoad(CENTER)
    image(this.image,pos.x,pos.y,this.height,this.width)
    pop();
    }
    
}