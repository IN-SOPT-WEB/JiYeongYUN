const $ = (selector) => document.querySelector(selector);

const dropdownBox = $(".dropdown");
const dropdownBtn = $(".week-btn");
const dropdownText = $(".week-text");

let isDropdownOpen = false;

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
