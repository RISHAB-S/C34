const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function draw(){
background("green")
Engine.update(engine)
ground.display()
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
ball.display()
rope.display()
}
function setup(){
createCanvas(1200,800)
engine = Engine.create()
world = engine.world

ground=new Ground(600,770,1200,20)
box1=new Box(900,300,120,50)
box2=new Box(900,300,120,50)
box3=new Box(900,300,120,50)
box4=new Box(900,300,120,50)
box5=new Box(900,300,120,50)
box6=new Box(900,300,120,50)
box7=new Box(900,300,120,50)
box8=new Box(900,300,120,50)
box9=new Box(900,300,120,50)
ball=new Ball(300,300,100,100)
rope=new Rope(ball.body,{x:600,y:300})
}
function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    //}
}