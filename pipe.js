class Pipe {
  constructor() {
    this.spacing = 175;
    this.top = random(height / 6, (3 / 4) * height);
    this.bottom = height - (this.top + this.spacing);
    this.x = width;
    this.w = 80;
    this.speed = 6;
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
