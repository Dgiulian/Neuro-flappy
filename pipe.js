class Pipe {
  constructor() {
    this.x = width;
    this.top = random(100,height / 2);
    this.bottom = random(100,height / 2);
    this.w = 75;
    this.speed = 2;
    this.highlight = false;
  }
  show() {
    if (this.highlight) {
      fill(126, 58, 240);
    } else {
      fill(255);
    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height - this.bottom, this.w, this.bottom);
  }
  update() {
    this.x -= this.speed;
  }

  offscreen() {
    return this.x < -this.w;
  }
  hit(bird) {
    this.highlight = false;
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x >= this.x && bird.x < this.x + this.w) {
        this.highlight = true;
        return true;
      }
    }
    return false;
  }
}
