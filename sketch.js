//Create variables here
var dog,happyDog;
var database;
var foodS,foodStock;
var dog1,dog2;


function preload()
{
  //load images here
  dog1 = loadImage("dogImg.png");
  dog2 = loadImage("dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250,20,20)
  database = firebase.database();

  foodStock = database.ref("Food")
  foodStock.on("value",readStock)

  
  dog.addImage(dog1)
  dog.scale = 0.25;
}


function draw() { 
  background(46,139,87) 

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(dog2)
  }
  if(keyWentUp(UP_ARROW)){
    dog.addImage(dog1)
  }





  drawSprites();
  //add styles here
  stroke(20)
  fill("red")
  text("Press Up Arrow To Feed The Dog", 150,50)
  text("foodStock:" + foodS, 150, 70)

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x,
  })
  
}



