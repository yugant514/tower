class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length:0.8,
            stiffness: 0.04

            
        }
        this.sling=Constraint.create(options)
        World.add(world,this.sling)
            
    }
    
    display(){
        if(this.sling.bodyA){
            var pa =this.sling.bodyA.position
            var pb= this.sling.pointB
            strokeWeight(4)
            stroke("yellow")
            line(pa.x,pa.y,pb.x,pb.y)

        }

    }

    fly(){this.sling.bodyA=null}
}

