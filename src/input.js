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

function isKeyDown(key) {
  return pressed[key]
}

function handleKeyDown(sprite, e) {

  keyDown = true

  if(keyDown) {
    
    pressed[e.keyCode] = true;

    if(pressed[keys.w]) {
      sprite.vy = -sprite.speed
    }

    if(pressed[keys.a]) {
      sprite.vx = -sprite.speed
    }

    if(pressed[keys.s]) {
      sprite.vy = sprite.speed
    }

    if(pressed[keys.d]) {
      sprite.vx = sprite.speed
    }

  }

}

function handleKeyUp(sprite, e) {

  keyDown = false

  if(!keyDown) {

    if(pressed[keys.w]) {
      sprite.vy = 0
    }

    if(pressed[keys.a]) {
      sprite.vx = 0
    }

    if(pressed[keys.s]) {
      sprite.vy = 0
    }

    if(pressed[keys.d]) {
      sprite.vx = 0
    }

    pressed[e.keyCode] = false

  }

}

module.exports = {
  registerInputListeners
}