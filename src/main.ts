import { Sprite, SpriteFrame } from "./Sprite";
import { getFileData } from "./helpers";

window.onload = () => {
  let $file = document.querySelector("input");

  $file!.onchange = async () => {
    const data = (await getFileData($file!.files![0]!)) as ArrayBuffer;
    let sprite;

    try {
      sprite = Sprite.parse(data);
    } catch (e) {
      alert(e);
      return;
    }

    const $canvas = document.querySelector("canvas");
    const context = $canvas!.getContext("2d");

    updateSize($canvas!, sprite.frames);

    renderSprite(context!, sprite);
  };
};

function renderSprite(context: CanvasRenderingContext2D, sprite: Sprite) {
  let lastHeight = 0;
  sprite.frames.forEach((frame: SpriteFrame) => {
    const imgdata = context.createImageData(frame.width, frame.height);
    const length = frame.data.length;

    for (let i = 0; i < length; i++) {
      imgdata.data[i] = frame.data[i];
    }
    context.putImageData(imgdata, 0, lastHeight);
    lastHeight += frame.height;
  });
}

function updateSize($canvas: HTMLCanvasElement, frames: SpriteFrame[]) {
  let totalHeight = 0;
  let totalWidth = 0;

  frames.forEach(frame => {
    totalHeight += frame.height;
    totalWidth = totalWidth > frame.width ? totalWidth : frame.width;
  });

  $canvas.width = totalWidth;
  $canvas.height = totalHeight;
}
