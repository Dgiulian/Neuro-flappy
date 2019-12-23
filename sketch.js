let bird;
let pipes = [];
function setup() {
  createCanvas(window.innerWidth, 600);
  bird = new Bird();
  pipes.push(new Pipe());
}
function draw() {
  background(0);
  for (let i = pipes.length - 1; i >= 0; i--) {
    let pipe = pipes[i];
    pipe.show();
    pipe.update();
    if(pipe.hit(bird)) {
      console.log("BOOM")
      pipes = [];
    }
    if (pipe.offscreen()) {
      pipes.splice(i, 1);
    }
  }
  bird.update();
  bird.show();
  if (frameCount % 200 === 0 ) {
    pipes.push(new Pipe());
  }
}

function keyPressed() {
  bird.up();
}
