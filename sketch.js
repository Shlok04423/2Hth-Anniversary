var papa,papaImg
var mom,momImg
var backgroungImg
var white
function preload(){
papaImg=loadImage("boy.png")
momImg=loadImage("Girl.png")
backgroundImg=loadImage("OIP.jpg")
white=loadImage("th.jpg")
}

function setup(){
createCanvas(900,600)
mom = createSprite(100,400)
mom.shapeColor=("red")
mom.depth=background.depth
mom.depth=mom.depth+1
mom.addImage(momImg)
mom.scale=0.5

papa = createSprite(800,400)
papa.depth=background.depth
papa.depth=papa.depth+1
papa.addImage(papaImg)
papa.scale=0.5
}

function draw(){
    if(papa.isTouching(mom)){
        papa.destroy()
        mom.destroy()
      
        
    }
background(backgroundImg)
background.scale=1

if(keyDown(UP_ARROW)){
    mom.y=mom.y-2
}

if(keyDown(DOWN_ARROW)){
    mom.y=mom.y+2
}

if(keyDown(RIGHT_ARROW)){
    mom.x=mom.x+2
}

if(keyDown(LEFT_ARROW)){
    mom.x=mom.x-2
}




if(keyDown("W")){
    papa.y=papa.y-2
}

if(keyDown("S")){
   papa.y=papa.y+2
}

if(keyDown("D")){
   papa.x=papa.x+2
}

if(keyDown("A")){
    papa.x=papa.x-2
}

drawSprites()
}

