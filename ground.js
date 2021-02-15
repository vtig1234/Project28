class ground{
  constructor(x,y,width,height){
    var options ={
      //Cannot move
      isStatic:true
    }
    //Create a rectangle
    this.body=Bodies.rectangle(300,600,1400,50,options);
    //Add it to the world
    World.add(world,this.body);
  }
  display(){
    //Create a pos variable
    var pos = this.body.position
    
    rectMode(CENTER);
    fill("yellow");
    //Make a rectangle in the same place
    rect(pos.x,pos.y,1400,50);
  }
}