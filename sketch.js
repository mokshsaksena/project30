const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var ground, stand1, stand2, slingShot
var engine, world, holder, ball
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15;
var block16, block17, block18, block19, block20, block21, block22, block23, block24, block25;  
var polygon, polygon_Img;
function preload() {
    polygon_img=loadImage("polygon.png");
}
function setup(){
    createCanvas(900, 400)
    engine = Engine.create()
    world = engine.world
    Engine.run(engine);

    ball = Bodies.circle(50,200,20);
    World.add(world,ball);

    slingShot = new Slingshot(this.ball,{x:100,y:200});

    
    ground = new Ground()
    stand1 = new Stand(390, 300, 250, 10)
    stand2 = new Stand(700, 200, 200, 10) 
 
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //set 2 for second stand
  //level one
  block17 = new Block(640,175,30,40);
  block18 = new Block(670,175,30,40);
  block19 = new Block(700,175,30,40);
  block20= new Block(730,175,30,40);
  block21= new Block(760,175,30,40);
  //level two
  block22 = new Block(670,135,30,40);
  block23 = new Block(700,135,30,40);
  block24 = new Block(730,135,30,40);
  //top
  block25 = new Block(700,95,30,40);


}

function draw() {
    background("green")

    textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

    ground.display()
    stand1.display()
    stand2.display()
    slingShot.display()

    fill("blue")
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill("lime")
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill("yellow")
    block13.display();
    block14.display();
    block15.display();
    fill("pink")
    block16.display();
    fill("black")
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    fill("orange")
    block22.display();
    block23.display();
    block24.display();
    fill("purple")
    block25.display();

    strokeWeight(2);
    stroke(15);
    fill("gold");
    imageMode(CENTER)
    image(polygon_img ,ball.position.x,ball.position.y,40,40);
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}