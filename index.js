// Import stylesheets
import './style.css';

// Write Javascript code!

window.addEventListener('scroll', function () {
  let box = document.querySelector('.header-designer');
  let scrollHeight = document.documentElement.scrollHeight;
  let scrollTop = document.documentElement.scrollTop;
  let clientHeight = document.documentElement.clientHeight;
  let scrollRatio = scrollTop / (scrollHeight - clientHeight);
  let scale = 1 - scrollRatio * 0.2;
  box.style.transform = `scale3d(${scale}, ${scale}, 1)`;
});
