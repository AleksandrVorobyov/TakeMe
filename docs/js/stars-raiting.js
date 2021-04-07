let cardsCarouselItem = document.querySelectorAll(".rating");
cardsCarouselItem.forEach(function (item, index) {

  let input = item.querySelectorAll("input");
  input.forEach((item) => {
    item.id = item.id + index + 'card';
    item.name = item.name + index + 'card';

    if (item.value == item.closest('.rating').getAttribute('data-checked')) {
      item.checked = true;
    }
  });

  let label = item.querySelectorAll("label");
  label.forEach((item) => {
    item.htmlFor = item.htmlFor + index + 'card';
  });
});