function setup() {
  createCanvas(500, 400);
  soundTrack.loop();
}

function draw() {
  background(imgRoad);
  showActor();
  showCar();
  moveCar();
  moveActor();
  returnCarStartingPosition();
  checkCollision();
  includeScore();
  addPoint();
}