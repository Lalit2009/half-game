
var dragon1, dragon2;
var fireball;
var edges;

function preload(){
  dragon1Animation = loadAnimation("Dragon1.png")
  dragon2Animation = loadAnimation("Dragon2.png")
  ArenaImg = loadImage("Arena.jpg")
  Dragon1_idle = loadAnimation("Dragon1Idle.png")
  fireball1 = loadAnimation("Fireball.png")
}


function setup(){
   createCanvas(1200,800)
   dragon1 = createSprite(200,600)
   dragon1.addAnimation("ABC1",Dragon1_idle)
   dragon1.addAnimation("ABC12",dragon1Animation)
   dragon1.scale = 2
   dragon2 = createSprite(1000,600)
   dragon2.addAnimation("ABC",dragon2Animation)
   dragon2.scale = 2
   dragon2.velocityY = -3
   fireball = createSprite(0,0,1,1)
   edges = createEdgeSprites()
   
}

function draw(){
  background(ArenaImg)

  if(keyDown(UP_ARROW)){
    dragon1.y = dragon1.y -10
  }

  if(keyDown(DOWN_ARROW)){
    dragon1.y = dragon1.y +10
  }

  if(keyWentDown("space")){
    dragon1.changeAnimation("ABC12",dragon1Animation)
    fireballs()
  }

  if(keyWentUp("space")){
    dragon1.changeAnimation("ABC1",Dragon1_idle)
    
  }

 
  

  if(keyDown(RIGHT_ARROW)){
    dragon1.x = dragon1.x +10
  }

  if(keyDown(LEFT_ARROW)){
    dragon1.x = dragon1.x - 10
  }


  
  drawSprites()
 
  dragon2.bounceOff(edges)


}

function fireballs(){
  if(frameCount % 1 === 0){
    fireball = createSprite(300,300)
    fireball.addAnimation("ABC3",fireball1)
    fireball.velocityX = +7
    fireball.y = dragon1.y
    fireball.scale = 0.5;
    fireball.debug = true;
    fireball.setCollider("rectangle", 0,0,200,300)
    
  if(fireball.isTouching(dragon2)){
    fireball.destroyEach()
    
  }
  }
  
}


