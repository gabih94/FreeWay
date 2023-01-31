//código do carro
let xCars = [600, 600, 600, 600, 600, 600];
let yCars = [40, 96, 149, 209, 264, 317];
let velocityCars = [4.1, 5, 4.2, 3, 4.5, 6];
let widthCars = 50;
let heightCars = 40;

function showCar(){
  for (let i = 0; i < imgCars.length; i++){
    image(imgCars[i], xCars[i], yCars [i], widthCars, heightCars);
  }
}

function moveCar(){
  for (let i = 0; i < imgCars.length; i++){
    xCars[i] -= velocityCars[i];
  }
}

function returnCarStartingPosition(){
  for (let i = 0; i < imgCars.length; i++){
    if (passedTheWholeScreen(xCars[i])){
    xCars[i] = 600;
    }
  }
}

function passedTheWholeScreen(xCars){
  return xCars < -50;
}