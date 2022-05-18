
class Tower {
    constructor(x, y, width, height) {
      var options = {
isStatic: true
      };
    
this.width = width;
    this.height = height;
    this.img=loadImage("assets/tower.png")
    
      this.body=Bodies.rectangle(x,y,this.width,this.height,options);
      World.add(world,this.body); 
    
    }
display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    image(this.img,0,0,this.width,this.height);
    imageMode(CENTER);
            //change the rect as image(challenge 5)

//display the rect function (challenge 3)
  pop();
  }
}
