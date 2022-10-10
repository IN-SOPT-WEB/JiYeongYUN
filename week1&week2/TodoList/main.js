const $ = (selector) => document.querySelector(selector);

const NAV_STATE = {
  today: "today",
  tommorrow: "tommorrow",
  all: "all",
};

let currentNavState = NAV_STATE.all;
const todayBtn = $(".nav__today-btn");
const tommorrowBtn = $(".nav__tommorrow-btn");
const allBtn = $(".nav__all-btn");
const todaySection = $(".section-left");
const tommorrowSection = $(".section-right");

const submitBtn = $(".section-left__add-btn");
const inputBox = $(".section-left__input-container");
const inputTodo = $(".section-left__add-input");

function changeBothClassList(selected, unSelected) {
  selected.classList.remove("hidden");
  selected.classList.add("all");
  unSelected.classList.remove("all");
  unSelected.classList.add("hidden");
}

function changeSingeClassList(selected, unSelected) {
  selected.classList.add("all");
  unSelected.classList.add("hidden");
}

todayBtn.addEventListener("click", (e) => {
  if (currentNavState === NAV_STATE.tommorrow) {
    changeBothClassList(todaySection, tommorrowSection);
  } else if (currentNavState === NAV_STATE.all) {
    changeSingeClassList(todaySection, tommorrowSection);
  }
  currentNavState = NAV_STATE.today;
});

tommorrowBtn.addEventListener("click", (e) => {
  if (currentNavState === NAV_STATE.today) {
    changeBothClassList(tommorrowSection, todaySection);
  } else if (currentNavState === NAV_STATE.all) {
    changeSingeClassList(tommorrowSection, todaySection);
  }
  currentNavState = NAV_STATE.tommorrow;
});

allBtn.addEventListener("click", (e) => {
  if (currentNavState === NAV_STATE.today) {
    todaySection.classList.remove("all");
    tommorrowSection.classList.remove("hidden");
  } else if (currentNavState === NAV_STATE.tommorrow) {
    todaySection.classList.remove("hidden");
    tommorrowSection.classList.remove("all");
  }
  currentNavState = NAV_STATE.all;
});

function addTodoList() {
  const wrapper = document.createElement("div");
  const list = document.createElement("li");
  const addBtn = document.createElement("button");
  const btnImg = document.createElement("img");

  list.innerText = inputTodo.value;
  inputTodo.value = "";

  inputBox.appendChild(wrapper);
  wrapper.appendChild(list);
  wrapper.appendChild(addBtn);
  // addBtn.appendChild(btnImg);

  setListStyle(wrapper, list, addBtn, btnImg);
}

function setListStyle(wrapper, list, btn, img) {
  wrapper.style.display = "flex";
  wrapper.style.alignItems = "center";
  wrapper.style.width = "100%";

  list.style.height = "4rem";
  list.style.width = "100%";
  list.style.borderBottom = "0.1rem solid #a2a2a2";
  list.style.fontSize = "2rem";
  list.style.padding = "0 1rem";
  list.style.display = "flex";
  list.style.alignItems = "center";

  btn.style.height = "20%";
  btn.style.border = "none";
  btn.style.backgroundColor = "transparent";
  btn.style.cursor = "pointer";
  btn.style.backgroundImage = "url(./asset/deleteIcon.svg)";
  btn.style.backgroundSize = "contain";
  btn.style.backgroundRepeat = "no-repeat";
}

submitBtn.addEventListener("click", addTodoList);
