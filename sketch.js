var bullet, wall;
var speed, weight, thickness;
//var fiat,brio;

function setup() {
  createCanvas(1600,400);
  
  speed=random(200,300);
  weight=random(400,900);
  thickness=random(22,83);

 bullet = createSprite(50, 50, 100, 20);
 bullet.shapeColor = "blue";
 bullet.debug = true;

 //fiat = createSprite(50, 150, 50, 50);
 //fiat.shapeColor = "red";
 //fiat.debug = true;

//brio = createSprite(50, 250, 50, 50);
 //brio.shapeColor = "orange";
 //brio.debug = true;


 wall = createSprite(1200, 50, thickness, height/2);
 wall.shapeColor = "blue";
 wall.debug = true;

 wall.velocityX = 0;
 bullet.velocityX = speed;

 //fiat.velocityX = speed;

 //brio.velocityX = speed;
}

function draw() {
  background(0,0,0);  

  if (wall.x -bullet.x <bullet.width/2 +wall.width/2
    &&bullet.x -wall.x <bullet.width/2 +wall.width/2) {
 wall.velocityX =wall.velocityX * (-1);
 bullet.velocityX =bullet.velocityX * (0);
 //bullet.shapeColor= "white";
}
if (wall.y -bullet.y <bullet.height/2 +wall.height/2
  &&bullet.y -wall.y <bullet.height/2 +wall.height/2){
 wall.velocityY =wall.velocityY * (-1);
 bullet.velocityY =bullet.velocityY * (0);
}

//if (wall.x -fiat.x <fiat.width/2 +wall.width/2
  //&&fiat.x -wall.x <fiat.width/2 +wall.width/2) {
//wall.velocityX =wall.velocityX * (-1);
//fiat.velocityX =fiat.velocityX * (0);
//fiat.shapeColor= "pink";
//}
//if (wall.y -fiat.y <fiat.height/2 +wall.height/2
//&&fiat.y -wall.y <fiat.height/2 +wall.height/2){
//wall.velocityY =wall.velocityY * (-1);
//fiat.velocityY =fiat.velocityY * (0);
//}

//if (wall.x -brio.x <brio.width/2 +wall.width/2
  //&&brio.x -wall.x <brio.width/2 +wall.width/2) {
//wall.velocityX =wall.velocityX * (-1);
//brio.velocityX =brio.velocityX * (0);
//brio.shapeColor= "yellow";
//}
//if (wall.y -brio.y <brio.height/2 +wall.height/2
//&&brio.y -wall.y <brio.height/2 +wall.height/2){
//wall.velocityY =wall.velocityY * (-1);
//brio.velocityY =brio.velocityY * (0);
//}


if(hasCollided (bullet,wall))
{
 bullet.velocityX=0;
  var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
  if(damage>10)
  {
   wall.shapeColor=color(255,0,0);
  }
    if(damage<10)
    {
     wall.shapeColor=color(0,255,0); 
    }

    //if(damage<100)
    //{
     //bullet.shapeColor=color(0,255,0);  
    //}
  }

  //if(wall.x-fiat.x < (fiat.width+wall.width)/2)
  //{
   //fiat.velocityX=0;
    //var deformation=0.5 * weight * speed * speed/22509;
    //if(deformation>180)
    //{
     //fiat.shapeColor=color(230,230,0);
    //}
     // if(deformation<180 && deformation>100)
      //{
      //fiat.shapeColor=color(230,230,0); 
      //}
  
      //if(deformation<100)
      //{
      // fiat.shapeColor=color(0,255,0);  
      //}
    //}

    //if(wall.x-brio.x < (brio.width+wall.width)/2)
    //{
     //brio.velocityX=0;
      //var deformation=0.5 * weight * speed * speed/22509;
      //if(deformation>180)
      //{
      //brio.shapeColor=color(230,230,0);
      //}
        //if(deformation<180 && deformation>100)
        //{
        //brio.shapeColor=color(230,230,0); 
        //}
    
        //if(deformation<100)
        //{
         //brio.shapeColor=color(0,255,0);  
        //}
      //}
  

  drawSprites();
}

function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
}