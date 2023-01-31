//código do ator
let xActor = 85;
let yActor = 372;
let hit = false;
let score = 0;

function showActor(){
  image(imgActor, xActor, yActor, 30, 25);
}

function moveActor(){
  if (keyIsDown(UP_ARROW)){
    yActor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(canMove()){
      yActor += 3;
    }
  }
}

function canMove(){
  return yActor < 372;
}

function checkCollision(){
  for (let i = 0; i< imgCars.length; i++){
    collision = collideRectCircle(xCars[i], yCars[i], widthCars, heightCars, xActor, yActor, 15)
    if (collision){
      turnBack();
      soundBeat.play();
      if (noNullPoints()){
        score -= 1;
      }
    }
  }
}

function turnBack(){
  yActor = 379;
}

function includeScore(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60));
  text(score, width / 5, 26);
}

function addPoint(){
  if (yActor < 15){
    score += 1;
    turnBack();
    soundDot.play();
  }
}

function noNullPoints(){
  return score > 0
}
