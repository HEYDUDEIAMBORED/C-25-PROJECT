class Trash {
    constructor() {
      var options = {
          isStatic: true
      }
      
      this.bottombody=Bodies.rectangle(600,690,200,10,options)
      this.leftbody=Bodies.rectangle(490,550,10,200,options)
      this.rightbody=Bodies.rectangle(710,550,10,200,options)
    
      this.width = width;
      this.height = height;
      World.add(world,[ this.bottombody,this.leftbody,this.rightbody]);
        
    
      this.image=loadImage("dustbingreen.png")
    }
    display(){
      //var pos =this.body.position;
     
      fill("white");
      
      imageMode(CENTER);
      image(this.image, this.bottombody.position.x,this.bottombody.position.y-100, 200, 200);
    }
  };