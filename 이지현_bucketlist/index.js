export const bucketForm = document.querySelector("#bucketForm");
const bucketLabel = bucketForm.querySelector("label");
const bucketInput = bucketForm.querySelector("input");
const bucketButton = bucketForm.querySelector("#add");
const resetButton = bucketForm.querySelector("#reset");

resetButton.addEventListener("click", removeAll);

export const bucketList = document.querySelector("#bucketlist");
export let buckets = [];
let inBucket = {};
const altText = "내용을 입력해주세요";
let newID = Date.now();

const Bucket_KEY = "bucket";
//하나의 키로 저장해야 한번에 불러올 때 사용할 수 있다.
//처음에 랜덤한 키로 개별저장했는데, 랜덤한 키는 한번에 불러오기 힘들다.
const savedBuckets = localStorage.getItem(Bucket_KEY);
if (savedBuckets) {
  const parsedBuckets = JSON.parse(savedBuckets);
  buckets = parsedBuckets;
  parsedBuckets.forEach(paintBucket);
}
bucketForm.addEventListener("submit", handleBucketSubmit);

function handleBucketSubmit(e) {
  e.preventDefault();
  let userBucket = bucketInput.value;
  if (bucketInput.value !== "" && bucketInput.value !== altText) {
    inBucket = { id: ++newID, value: userBucket };
    bucketInput.value = "";
    buckets.push(inBucket);
    paintBucket(inBucket);
    saveBucket();
    bucketInput.addEventListener("focus", upLabel);
    bucketInput.addEventListener("focusout", downLabel);
  } else {
    bucketInput.value = altText;
    upLabel();
  }
}
function saveBucket() {
  localStorage.setItem(Bucket_KEY, JSON.stringify(buckets));
}

bucketInput.addEventListener("focus", upLabel);
bucketInput.addEventListener("focusout", downLabel);

function upLabel() {
  bucketLabel.classList.add("bucketLabel");
}
function downLabel() {
  bucketLabel.classList.remove("bucketLabel");
}
function paintBucket(list) {
  const bucket = document.createElement("li");
  const delBtn = document.createElement("button");
  const content = document.createElement("span");
  delBtn.addEventListener("click", deleteBucket);
  bucket.id = newID;
  bucket.appendChild(content);
  bucket.appendChild(delBtn);
  bucketList.appendChild(bucket);
  delBtn.innerText = "X";
  content.innerText = list.value;
  bucket.addEventListener("click", function () {
    content.style.textDecorationLine =
      content.style.textDecorationLine === "none" ? "line-through" : "none";
  });
}

function deleteBucket(e) {
  const target = e.target.parentElement;
  const targetId = target.id;
  target.remove();
  buckets = buckets.filter((inBucket) => inBucket.id !== parseInt(targetId));
  saveBucket();
}

function removeAll() {
  while (bucketList.firstChild) {
    bucketList.removeChild(bucketList.firstChild);
  }
  localStorage.clear();
  downLabel();
}
