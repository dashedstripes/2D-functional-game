let keyDown = false

let pressed = []

let keys = {
  w: 87,
  a: 65,
  s: 83,
  d: 68
}

function registerInputListeners(sprite) {
  document.addEventListener('keydown', handleKeyDown.bind(this, sprite))
  document.addEventListener('keyup', handleKeyUp.bind(this, sprite))
}

function handleKeyDown(sprite, e) {
  // if(keyDown) { return }
  keyDown = true
  
  switch(e.keyCode) {
    case keys.w:
      sprite.vy = -sprite.speed
      break
    case keys.a:
      sprite.vx = -sprite.speed
      break
    case keys.s:
      sprite.vy = sprite.speed
      break
    case keys.d:
      sprite.vx = sprite.speed
      break
  }
}

function handleKeyUp(sprite, e) {
  keyDown = false

  switch(e.keyCode) {
    case keys.w:
      sprite.vy = 0
      break
    case keys.a:
      sprite.vx = 0
      break
    case keys.s:
      sprite.vy = 0
      break
    case keys.d:
      sprite.vx = 0
      break
  }
}

module.exports = {
  registerInputListeners
}