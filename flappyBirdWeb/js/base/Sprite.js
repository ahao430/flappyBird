// 精灵的基类
export default class Sprite {
  constructor(
    ctx = null,
    img = null,
    srcX = 0,
    srcY = 0,
    srcW = 0,
    srcH = 0,
    x = 0,
    y = 0,
    width = 0,
    height = 0,
  ){
    this.ctx = ctx
    this.img = img
  }
}