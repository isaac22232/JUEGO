var bosque
var fondo
var personaje,pc
var magma,pc2
var gamestate = "inicio"


function preload(){
 bosque = loadImage("bosque.jpg")
  personaje = loadAnimation("p1.png","p2.png","p3.png","p4.png")
  magma = loadAnimation("m1.png","m2.png","m3.png","m4.png")
  personp = loadAnimation("p3.png")
  magp = loadAnimation("m1.png")
  poke = loadImage("poke.png")
  p1 = loadImage("rayquaza.gif")
  jolteon = loadImage("pokemon1.png")
  char = loadImage("pokemon2.png")
  po1 = loadImage ("poder.png")
}

function setup() {

  createCanvas(windowWidth,windowHeight)
  
  fondo = createSprite(250,150,windowWidth,windowHeight)
  fondo.addImage(bosque)
  fondo.scale = 1.4
  pc = createSprite(300,400,50,50)
  pc.addAnimation("movimiento", personaje)
  pc.addAnimation("parado",personp)
  pc.scale = 2
  pc2 = createSprite(1500,400,50,50)
  pc2.addAnimation("movimiento2", magma)
  pc2.addAnimation("parado2",magp )
  pc2.scale = 2
  pc2.visible=false
  //poke1 = createSprite(500, 400, 50, 50)
  //poke1.addImage("pokemon1",p1)
  pokeball1 = createSprite(350, 350, 20, 20)
  pokeball1.addImage(poke)
  pokeball1.visible = false
  pokeball2 = createSprite(950, 350, 20, 20)
  pokeball2.addImage(poke)
  pokeball2.visible = false
  pokeball1.scale = 0.08
  pokeball2.scale = 0.08
  
  pod1 = createSprite(480,350,20,20)
  pod1.addImage("poder1",po1)
  pod1.scale = 0.1

  jolteons = createSprite(480,350,50,50)
  jolteons.addImage("pokemon1",jolteon)
  jolteons.visible = true
  jolteons.scale = 0.15
  
  chars = createSprite(850,350,50,50)
  chars.addImage("pokemon1",char)
  chars.scale = 0.2

  suelo = createSprite(windowWidth/2, 500, windowWidth, 5)
  suelo.visible = false

  bb1 = createSprite(350, 200, 185, 20); 
  bb1.shapeColor ="white"; 
  bv1 = createSprite(350, 200, 185, 20);
  bv1.shapeColor ="green"; 
  
  bb2 = createSprite(930, 200, 185, 20); 
  bb2.shapeColor ="white"; 
  bv2 = createSprite(930, 200, 185, 20);
  bv2.shapeColor ="green"; 

  
}

function draw() {

  background(180);
  fondo.velocityX=-3
  if(fondo.x<950){
    fondo.x=width/4
  }
  if (gamestate == "inicio"){
    pc2.velocityX=-2
    pc.velocityX=2
    
    if(pc2.x<1300){
      pc2.visible=true
    }
    if(pc2.isTouching(pc) || pc.isTouching(pc2)){
      pc2.velocityX=0
      pc.velocityX=0
      pc.changeAnimation("parado")
      pc2.changeAnimation("parado2")
      gamestate = "batalla"
      
  
    }
  }
if(gamestate == "batalla"){
pc.x=300
pc2.x=1000
//image(pokeball1,300, 200, 20, 20); 

pokeball1.visible = true
pokeball2.visible = true
if(keyDown("down_arrow")) {
  chars.velocityY = -10
}
chars.velocityY = chars.velocityY +0.8
chars.collide(suelo)
if(keyDown("w")) {
  jolteons.velocityY = -10
}
jolteons.velocityY = jolteons.velocityY +0.8
jolteons.collide(suelo)

if(keyDown("d")){
pod1.velocityX = 10
}
}



  drawSprites();
}



