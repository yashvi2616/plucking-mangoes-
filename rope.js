class Rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.bodyA=bodyA;
        this.pointB=pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){

     this.sling.bodyA=null;
    }
    attach(body){
		this.sling.bodyA=body;
	}
    display(){
       // var pos =this.body.position;
      
        if(this.sling.bodyA){
            var pointA = this.bodyA.position;
            var pointB = this.pointB;
           // translate(this.body.position.x, this.body.position.y);
            strokeWeight(4);
            stroke(0);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
    }
}