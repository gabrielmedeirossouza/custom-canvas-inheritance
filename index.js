import customCanvas from './canvas/index.js'

const canvas = customCanvas({
  canvasElement: 'canvas',
  width: 500,
  height: 500
})

// first rectangle
canvas.native.beginPath()
canvas.native.fillStyle = 'red'
canvas.native.rect(70, 0, 50, 50)
canvas.native.fill()
canvas.native.closePath()

// second rectangle
canvas.native.beginPath()
canvas.native.fillStyle = 'tomato'
canvas.custom.rectRounded(200, 0, 200, 200, 20)
canvas.native.closePath()

// draw house
canvas.custom.lineCoord([
  { x: 50, y: 250 },
  { x: 150, y: 250 },
  { x: 150, y: 150 },
  { x: 170, y: 150 },
  { x: 100, y: 100 },
  { x: 30, y: 150 },
  { x: 50, y: 150 },
  { x: 50, y: 250 },
  { x: 80, y: 250 },
  { x: 80, y: 200 },
  { x: 100, y: 200 },
  { x: 100, y: 250 }
])

// Just put labels below drawings
canvas.native.font = '20px sans-serif'
canvas.native.strokeText('Native rectangle', 25, 75)

canvas.native.font = '20px sans-serif'
canvas.native.strokeText('Custom rectangle', 225, 225)

canvas.native.font = '20px sans-serif'
canvas.native.strokeText('Custom house', 35, 275)
