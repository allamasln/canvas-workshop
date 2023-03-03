// Identificar elemento canvas
var canvas = document.querySelector('canvas')

// Ajustar tamaño
canvas.width = window.innerWidth
canvas.height = window.innerHeight

// Obtener contexto
var ctx = canvas.getContext('2d')

// Utiles 
// Variables
var w2 = canvas.width / 2
var h2 = canvas.height / 2
var PI_DOUBLE = Math.PI * 2

// Array
var colors = [
  '#A3C68C',
  '#FA6A64',
  '#E7EDEA',
  '#CCF390',
  '#00AAEA',
  '#e22a22',
]

// Objeto
var rect = {
  posX: 100,
  posY: 150,
  width: 100,
  height: 50,
}

// Funciones
function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

// -- WARMUP --

// Pintar en canvas
ctx.fillStyle = colors[4]
ctx.fillRect(50,50, 100, 30)

clearCanvas()

// Declarar funciones 
function drawRect(x, y, w, h, color, radius) {
  ctx.beginPath()
  ctx.fillStyle = color
  ctx.roundRect(x,y, w, h, radius)
  ctx.fill()
  ctx.closePath()
}

// Invocar funciones
drawRect(w2 -50, h2 -50, 100, 100, "#e22a22", 10)
drawRect(w2 -35, h2, 70, 50, "white")
drawRect(w2 -15, h2+20, 30, 30, "#e22a22")

clearCanvas()

// Bucles
var posX = rect.posX
var posY = rect.posY

// Recorrer array con bucle
for (var color of colors) {
  drawRect(posX, posY, rect.width, rect.height, color)

  posX += 50
  posY += 50
}

clearCanvas()

// Clases
class Ball {
  // Método constructor
  constructor(x, y, radius, color) {
    // Propiedades
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color

    this.vx = 1
    this.vy = 2
  }

  // Metodos
  // Pinta el objeto en el canvas
  draw() {
    ctx.beginPath()
    ctx.fillStyle = this.color
    ctx.arc(this.x, this.y, this.radius, 0, PI_DOUBLE)
    ctx.fill()
    ctx.closePath()
  }

  // Pinta y mueve el objeto en el canvas
  animate() {
    this.draw()

    if(this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.vx *= -1
    }

    if(this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.vy *= -1
    }

    this.x = this.x + this.vx
    this.y = this.y + this.vy
  }
}

// Crear objetos desde clase
var ball1 = new Ball(100, 100, 10, "red")
var ball2 = new Ball(400, 100, 10, "yellow")

console.log(ball1)
console.log(ball2)

ball1.draw()
ball2.draw()

clearCanvas()

var balls = []
var fps = 1000 / 60

// Bucle de animación
// Borra el canvas y pinta todas las pelotas del array 30 veces por segundo
setInterval(function(){
  clearCanvas()

  for (var ball of balls) {
    ball.animate()
  }
}, fps)

// Eventos de usuario
document.onclick = function(event) {
  var mouseX = event.clientX 
  var mouseY = event.clientY 

  // Agrega item a un Array con push
  balls.push(new Ball(mouseX, mouseY, 30, randomColor()))
}