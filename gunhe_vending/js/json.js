const colaInfoArr = [
  {
    name: "Original_Cola",
    price: 1000,
    quantity: 1,
    img: "./img/cola-original.png",
  },
  {
    name: "Violet_Cola",
    price: 1000,
    quantity: 0,
    img: "./img/cola-violet.png",
  },
  {
    name: "Yellow_Cola",
    price: 1000,
    quantity: 1,
    img: "./img/cola-yellow.png",
  },
  {
    name: "Cool_Cola",
    price: 1000,
    quantity: 1,
    img: "./img/cola-cool.png",
  },
  {
    name: "Green_Cola",
    price: 1000,
    quantity: 1,
    img: "./img/cola-green.png",
  },
  {
    name: "Orange_Cola",
    price: 1000,
    quantity: 1,
    img: "./img/cola-orange.png",
  },
];
const balanceMoney = document.querySelector("#balance-money");
const balance = parseInt(balanceMoney.textContent.replaceAll(",", ""));
const colaList = document.querySelector(".cola-list");
colaInfoArr.map((item) => paintColaList(item));
function paintColaList(item) {
  const li = document.createElement("li");
  const colaBtn = document.createElement("button");
  colaBtn.type = "button";
  colaBtn.classList.add("btn-cola");
  const soldout = document.createElement("strong");
  soldout.classList.add("soldout");
  soldout.textContent = "품절";
  const img = document.createElement("img");
  img.src = item.img;
  const colaName = document.createElement("span");
  colaName.classList.add("cola-name");
  colaName.textContent = item.name;
  const colaPrice = document.createElement("strong");
  colaPrice.classList.add("cola-price");
  colaPrice.textContent = `${item.price}원`;
  if (item.quantity <= 0) {
    colaBtn.appendChild(soldout);
    colaBtn.disabled = true;
  }
  // if (balance >= item.quantity && item.quantity > 0) {
  //   colaBtn.classList.add("on");
  // }
  console.log(soldout);
  colaBtn.append(img, colaName, colaPrice);
  li.appendChild(colaBtn);
  colaList.appendChild(li);
}
