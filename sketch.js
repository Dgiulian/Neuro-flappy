const TOTAL = 500;
let birds = [];
let savedBirds = [];
let pipes = [];
let counter = 0;
let speedSlider;
let highScore = 0;
let bestScore = 0;
let generation = 0;
function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < TOTAL; i++) {
    birds.push(new Bird());
  }
  speedSlider = createSlider(1, 100, 1);
}
function draw() {
  
  for (let n = 0; n < speedSlider.value(); n++) {
    if (counter % 75 === 0) {
      pipes.push(new Pipe());
    }
    counter++;
    for (let i = pipes.length - 1; i >= 0; i--) {
      let pipe = pipes[i];

      pipe.update();
      for (let j = birds.length - 1; j >= 0; j--) {

        if (pipe.hit(birds[j]) || birds[j].offScreen()) {
          let [deletedBird] = birds.splice(j, 1);
          savedBirds.push(deletedBird);
        }
      }
      if (pipe.offscreen()) {
        pipes.splice(i, 1);
      }
    }

    for (let bird of birds) {
      bird.think(pipes);
      bird.update();
    }
    if (birds.length === 0) {
      nextGeneration();
      generation++;
      pipes = [];
      counter = 0;
    }
   
  }
  background(0);
  for (let bird of birds) {
    bird.show();
    highScore = max(highScore, bird.score);
  }
  bestScore = max(bestScore, highScore);
  for (let pipe of pipes) pipe.show();
  showStatistics();
}

function showStatistics() {
  document.getElementById('highScore').innerText = `High Score: ${highScore}`;
  document.getElementById('bestScore').innerText = `Best score: ${bestScore}`;
  document.getElementById('generation').innerText = `Generation: ${generation}`;
}
