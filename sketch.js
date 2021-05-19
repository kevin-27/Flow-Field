let cols, rows, size;
let field;
let pSize = 5000;
let particle = [pSize];
let timer;
let timeInc = 10000;
let col1, col2, col3;

function setup() 
{
  let W = 1080;
  let H = 720;
  var cnv = createCanvas(W, H);
  cnv.position(windowWidth/2-W/2, windowHeight/2-H/2);
  background(0); 
  
  size = 20;
  cols = width/size;
  rows = height/size;
  field = new Field();
  col1 = 255;
  col2 = 255;
  col3 = 255;
  for (let i = 0; i < pSize; i++)
    particle[i] = new Particle();
  timer = millis()+timeInc;
}

function draw() 
{
  field.update();
  
  for (let p of particle)
  {
    p.render();
    p.update();
    p.applyForce(field.fieldAngle[(int)((p.pos.x)/size)]
                                 [(int)((p.pos.y)/size)]);
  }
  
  if (timer <= millis())
  {
    col1 = floor(random(255));
    col2 = floor(random(255));
    col3 = floor(random(255));
    timer += timeInc;
  }
  
  //field.render();
}