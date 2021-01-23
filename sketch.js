const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var division = [];
var particle;

var DiH = 300;
var score = 0;
var count = 0;

var GS = "start"

function setup() {

  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  
  var ground1 = new Ground(width/2,height,width,20);
  
  for(var k = 0; k<=width; k= k+80){
    division.push(new Divisions(k,height-DiH/2,10, DiH));
  }

    for (var j = 75; j <=width; j=j+50) {
     plinkos.push(new Plinko(j,75));
  }
 
  for (var j = 50; j <=width-10; j=j+50) {
   plinkos.push(new Plinko(j,175));
  }

  for (var j = 75; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,275));
  }

  for (var j = 50; j <=width-10; j=j+50) {
   plinkos.push(new Plinko(j,375));
  }


  
}



function draw() {
  background(0);  
  Engine.update(engine);

  textSize(35);
  text("Score:"+score,20,40);
  fill("white");
  text("500",5,550)
  text("500",84,550)
  text("500",164,550)
  text("500",244,550) 
  text("400",324,550)
  text("400",404,550)
  text("400",484,550)
  text("300",564,550)
  text("300",644,550)
  text("200",724,550)
  
  if(particle!=null)
  {
     particle.display();
      
      if (particle.body.position.y>760)
      {
            if (particle.body.position.x < 300) 
            {
                score=score+500;      
                particle=null;
                if ( count>= 5) GS ="end";                          
            }
        
            else if(particle.body.position.x<600 && particle.body.position.x>301)
            {
                  
              score = score + 100;
              particle=null;
              if ( count>= 5) GS="end";

            } else if (particle.body.position.x<600 && particle.body.position.x>301){
              score = score + 100;
              particle=null;
              if ( count>= 5) GS ="end";
            }
          }
      }
        
            




  if(GS == "end"){
    textSize(100);
    text("GameOver",150,250);
  }
  
  for(var i = 0; i< plinkos.length; i++){
  
  plinkos[i].display();
      
  }
  
for(var k = 0; k< division.length; k++){
  
division[k].display();
  
}





}

function mousePressed(){

if(GS !== "end"){

count++;
particle = new Particle(mouseX, 10,10,10)

}
  
}