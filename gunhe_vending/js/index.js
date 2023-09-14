const inputMoney = document.querySelector("#input-money");
const inputBtn = document.querySelector("#input-money + button.btn");
const balanceMoney = document.querySelector("#balance-money");
const myMoney = document.querySelector("#my-money");
inputBtn.addEventListener("click", () => {
  const value = +getInputValue(inputMoney);
  const balance = parseInt(balanceMoney.textContent.replaceAll(",", ""));
  const valueAddBalance = add(value, balance);

  balanceMoney.textContent = `${numberReplace(valueAddBalance)}원`;
  inputMoney.value = "";
  const money = parseInt(myMoney.textContent.replaceAll(",", ""));
  myMoney.textContent = `${numberReplace(money - value)}원`;
});
function getInputValue(input) {
  return input.value;
}
function add(a, b) {
  return a + b;
}
function numberReplace(number) {
  const length = (number + "").length;
  //10000
  const string = number + "";
  const arr = [];
  for (let i = length; i > 0; i -= 3) {
    arr.unshift(string.substring(i - 3, i));
  }
  return arr.join(",");
}
const colaBtn = document.querySelectorAll(".btn-cola");

function clickColaBtn(item) {
  const tagetItemTagName = item.target.tagName;
  if (tagetItemTagName === "BUTTON") {
    item.target.classList.toggle("on");
  } else {
    item.target.parentElement.classList.toggle("on");
  }
}
colaBtn.forEach((item) => {
  item.addEventListener("click", clickColaBtn);
});
