import { bucketForm, bucketList, buckets } from "./index.js";
const section = document.querySelector(".section");
const header = document.querySelector(".header");
/*
form이 빠져나오는 순간 height가 줄어들면서 과부하가 옴...

const resizeOb = new ResizeObserver((entries) => {
  for (let entry of entries) {
    const { height } = entry.contentRect;
    if (height >= window.innerHeight) {
      header.classList.toggle("full-screen");
      bucketForm.classList.toggle("full-screen");
    }
  }
});
resizeOb.observe(section);
*/
