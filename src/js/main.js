const inputQuantity = document.getElementById('input-quantity'),
      btnPlus = document.getElementById('btn-quantity-plus'),
      btnMinus = document.getElementById('btn-quantity-minus');

btnPlus.addEventListener('click', () => {
    if (inputQuantity.value == '') {
        return inputQuantity.value = 1;
    }

    if (inputQuantity.value < 12) {
        return inputQuantity.value = parseInt(inputQuantity.value) + 1;
    }
});

btnMinus.addEventListener('click', () => {
    if (inputQuantity.value == 1) {
        return inputQuantity.value = '';
    }

    if (inputQuantity.value > 1) {
        return inputQuantity.value = parseInt(inputQuantity.value) - 1;
    }
});

inputQuantity.addEventListener('change', function(e) {
    if (inputQuantity.value > 12) {
        alert('Max quantity 12 people!');
    }
})

const bannerVideoBtn = document.querySelector('[banner-video-remove]');
const bannerVideoItem = document.querySelector('.banner-video__item');
bannerVideoBtn.addEventListener('click', function(e) {
    bannerVideoItem.classList.remove('active');
})