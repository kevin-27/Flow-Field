class Field
{
  constructor()
  {
    this.fieldAngle = [cols];
    this.zoff = 0;
    this.inc = 0.05;
    
    for (let x = 0; x < cols; x++)
      this.fieldAngle[x] = [rows];
  }
  
  update()
  {
   this.xoff = 0;
   for (let x = 0; x < cols; x++)
   {
    this.yoff = 0;
    for (let y = 0; y < rows; y++)
    {
      this.angle = noise(this.xoff, this.yoff, this.zoff)*TWO_PI*4;
      this.fieldAngle[x][y] = p5.Vector.fromAngle(this.angle);
      this.fieldAngle[x][y].setMag(2);
      this.yoff += this.inc;
    }
    this.xoff += this.inc;
   }
   this.zoff += 0.005;
  }
  
  render()
  {
    noFill();
    stroke(255);
    strokeWeight(0.5);
    for (let x = 0; x < cols; x++)
     {
       for (let y = 0; y < rows; y++)
       {
         strokeWeight(0.5);
         rect(size*x, size*y, size, size);
         
         push();
         translate((size*x)+size/2, (size*y)+size/2);
         rotate(this.fieldAngle[x][y].heading());
         strokeWeight(2);
         line(0, 0, 0 , size/2);
         pop();
       }
     }
  }
}