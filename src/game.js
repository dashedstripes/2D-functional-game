import { createCanvas, getContext } from './canvas'
import { createSprite, updateSprite, renderSprite } from './sprite'
import { registerInputListeners } from './input'
import { enableCanvasBoundsCollision, isColliding } from './collision'

function init(width, height) {
  let canvas = createCanvas(width, height)
  let context = getContext(canvas)

  let sprites = {
    sky: createSprite(0, 0, canvas.width, canvas.height, 0, '#3498db'),
    ground: createSprite(0, canvas.height - 100, canvas.width, 100, 0, '#2ecc71'),
    block: createSprite(canvas.width / 2 - 100, canvas.height / 2 - 50, 50, 50, 0, 'yellow'),
    block2: createSprite(canvas.width / 2 - 0, canvas.height / 2 + 60, 50, 50, 0, 'yellow'),
    player: createSprite(canvas.width / 2 - 10, canvas.height / 2 - 10, 10, 10, 5, '#e74c3c')
  }

  // Enable gravity on player
  sprites.player.physics = true

  registerInputListeners(sprites.player)

  requestAnimationFrame(loop.bind(this, context, sprites))
}

function loop(context, sprites) {
  update(context, sprites)
  render(context, sprites)
  requestAnimationFrame(loop.bind(this, context, sprites))
}

function update(context, sprites) {

  for(let key in sprites) {
    updateSprite(sprites[key])
  }

  enableCanvasBoundsCollision(context, sprites.player)

  if(isColliding(sprites.player, sprites.ground)) {
    sprites.player.y = sprites.ground.y - sprites.player.height
    sprites.player.vy = 0
  }

  if(isColliding(sprites.player, sprites.block)) {
    sprites.player.y = sprites.block.y - sprites.player.height
    sprites.player.vy = 0
  }

  if(isColliding(sprites.player, sprites.block2)) {
    sprites.player.y = sprites.block2.y - sprites.player.height
    sprites.player.vy = 0
  }

}

function render(context, sprites) {

  context.clearRect(0, 0, context.canvas.width, context.canvas.height)
  
  context.fillStyle = '#000000'
  context.fillRect(0, 0, context.canvas.width, context.canvas.height)

  for(let key in sprites) {
    renderSprite(context, sprites[key])
  }

}

module.exports = {
  init
}