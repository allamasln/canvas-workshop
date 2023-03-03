var player, enemies

var zoom = 1
var initialPlayerRadius = 30

function setup() {
  createCanvas(innerWidth, innerHeight)
  noStroke()
  
  player = new Ball(0, 0, initialPlayerRadius, "#e22a22")

  enemies = Array(100)
  .fill()
  .map(
    (item) => {
      var x = random(-width*2, width*2)
      var y = random(-height*2, height*2)
      var r = random(255)
      var g = random(255)
      var b = random(255)

      return new Ball(x, y, 10, color(r, g, b))
    })
}

function draw() {
  background(255)
  
  translate(width / 2, height / 2)
  var step = initialPlayerRadius / player.radius  
  zoom = lerp(zoom, step, 0.1)
  scale(zoom)
  translate(-player.pos.x, -player.pos.y)
    
  for (var enemie of enemies) {
    if (player.eats(enemie)) {
      enemies = enemies.filter((e) => e !== enemie)
    }
    
      enemie.draw()
  }

  player.animate()
}