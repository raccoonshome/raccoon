const loginBtn = document.querySelector(".login");

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  importPage("modal");
});

async function fetchHtmlAsText(url) {
  return await (await fetch(url)).text();
}

async function importPage(target) {
  document.querySelector("#" + target).innerHTML = await fetchHtmlAsText(
    target + ".html"
  );
}
