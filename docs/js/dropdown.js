let headerFormDropdown = document.querySelectorAll(".header__form-dropdown");

headerFormDropdown.forEach((item) => {
  item.addEventListener("click", () => {
    const headerFormBlock = document.querySelector(
      ".header__form-dropdown-block"
    );
    headerFormBlock.classList.toggle("active");
    headerFormBlock
      .querySelector(".header__form-dropdown-items")
      .classList.toggle("active");
  });
});

const formDropdownTransport = document.getElementById(
  "form-dropdown-transport"
);
const formDropdownItemsAll = document.querySelectorAll(
  ".header__form-dropdown-items .header__form-dropdown"
);

formDropdownItemsAll.forEach((item) => {
  item.addEventListener("click", (e) => {
    return (formDropdownTransport.value = e.target.value);
  });
});

const reviewsNavDropdown = document.querySelector(".reviews__nav-dropdown");
const reviewsNavBtnsDropdown = document.querySelector(
  ".reviews__nav-btns-dropdown"
);

reviewsNavDropdown.addEventListener("click", function (e) {
  reviewsNavBtnsDropdown.classList.toggle("active");
});

const reviewsNavDropdownItem = document.querySelectorAll(
  ".reviews__nav-dropdown-item"
);

reviewsNavDropdownItem.forEach(function (item) {
  item.addEventListener("click", function (e) {
    reviewsNavDropdown.innerHTML = this.innerHTML;
    reviewsNavBtnsDropdown.classList.remove("active");
  });
});
