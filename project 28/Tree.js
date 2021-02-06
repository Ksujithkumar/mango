class Tree {
    constructor(x,y,height,width){
       var options ={
           isStatic : true
       }
      this.body = Bodies.rectangle(x,y,height,width,options)
      this.image = loadImage("tree.png")
      this.width = width
      this.height = height

    World.add(world,this.body)
    }
    display(){
      var pos = this.body.position;
      imageMode(CENTER)
      //rect(pos.x,pos.y,this.height,this.width)
      image(this.image,pos.x,pos.y,this.height,this.width)
    }

}