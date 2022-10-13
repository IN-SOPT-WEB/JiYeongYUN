const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const dropdownBox = $(".dropdown");
const dropdownBtn = $(".week-btn");
const dropdownText = $(".week-text");

const body = $("body");
const root = $(".root");
const cardBox = $(".contents-container");
const card = $$(".section__content-card");

let isDropdownOpen = false;

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
  element.style.color = "navy";
  element.style.fontWeight = "700";
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
}

card.forEach((item) => {
  item.addEventListener("click", () => {
    createModal(item);
  });
});
