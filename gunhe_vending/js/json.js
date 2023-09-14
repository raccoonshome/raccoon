const colaInfoArr = [
  {
    name: "Original_Cola",
    price: 1000,
    img: "./img/cola-original.png",
  },
  {
    name: "Violet_Cola",
    price: 1000,
    img: "./img/cola-violet.png",
  },
  {
    name: "Yellow_Cola",
    price: 1000,
    img: "./img/cola-yellow.png",
  },
  {
    name: "Cool_Cola",
    price: 1000,
    img: "./img/cola-cool.png",
  },
  {
    name: "Green_Cola",
    price: 1000,
    img: "./img/cola-green.png",
  },
  {
    name: "Orange_Cola",
    price: 1000,

    quantity: 1,
    img: "./img/cola-orange.png",
  },
];
const colaList = document.querySelector(".cola-list");
colaInfoArr.map((item) => paintColaList(item));
function paintColaList(item) {
  const colaBtn = document.createElement("button");
  colaBtn.type = "button";
  colaBtn.classList.add("btn-cola");
  const img = document.createElement("img");
  img.src = item.img;
  const colaName = document.createElement("span");
  colaName.classList.add("cola-name");
  colaName.textContent = item.name;
  const colaPrice = document.createElement("strong");
  colaPrice.classList.add("cola-price");
  colaPrice.textContent = `${item.price}원`;
  colaBtn.append(img, colaName, colaPrice);
  li.appendChild(colaBtn);
  colaList.appendChild(li);
}
