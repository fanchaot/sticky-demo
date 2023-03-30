// Import stylesheets
import './style.css';

// Write Javascript code!
let box = document.querySelector('.ui-box');
let headerDesignerWrapper = document.querySelector('.header-designer-wrapper');
let panel4 = document.querySelector('.panel4');
let panel2 = document.querySelector('.panel2');

let panel1 = document.querySelector('.panel1');
let panel3 = document.querySelector('.panel3');
let eleH = box.clientHeight;
let threshold = box.offsetTop + eleH + 700; // 元素底部距离页面顶部的距离  设置阈值

window.addEventListener('scroll', function () {
  let scrollHeight = window.pageYOffset;
  if (scrollHeight >= threshold) {
    return; // 滚动到指定距离，停止缩放
  }
  let scale = scaleFunc(scrollHeight);

  let wrapperOffsetTop = headerDesignerWrapper.offsetTop - 200;

  let opacity = opacityFunc(wrapperOffsetTop, 0.3);
  panel2.style.opacity = opacity;
  panel4.style.opacity = opacity;

  let opacity1 = opacityFunc(wrapperOffsetTop, 1);
  panel1.style.opacity = opacity1;
  panel3.style.opacity = opacity1;

  box.style.transform = `scale3d(${scale}, ${scale}, 1)`;
});

// 缩放
function scaleFunc(scrollHeight) {
  let scale = 1 - scrollHeight / threshold;
  if (scale < 0.8) {
    scale = 0.8; // 最小缩放值
  }
  return scale;
}

// 透明
function opacityFunc(wrapperOffsetTop, minOpacity) {
  let opacity = wrapperOffsetTop / 100;
  if (wrapperOffsetTop > 0) {
    if (opacity >= minOpacity) {
      opacity = minOpacity; // 最大透明度
    }
  } else {
    opacity = 0;
  }

  return opacity;
}
