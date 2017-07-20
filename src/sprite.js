import { enableGravity } from './physics'

function createSprite(x, y, width, height, speed, color) {
  return {
    x,
    y,
    vx: 0,
    vy: 0,
    speed: speed,
    width,
    height,
    color,
    physics: false,
    rigidBody: true
  }
}

function updateSprite(sprite) {

  if(sprite.physics) {
    enableGravity(sprite)
  }

  sprite.x += sprite.vx
  sprite.y += sprite.vy
  
}

function renderSprite(context, sprite) {
  context.fillStyle = sprite.color
  context.fillRect(sprite.x, sprite.y, sprite.width, sprite.height)
}

module.exports = {
  createSprite,
  updateSprite,
  renderSprite
}