function createCanvas(width, height) {
  let canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  document.body.appendChild(canvas)
  return canvas
}

function getContext(canvas) {
  return canvas.getContext('2d')
}

module.exports = {
  createCanvas,
  getContext
}