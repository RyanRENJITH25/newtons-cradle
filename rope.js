class Rope
{
	constructor(bodyA, pointB){
	var rope_options = {
		bodyA: bodyA,
		pointB: pointB,
		stiffness: 0.04,
		length: 200
	}
	this.pointB=pointB
	this.rope = Constraint.create(rope_options);
	World.add(world, this.rope);
}

display(){
	if(this.rope.bodyA){
		var pointA = this.rope.bodyA.position;
		var pointB = this.pointB;
		strokeweight(4);
	   line(pointA.x, pointA.y, pointB.x, pointB.y);
	}
}
}
