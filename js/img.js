//código da img e sons

let imgRoad;
let imgActor;
let imgCarGreen;
let imgCarGrey;
let imgCarYellow;

let soundTrack;
let soundBeat;
let soundDot;

function preload(){
  imgRoad = loadImage("img/estrada.png");
  imgActor = loadImage("img/ator-1.png");
  imgCarGreen = loadImage("img/carro-1.png");
  imgCarGrey = loadImage("img/carro-2.png");
  imgCarYellow = loadImage("img/carro-3.png");
  imgCars = [imgCarGreen, imgCarGrey, imgCarYellow, imgCarGreen, imgCarGrey, imgCarYellow]
  
  soundTrack = loadSound("sound/trilha.mp3");
  soundBeat = loadSound("sound/colidiu.mp3");
  soundDot = loadSound("sound/pontos.wav");
}
