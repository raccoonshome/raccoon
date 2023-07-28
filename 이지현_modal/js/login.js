const loginBtn = document.querySelector(".login");
const modal = document.querySelector("#modal");

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();

  importPage("modal").then(function () {
    const closeBtn = document.querySelector(".modal-btn");

    closeBtn.addEventListener("click", function (event) {
      event.preventDefault();
      while (modal.firstChild) {
        modal.firstChild.remove();
      }
    });

    const idInput = document.querySelector(".login-id");
    const pwInput = document.querySelector(".login-pw");

    const message = document.createElement("p");
    message.classList.add("message");

    idInput.addEventListener("input", function () {
      idInput.after(message);
      if (idInput.value === "") {
        message.innerHTML = "아이디를 입력해 주세요";
      } else {
        message.innerHTML = "";
      }
    });
    pwInput.addEventListener("input", function () {
      pwInput.after(message);
      if (pwInput.value === "") {
        message.innerHTML = "비밀번호를 입력해 주세요";
      } else {
        message.innerHTML = "아이디 혹은 비밀번호과 일치하지 않습니다";
      }
    });
  });
  //   getModal();

  //불러온 html에 필요한 script 불러오기

  //addLanguageScript("modal");
});

const addLanguageScript = function (path) {
  const head = document.querySelector("head");
  const script = document.createElement("script");

  script.type = "module";
  script.src = "./" + path + ".js";
  head.appendChild(script);
};
//id값을 url에 넘기면 해당 div안에 html이 들어간다.
async function fetchHtmlAsText(url) {
  return await (await fetch(url)).text();
}
async function importPage(target) {
  document.querySelector("#" + target).innerHTML = await fetchHtmlAsText(
    target + ".html"
  );
}
//이벤트 내부에서 작동, data-include-path로 대상 html 파일을 지정해준다. 다만, 해당 태그가 대체가 되니 div>div[data-include-path='modal.html']처럼 div로 한 번 더 감싸줘야 한다.
async function getModal() {
  const allElements = document.getElementsByTagName("*");
  Array.prototype.forEach.call(allElements, function (el) {
    const includePath = el.dataset.includePath;
    if (includePath) {
      let xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          el.outerHTML = this.responseText;
        }
      };
      xhttp.open("GET", includePath, true);
      xhttp.send();
    }
  });
}

//위의 두 함수 모두 불러온 html에서 이벤트가 붙지 않는다!
