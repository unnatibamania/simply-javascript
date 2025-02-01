const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");

let rotate = 0;
let rotate2 = 0;

function rotateUsingJSAniamtion() {
  div1.style.transform = `rotate(${rotate}deg)`;
  rotate += 3;
  rotateUsingRequestAnimationFrame();
  requestAnimationFrame(rotateUsingRequestAnimationFrame);
}

function rotateUsingRequestAnimationFrame() {
  div2.style.transform = `rotate(${rotate2}deg)`;
  rotate2 += 3;
}

setInterval(rotateUsingJSAniamtion, 16);
requestAnimationFrame(rotateUsingRequestAnimationFrame);
