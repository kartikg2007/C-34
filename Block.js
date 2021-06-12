class Block{
    constructor(x,y){
    
        var options={
            friction: 1,
            restitution: 0.5,
            density:1.5
        }
    
        
        this.body = Bodies.rectangle(x,y,80,80, options);
        this.width = 80;
        this.height = 80;
        World.add(world, this.body);
    }
    
    display(){ 
        var pos = this.body.position
        var angle = this.body.angle
        push();
        translate(pos.x, pos.y)
        rotate(angle)
        rectMode(CENTER);
        fill ("yellow");
        rect(0,0,this.width, this.height);
        pop();
    
        
    }
    }