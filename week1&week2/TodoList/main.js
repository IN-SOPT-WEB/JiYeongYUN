const $ = (selector) => document.querySelector(selector);

const state = {
  today: "today",
  tommorrow: "tommorrow",
  all: "all",
};
let currentState = state.all;
const todayBtn = $(".nav__today-btn");
const tommorrowBtn = $(".nav__tommorrow-btn");
const allBtn = $(".nav__all-btn");
const todaySection = $(".section-left");
const tommorrowSection = $(".section-right");

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
  if (currentState === "tommorrow") {
    changeBothClassList(todaySection, tommorrowSection);
  } else if (currentState === "all") {
    changeSingeClassList(todaySection, tommorrowSection);
  }
  currentState = state.today;
});

tommorrowBtn.addEventListener("click", (e) => {
  if (currentState === "today") {
    changeBothClassList(tommorrowSection, todaySection);
  } else if (currentState === "all") {
    changeSingeClassList(tommorrowSection, todaySection);
  }
  currentState = state.tommorrow;
});

allBtn.addEventListener("click", (e) => {
  if (currentState === "today") {
    todaySection.classList.remove("all");
    tommorrowSection.classList.remove("hidden");
  } else if (currentState === "tommorrow") {
    todaySection.classList.remove("hidden");
    tommorrowSection.classList.remove("all");
  }
});
