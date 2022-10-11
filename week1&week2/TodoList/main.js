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

const todaySubmitBtn = $(".section-left__add-btn");
const todayList = $(".section-left__input-container");
const todayInput = $(".section-left__add-input");

const tommorrowSubmitBtn = $(".section-right__add-btn");
const tommorrowList = $(".section-right__input-container");
const tommorrowInput = $(".section-right__add-input");

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

function addTodoList(listBox, inputValue) {
  if (!inputValue.value) return;
  const wrapper = document.createElement("li");
  const list = document.createElement("div");
  const addBtn = document.createElement("button");

  list.innerText = inputValue.value;
  inputValue.value = "";

  listBox.appendChild(wrapper);
  wrapper.appendChild(list);
  wrapper.appendChild(addBtn);

  setListStyle(wrapper, list, addBtn);
  deletTodo(addBtn, listBox, wrapper);
}

function deletTodo(addBtn, listBox, wrapper) {
  addBtn.addEventListener("click", (e) => {
    listBox.removeChild(wrapper);
  });
}

function setListStyle(wrapper, list, btn) {
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

todaySubmitBtn.addEventListener("click", () => {
  addTodoList(todayList, todayInput);
  console.log(todayInput);
});
tommorrowSubmitBtn.addEventListener("click", () => {
  addTodoList(tommorrowList, tommorrowInput);
});
