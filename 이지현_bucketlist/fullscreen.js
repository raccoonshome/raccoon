import { bucketForm, bucketList, buckets } from "./index.js";
const section = document.querySelector("section");
const header = document.querySelector(".header");
const resizeOb = new ResizeObserver((entries) => {
  for (let entry of entries) {
    const { height } = entry.contentRect;
    if (height >= window.innerHeight) {
      header.classList.add("full-screen");
      bucketForm.classList.add("full-screen");
    } else {
      header.classList.remove("full-screen");
      bucketForm.classList.remove("full-screen");
    }
  }
});
resizeOb.observe(section);
