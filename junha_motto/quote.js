sayings = [
  { "quote": "사랑이란 서로 마주보는 것이 아니라 둘이서 똑같은 방향을 내다보는 것이라고 인생은 우리에게 가르쳐 주었다.", "person": "생택쥐베리" },
  { "quote": "반성하지 않는 삶은 살 가치가 없다.", "person": "소크라테스" },
  { "quote": "경영대학원은 단순한 행동보다 어렵고 복잡한 행동을 가르치지만, 단순한 행동이 보다 효과적이다.", "person": "워렌 버핏" },
  { "quote": "만약 누군가를 당신의 편으로 만들고 싶다면, 먼저 당신이 그의 진정한 친구임을 확신시켜라.", "person": "에이브러햄 링컨" },
  { "quote": "친구를 얻는 방법은 친구에게 부탁을 들어달라고 하는 것이 아니라 내가 부탁을 들어주는 것이다.", "person": "투키디데스" },
  { "quote": "내가 책을 읽을 때 눈으로만 읽는 것 같지만 가끔씩 나에게 의미가 있는 대목, 어쩌면 한 구절만이라도 우연히 발견하면 책은 나의 일부가 된다.", "person": "윌리엄 서머셋 모옴" },
  { "quote": "순간들을 소중히 여기다 보면, 긴 세월은 저절로 흘러간다.", "person": "마리아 에지워스" },
  { "quote": "지금 적극적으로 실행되는 괜찮은 계획이 다음 주의 완벽한 계획보다 낫다.", "person": "조지 S. 패튼" },
  { "quote": "함께 있을 때 웃음이 나오지 않는 사람과는 결코 진정한 사랑에 빠질 수 없다.", "person": "아그네스 리플라이어" },
  { "quote": "어디를 가든지 마음을 다해 가라.", "person": "공자" },
];

// 명언의 개수만큼 랜덤한 숫자 배열 생성
let randomNum = [];
while (randomNum.length < 10) {
  let num = parseInt(Math.random() * 10 + 1);
  if (!randomNum.includes(num)) {
    randomNum.push(num);
  }
}
console.log(randomNum);

let newSayings = [];
// 새로운 배열에 랜덤한 숫자 배열의 순서대로 명언 배열 추가
for (let i = 0; i < randomNum.length; i++) {
  newSayings.push(sayings[randomNum[i] - 1]);
  console.log(newSayings);

  let quotes = document.querySelector(".quotes")
  // 명언과 사람을 담을 div 태그 생성
  let onequote = document.createElement("div");
  // div 태그 .quotes 클래스에 자식요소로 추가
  quotes.appendChild(onequote);

  // 명언 p 태그 생성
  let sayingTag = document.createElement("p");
  sayingTag.classList.add('saying')
  // 사람 p 태그 생성
  let personTag = document.createElement("p");
  personTag.classList.add('person')

  // div 태그에 명언, 사람 태그 추가
  onequote.appendChild(sayingTag);
  onequote.appendChild(personTag);

  // 명언, 사람 태그에 내용 추가
  sayingTag.innerText = newSayings[i]["quote"];
  personTag.innerText = newSayings[i]["person"];
}

