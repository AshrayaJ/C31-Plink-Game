class Plinko {
    constructor(x, y) {
            var options = {
               isStatic:true
    }
    this.x = this.x;
    this.y = this.y;
    this.radius = 10;
    this.body = Bodies.circle(x, y, 10, options);
    World.add(world, this.body);
        }
    display() {
    var pos = this.body.postion;
    ellipseMode(RADIUS)
    fill("black");
    stroke("black");
    ellipse(pos.x, pos.y, this.radius, this.radius);
}
 
}