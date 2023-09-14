const colaInfoArr = [
  {
    name: "Original_Cola",
    price: 1000,
<<<<<<< HEAD
    quantity: 1,
=======
>>>>>>> 4bbf9475fc6b311eea6b65d3acc63f5b629a6c51
    img: "./img/cola-original.png",
  },
  {
    name: "Violet_Cola",
    price: 1000,
<<<<<<< HEAD
    quantity: 0,
=======
>>>>>>> 4bbf9475fc6b311eea6b65d3acc63f5b629a6c51
    img: "./img/cola-violet.png",
  },
  {
    name: "Yellow_Cola",
    price: 1000,
<<<<<<< HEAD
    quantity: 1,
=======
>>>>>>> 4bbf9475fc6b311eea6b65d3acc63f5b629a6c51
    img: "./img/cola-yellow.png",
  },
  {
    name: "Cool_Cola",
    price: 1000,
<<<<<<< HEAD
    quantity: 1,
=======
>>>>>>> 4bbf9475fc6b311eea6b65d3acc63f5b629a6c51
    img: "./img/cola-cool.png",
  },
  {
    name: "Green_Cola",
    price: 1000,
<<<<<<< HEAD
    quantity: 1,
=======
>>>>>>> 4bbf9475fc6b311eea6b65d3acc63f5b629a6c51
    img: "./img/cola-green.png",
  },
  {
    name: "Orange_Cola",
    price: 1000,
<<<<<<< HEAD
    quantity: 1,
    img: "./img/cola-orange.png",
  },
];
const balanceMoney = document.querySelector("#balance-money");
const balance = parseInt(balanceMoney.textContent.replaceAll(",", ""));
=======
    img: "./img/cola-orange.png",
  },
];
>>>>>>> 4bbf9475fc6b311eea6b65d3acc63f5b629a6c51
const colaList = document.querySelector(".cola-list");
colaInfoArr.map((item) => paintColaList(item));
function paintColaList(item) {
  const li = document.createElement("li");
  const colaBtn = document.createElement("button");
  colaBtn.type = "button";
  colaBtn.classList.add("btn-cola");
<<<<<<< HEAD
  const soldout = document.createElement("strong");
  soldout.classList.add("soldout");
  soldout.textContent = "품절";
=======
>>>>>>> 4bbf9475fc6b311eea6b65d3acc63f5b629a6c51
  const img = document.createElement("img");
  img.src = item.img;
  const colaName = document.createElement("span");
  colaName.classList.add("cola-name");
  colaName.textContent = item.name;
  const colaPrice = document.createElement("strong");
  colaPrice.classList.add("cola-price");
  colaPrice.textContent = `${item.price}원`;
<<<<<<< HEAD
  if (item.quantity <= 0) {
    colaBtn.appendChild(soldout);
    colaBtn.disabled = true;
  }
  // if (balance >= item.quantity && item.quantity > 0) {
  //   colaBtn.classList.add("on");
  // }
  console.log(soldout);
=======
>>>>>>> 4bbf9475fc6b311eea6b65d3acc63f5b629a6c51
  colaBtn.append(img, colaName, colaPrice);
  li.appendChild(colaBtn);
  colaList.appendChild(li);
}
