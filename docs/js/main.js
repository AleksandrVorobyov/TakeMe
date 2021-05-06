const inputQuantity = document.getElementById("input-quantity"),
  btnPlus = document.getElementById("btn-quantity-plus"),
  btnMinus = document.getElementById("btn-quantity-minus");

btnPlus.addEventListener("click", () => {
  if (inputQuantity.value == "") {
    return (inputQuantity.value = 1);
  }

  if (inputQuantity.value < 12) {
    return (inputQuantity.value = parseInt(inputQuantity.value) + 1);
  }
});

btnMinus.addEventListener("click", () => {
  if (inputQuantity.value == 1) {
    return (inputQuantity.value = "");
  }

  if (inputQuantity.value > 1) {
    return (inputQuantity.value = parseInt(inputQuantity.value) - 1);
  }
});

inputQuantity.addEventListener("change", function (e) {
  if (inputQuantity.value > 12) {
    alert("Max quantity 12 people!");
  }
});

// ----------------------------------------------------------------------------

const bannerVideoBtn = document.querySelector("[data-video-remove]");
const bannerVideoItem = document.querySelector(".banner-video__item");

if (bannerVideoBtn != null) {
  bannerVideoBtn.addEventListener("click", function (e) {
    bannerVideoItem.classList.remove("active");
  });
}

const metaBtn = document.querySelectorAll(".meta__btn");
metaBtn.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.target.closest(".meta").remove();
  });
});

// ----------------------------------------------------------------------------

const spacesLeft = document.querySelectorAll(".spaces-left");
spacesLeft.forEach(function (item) {
  item.addEventListener("click", function (e) {
    this.classList.toggle("active");
  });
});

// ---------------------------------------------------------------------------
const btnBurger = document.getElementById('btn-burger');
const sidebar = document.getElementById('sidebar');

btnBurger.addEventListener('click', function() {
  btnBurger.classList.toggle('active');
  sidebar.classList.toggle('active');
  document.querySelector('body').classList.toggle('block-scroll');
})