//input, button 선택을 합니다.
const inputMoney = document.querySelector("#input-money");
const inputBtn = document.querySelector("#input-money + button.btn");
const balanceMoney = document.querySelector("#balance-money");
const myMoney = document.querySelector("#my-money");

//입금한 금액을 확인 합니다.
//버튼을 클릭하면 인풋의 값을 가져옵니다.
inputBtn.addEventListener("click", function () {
  //입금으로 입력한 금액을 가져옵니다.
  const value = +getInputValue(inputMoney);
  const money = parseInt(myMoney.textContent.replaceAll(",", ""));

  myMoney.textContent = numberReplace(money - value) + "원";
  //입금한 금액을 잔액에 표시해줍니다.
  //1. 현재 잔액을 가져옵니다.
  const balance = parseInt(balanceMoney.textContent.replaceAll(",", ""));
  //2. 현재 잔액과 입금액을 더해줍니다.
  const valueAddBalance = add(value, balance);
  //2-1. 단위마다 , 추가해주기
  //numberReplace(valueAddBalance)
  //3. 더한 금액을 표시해줍니다.
  balanceMoney.textContent = numberReplace(valueAddBalance) + "원";
  inputMoney.value = "";
});
/*
예외처리!
소지금보다 입금액이 클 순 없다
입금액을 -로 넣거나, 0.0000021이렇게 넣거나 하는 등 예외처리 합니다.
*/
inputMoney.addEventListener("input", function (e) {
  const value = +e.target.value;
  console.log(value);
  const money = parseInt(myMoney.textContent.replaceAll(",", ""));
  if (value < 0 || value > money || (value + "").length > (money + "").length) {
    e.target.value = money;
  }
});
//input값을 가져오는 함수 : event 내부에서만 작동
function getInputValue(input) {
  return input.value;
}
//더하기 함수
/** add: 두 인자를 받아서 두 수를 더해줍니다. **/
function add(a, b) {
  return a + b;
}
//숫자 자릿수 쉼표찍어주기
function numberReplace(number) {
  const string = number + "";
  const length = string.length;
  //뒤에서 세글자마다 ,를 추가해야 한다.
  //뒤에서부터 순환하면서 3개의 글자수가 지나면 쉼표더해주기
  const stack = [];
  for (let i = length; i > 0; i -= 3) {
    stack.unshift(string.substring(i - 3, i));
  }
  return stack.join(",");
}
// let returnValue = "";
//   for (let i = length - 1; i >= 0; i--) {
//     if (i % 3 === 0 && i != length - 1) returnValue += ",";
//     returnValue += string[i];
//   }
//   return returnValue.split("").reverse().join("");
//const add = (a, b) => a + b;
//잔액을 바꿔서 표시해줍니다.
