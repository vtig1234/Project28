class launcher{
  //Create the rquired points for a constraint
    constructor(bodyA, pointB){
        var options = {
          //Define bodyA
            bodyA: bodyA,
          //Define pointB
            pointB: pointB,
          //Define the constraint stiffness
            stiffness: 0.04,
          //Define the length of the constraint
            length: 10
        }
        this.pointB = pointB
      //Create a constraint
        this.launcher= Matter.Constraint.create(options);
      //Add it to the world
        World.add(world, this.launcher);
    }
  //Create a fly function
  fly(){
    //Make the bodyA null
    this.launcher.bodyA = null;
  }

      display(){
        if (this.launcher.bodyA){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
          fill("black")
          line(this.launcher.bodyA.position.x, this.launcher.bodyA.position, pointB.x, pointB.y);
        }
    }
}  