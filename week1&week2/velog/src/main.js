const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const dropdownBox = $(".dropdown");
const dropdownBtn = $(".week-btn");
const dropdownText = $(".week-text");
let isDropdownOpen = false;
let currentDate;

const body = $("body");
const root = $(".root");
const cardBox = $(".contents-container");
const card = $$(".section__content-card");

const leftBtn = $(".left-btn");
const rightBtn = $(".right-btn");
const slideBox = $(".slider-wrapper");

//DropDown
function handleDropdown() {
  if (isDropdownOpen === false) {
    dropdownBox.classList.remove("hidden");
  } else {
    dropdownBox.classList.add("hidden");
  }
  isDropdownOpen = !isDropdownOpen;
}

function changeView(e) {
  const currentText = e.target.innerText;

  dropdownText.innerText = currentText;

  changeDropdownStyle(e.target);
  handleDropdown();
}

function changeDropdownStyle(element) {
  if (currentDate != undefined) {
    currentDate.classList.remove("selected");
  }
  currentDate = element;
  element.classList.add("selected");
}

dropdownBtn.addEventListener("click", handleDropdown);
dropdownBox.addEventListener("click", (e) => {
  changeView(e);
});

//Modal
function createModal(selectedContent) {
  const modalBg = document.createElement("div");
  const modal = selectedContent.cloneNode(true);

  root.appendChild(modalBg);
  modalBg.appendChild(modal);

  modal.classList.add("modal");
  modalBg.classList.add("modal-bg");

  body.style.overflow = "hidden";

  createCloseBtn(modalBg);
}

function createCloseBtn(parrentElement) {
  const closeBtn = document.createElement("button");
  parrentElement.appendChild(closeBtn);
  closeBtn.classList.add("closeBtn");

  closeModal(closeBtn);
}

function closeModal(element) {
  const modalBox = $(".modal-bg");
  element.addEventListener("click", () => {
    modalBox.remove();
  });

  body.style.overflow = null;
}

card.forEach((item) => {
  item.addEventListener("click", () => {
    createModal(item);
  });
});

//Slider
function moveSlider(start, end) {
  slideBox.animate(
    {
      transform: [`translateX(${start}rem)`, `translateX(${end}rem)`],
    },
    {
      duration: 500,
      fill: "forwards",
    }
  );
}

rightBtn.addEventListener("click", () => {
  moveSlider(30, 0);
});

leftBtn.addEventListener("click", () => {
  moveSlider(0, 30);
});
