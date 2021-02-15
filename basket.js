class Basket{
  constructor(x,y,width,height){
    var options={
      //Cannot move
      isStatic:true
    }
    //Create the three walls of the basket
    this.body=Bodies.rectangle(500,575,100,20,options);
    this.body1=Bodies.rectangle(550,525,100,20,options);
    this.body2=Bodies.rectangle(450,525,20,100,options);
    //Add an image to the basket
    this.image = loadImage("images/bin.png");

    //Add them to the world
    World.add(world,this.body);
    World.add(world,this.body1);
    World.add(world,this.body2);
 
  }
  display(){
    //Create a variable pos
    var pos = this.body.position;
    var pos1= this.body1.position;
    var pos2= this.body2.position;
   
    imageMode(CENTER);
    fill("red");
    //Make an image in the same position
    image(this.image,pos.x,525,100,120);

  }
}