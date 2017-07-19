/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var game = __webpack_require__(1);
game.init(720, 480);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _canvas = __webpack_require__(2);

var _sprite = __webpack_require__(3);

var _input = __webpack_require__(4);

var _collision = __webpack_require__(5);

function init(width, height) {
  var canvas = (0, _canvas.createCanvas)(width, height);
  var context = (0, _canvas.getContext)(canvas);

  var sprites = {
    sky: (0, _sprite.createSprite)(0, 0, canvas.width, canvas.height, 0, '#3498db'),
    ground: (0, _sprite.createSprite)(0, canvas.height - 100, canvas.width, 100, 0, '#2ecc71'),
    block: (0, _sprite.createSprite)(canvas.width / 2 - 100, canvas.height / 2 - 50, 50, 50, 0, 'yellow'),
    block2: (0, _sprite.createSprite)(canvas.width / 2 - 0, canvas.height / 2 + 60, 50, 50, 0, 'yellow'),
    player: (0, _sprite.createSprite)(canvas.width / 2 - 10, canvas.height / 2 - 10, 10, 10, 5, '#e74c3c')

    // Enable gravity on player
  };sprites.player.physics = true;

  (0, _input.registerInputListeners)(sprites.player);

  requestAnimationFrame(loop.bind(this, context, sprites));
}

function loop(context, sprites) {
  update(context, sprites);
  render(context, sprites);
  requestAnimationFrame(loop.bind(this, context, sprites));
}

function update(context, sprites) {

  for (var key in sprites) {
    (0, _sprite.updateSprite)(sprites[key]);
  }

  (0, _collision.enableCanvasBoundsCollision)(context, sprites.player);

  if ((0, _collision.isColliding)(sprites.player, sprites.ground)) {
    sprites.player.y = sprites.ground.y - sprites.player.height;
    sprites.player.vy = 0;
  }

  if ((0, _collision.isColliding)(sprites.player, sprites.block)) {
    sprites.player.y = sprites.block.y - sprites.player.height;
    sprites.player.vy = 0;
  }

  if ((0, _collision.isColliding)(sprites.player, sprites.block2)) {
    sprites.player.y = sprites.block2.y - sprites.player.height;
    sprites.player.vy = 0;
  }
}

function render(context, sprites) {

  context.clearRect(0, 0, context.canvas.width, context.canvas.height);

  context.fillStyle = '#000000';
  context.fillRect(0, 0, context.canvas.width, context.canvas.height);

  for (var key in sprites) {
    (0, _sprite.renderSprite)(context, sprites[key]);
  }
}

module.exports = {
  init: init
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function createCanvas(width, height) {
  var canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  document.body.appendChild(canvas);
  return canvas;
}

function getContext(canvas) {
  return canvas.getContext('2d');
}

module.exports = {
  createCanvas: createCanvas,
  getContext: getContext
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _physics = __webpack_require__(6);

function createSprite(x, y, width, height, speed, color) {
  return {
    x: x,
    y: y,
    vx: 0,
    vy: 0,
    speed: speed,
    width: width,
    height: height,
    color: color,
    physics: false
  };
}

function updateSprite(sprite) {

  if (sprite.physics) {
    (0, _physics.enableGravity)(sprite);
  }

  sprite.x += sprite.vx;
  sprite.y += sprite.vy;
}

function renderSprite(context, sprite) {
  context.fillStyle = sprite.color;
  context.fillRect(sprite.x, sprite.y, sprite.width, sprite.height);
}

module.exports = {
  createSprite: createSprite,
  updateSprite: updateSprite,
  renderSprite: renderSprite
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keyDown = false;

var pressed = [];

var keys = {
  w: 87,
  a: 65,
  s: 83,
  d: 68
};

function registerInputListeners(sprite) {
  document.addEventListener('keydown', handleKeyDown.bind(this, sprite));
  document.addEventListener('keyup', handleKeyUp.bind(this, sprite));
}

function isKeyDown(key) {
  return pressed[key];
}

function handleKeyDown(sprite, e) {

  if (keyDown) {
    return;
  }

  keyDown = true;

  if (keyDown) {

    pressed[e.keyCode] = true;

    if (pressed[keys.w]) {
      sprite.vy = -sprite.speed;
    }

    if (pressed[keys.a]) {
      sprite.vx = -sprite.speed;
    }

    if (pressed[keys.s]) {
      sprite.vy = sprite.speed;
    }

    if (pressed[keys.d]) {
      sprite.vx = sprite.speed;
    }
  }
}

function handleKeyUp(sprite, e) {

  keyDown = false;

  if (!keyDown) {

    if (pressed[keys.w]) {
      sprite.vy = 0;
    }

    if (pressed[keys.a]) {
      sprite.vx = 0;
    }

    if (pressed[keys.s]) {
      sprite.vy = 0;
    }

    if (pressed[keys.d]) {
      sprite.vx = 0;
    }

    pressed[e.keyCode] = false;
  }
}

module.exports = {
  registerInputListeners: registerInputListeners
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function enableCanvasBoundsCollision(context, sprite) {

  if (sprite.x <= 0) {
    sprite.x = 0;
  }

  if (sprite.y <= 0) {
    sprite.y = 0;
  }

  if (sprite.x + sprite.width >= context.canvas.width) {
    sprite.x = context.canvas.width - sprite.width;
  }

  if (sprite.y + sprite.height >= context.canvas.height) {
    sprite.y = context.canvas.height - sprite.height;
  }
}

function isColliding(spriteA, spriteB) {
  if (spriteA.x <= spriteB.x + spriteB.width && spriteA.x + spriteA.width >= spriteB.x && spriteA.y <= spriteB.y + spriteB.height && spriteA.height + spriteA.y >= spriteB.y) {
    return true;
  }
}

module.exports = {
  enableCanvasBoundsCollision: enableCanvasBoundsCollision,
  isColliding: isColliding
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function enableGravity(sprite) {
  var gravity = 0.1;
  sprite.vy += gravity;
}

module.exports = {
  enableGravity: enableGravity
};

/***/ })
/******/ ]);