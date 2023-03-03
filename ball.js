class Ball {
  constructor(x, y, radius, color) {
    this.pos = createVector(x, y)
    this.radius = radius
    this.color = color
  }

  draw() {
    fill(this.color)
    ellipse(this.pos.x, this.pos.y, this.radius*2, this.radius*2)
  }

  animate() {
    this.draw()
    
    var velocity = createVector(mouseX - width / 2, mouseY - height /2)
	
    velocity.setMag(3)
    this.pos.add(velocity)    
  }

  eats(enemie) {
    var d = p5.Vector.dist(this.pos, enemie.pos)
    
    if (d >= this.radius + enemie.radius) return false

    var areaPlayer = PI * this.radius ** 2 
    var areaEnemie = PI * enemie.radius ** 2
    
    var area = areaPlayer + areaEnemie
    
    this.radius = sqrt(area / PI)   

    return true
  }
}