var cat,catImg,mouse,mouseImg,bg,cat2Img,mouse2Img;
function preload() {
    //load the images here
catImg=loadAnimation("images/cat2.png","images/cat3.png","images/cat4.png")
cat2Img=loadAnimation("images/cat1.png")
bg=loadImage("images/garden.png")
mouseImg=loadAnimation("images/mouse2.png","images/mouse3.png","images/mouse4.png")
mouse2Img=loadAnimation("images/mouse1.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(650,700,50,50)
cat.addAnimation("cat",catImg)
cat.scale=0.2
mouse=createSprite(50,700,50,50)
mouse.addAnimation("mouse",mouseImg)
mouse.scale=0.2
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2){
mouse.changeAnimation("mouse")
cat.changeAnimation("cat")
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
    mouse.addAnimation("teasing",mouseImg);
    mouse.changeAnimation("teasing");
    mouse.scale=0.2
    cat.velocityX=-5;
  }

  

}
