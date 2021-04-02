const inputQuantity = document.getElementById('input-quantity'),
      btnPlus = document.getElementById('btn-quantity-plus'),
      btnMinus = document.getElementById('btn-quantity-minus');

btnPlus.addEventListener('click', () => {
    if (inputQuantity.value < 12) {
        return inputQuantity.value = parseInt(inputQuantity.value) + 1;
    }
});

btnMinus.addEventListener('click', () => {
    if (inputQuantity.value > 0) {
        return inputQuantity.value = parseInt(inputQuantity.value) - 1;
    }
});


