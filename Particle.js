class Particle
{
  constructor()
  {
    this.pos = createVector(random(1, width-1), random(1, height-1));
    this.vel = createVector(0, 0);    
    this.acc = createVector(0, 0);
    this.maxSpeed = random(2, 8);
    this.previousPos = this.pos.copy();
  }
  
  update() 
  {
    this.pos.add(this.vel);
    this.vel.limit(this.maxSpeed);
    this.vel.add(this.acc);
    this.acc.mult(0);
    this.bounds();
  }
  applyForce(force) 
  {
    this.acc.add(force); 
  }
  
  bounds() 
  {
    if (this.pos.x <= 0) {
      this.pos.x = width-1;
      this.updatePreviousPos();
    }
    if (this.pos.x >= width) {
      this.pos.x = 1;    
      this.updatePreviousPos();
    }
    if (this.pos.y <= 0) {
      this.pos.y = height-1;;
      this.updatePreviousPos();
    }
    if (this.pos.y >= height) {
      this.pos.y = 1;
      this.updatePreviousPos();
    }
  }
  updatePreviousPos() 
  {
    this.previousPos.x = this.pos.x;
    this.previousPos.y = this.pos.y;
  }
  
  render()
  {
    stroke(col1, col2, col3, 5);
    strokeWeight(1);
    line(this.pos.x, this.pos.y, this.previousPos.x, this.previousPos.y);
    this.updatePreviousPos();
  }
}