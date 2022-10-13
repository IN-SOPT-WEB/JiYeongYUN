const ENTER = 13;

const tagBox = document.querySelector(".tag-container");
let tagSet = new Set();

function saveLocalStorageData(item) {
  localStorage.setItem("tagSet", JSON.stringify([...item]));
}

function checkSet(element, value) {
  if (tagSet.has(value)) {
    alert("다른거 써라");
    return;
  }
  tagSet.add(value);
  createTag(value);
  createNextInput();
  deletInput(element);
  saveLocalStorageData(tagSet);
}

function handleEnter(element) {
  element.addEventListener("keyup", (e) => {
    if (e.keyCode === ENTER) {
      checkSet(element, e.target.value);
    }
  });
}

function deleteTag(element) {
  element.addEventListener("click", () => element.remove());
}

function deletInput(element) {
  element.remove();
}

function createNextInput() {
  const newInput = document.createElement("input");
  tagBox.appendChild(newInput);
  handleEnter(newInput);
}

function createTag(text) {
  const tag = document.createElement("div");
  tagBox.appendChild(tag);
  tag.classList.add("tag");
  tag.innerHTML = text;

  deleteTag(tag);
}

function init() {
  if (localStorage.length !== 0) {
    getLocalStroageData();
  }
  createNextInput();
}

function getLocalStroageData() {
  const remainData = JSON.parse(localStorage.getItem("tagSet"));
  remainData.forEach((item) => {
    createTag(item);
  });
}
init();
