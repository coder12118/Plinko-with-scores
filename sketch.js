var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
 var particles;
var plinkos = [];
var divisions, plinkos;
var divisions = [];

var divisionHeight=300;
var score =0;
var gameState = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   //if(frameCount%60===0){
   //  particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   //  score++;
   //}

  if(particles!= null){
   particles.display();
   if(particles.body.position.y > 760){
      //fill("white");
      if(particles.body.position.x < 300){
         score = score+500
         particles = null;
      }
      else if(particles.body.position.x < 600 && particles.body.position.x > 301){
         score = score+200;
         particles = null;
      }
      else if(particles.body.position.x < 900 && particles.body.position.x > 601){
         score = score + 100
         particles = null;
      }
   }
}

     //if(particles.body.position.x > 760){

     //if(particles.body.position.x){
        //score = score+500
       // particles = null;
    // }
  //}

 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   ground.display();


   textSize(20);
   text("500", 25, 520)
   text("500", 100, 520)
   text("500", 185, 520)
   text("500", 265, 520)
   text("200", 340, 520)
   text("200", 420, 520)
   text("200", 505, 520)
   text("200", 580, 520)
   text("100", 655, 520)
   text("100", 730, 520)
   text("Score: "+score, 25, 30)
}

function mousePressed(){
   if(gameState!== "end"){
      particles = new Particle(mouseX, 10, 10, 10);
   }
}