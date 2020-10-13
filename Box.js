class Block{
  constructor(x, y, width, height){
    
    var options = {
      'restitution':0.3,
      'friction':0.1,
      'density':0.5
   
  }

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.Visiblity = 255;
    World.add(world, this.body);
  }

  display(){
    if(this.body.speed < 3){
      var pos = this.body.position;

      rectMode(CENTER);
      rect(pos.x,pos.y,this.width,this.height);
     }
     else{
       World.remove(world, this.body);
       push();
       var pos = this.body.position;

       rectMode(CENTER);
       rect(pos.x,pos.y,this.width,this.height);
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       var pos = this.body.position;

       
       pop();
     }
    
  }

};
