function enableCanvasBoundsCollision(context, sprite) {

  if(sprite.x <= 0) {
    sprite.x = 0
  }
  
  if (sprite.y <= 0) {
    sprite.y = 0
  }
  
  if(sprite.x + sprite.width >= context.canvas.width) {
    sprite.x = context.canvas.width - sprite.width
  }
  
  if(sprite.y + sprite.height >= context.canvas.height) {
    sprite.y = context.canvas.height - sprite.height
  }
  
}

function isColliding(spriteA, spriteB) {
  if (spriteA.x <= spriteB.x + spriteB.width &&
   spriteA.x + spriteA.width >= spriteB.x &&
   spriteA.y <= spriteB.y + spriteB.height &&
   spriteA.height + spriteA.y >= spriteB.y) {
     return true
  }
}

module.exports = {
  enableCanvasBoundsCollision,
  isColliding
}