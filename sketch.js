const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var platform;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    
    platform = new Platform(810,200,200,20);

    box1 = new Pig(775,20);
    box2 = new Pig(880,20);
    pig1 = new Pig(810,50);

    box3 = new Pig(775,40);
    box4 = new Pig(880,40);
    pig3 = new Pig(810,20);

    box5 = new Pig(830,60);

    bird = new Pig(100,100);

    //log6 = new Log(230,180,80, PI/2);
    sling = new Slingshot(bird.body,{x : 200,y : 100});
}

function draw(){
    background("black");
    Engine.update(engine);
    strokeWeight(4);

    fill(225,225,225);
    ground.display();
    
    platform.display();

    fill(225,0,225);
    box1.display();
    box2.display();
    
    fill(0,128,225);
    pig1.display();
    
    fill(211,215,79);
    box3.display();
    box4.display();
    pig3.display();

    fill(181,230,29);
    box5.display();

    bird.display();
    //log6.display();
    sling.display();    
}
function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x : mouseX,y : mouseY});
}
function mouseReleased(){
    sling.fly();
}
