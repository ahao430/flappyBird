import ResourceLoader from "./js/base/ResourceLoader.js";
import Director from './js/Director.js';

export default class Main {
  constructor () {
    this.canvas = document.getElementById('canvas')
    this.ctx = this.canvas.getContext('2d')
    const loader = ResourceLoader.create()
    loader.onLoaded(map => this.onResourceFirstLoaded(map))

    let image = new Image()
    image.src = './res/background.png'
    image.onload = () => {
      this.ctx.drawImage(
        image,
        0,
        0,
        image.width,
        image.height,
        0,
        0,
        image.width,
        image.height,
      )
    }
  }

  onResourceFirstLoaded(map){
    console.log(map)
  }
}