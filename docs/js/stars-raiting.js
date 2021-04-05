let cardsCarouselItem = document.querySelectorAll(".cards-carousel-item");
cardsCarouselItem.forEach(function (item, index) {

  let input = item.querySelectorAll("input");
  input.forEach((item) => {
    item.id = item.id + index + 'card';
    item.name = item.name + index + 'card';

    if (item.value == item.closest('.cards-carousel-item').getAttribute('data-checked')) {
      item.checked=true;
    }
  });

  let label = item.querySelectorAll("label");
  label.forEach((item) => {
    item.htmlFor = item.htmlFor + index + 'card';
  });
});

let articleCard = document.querySelectorAll(".article__card");
articleCard.forEach(function (item, index) {

  let input = item.querySelectorAll("input");
  input.forEach((item) => {
    item.id = item.id + index + 'art';
    item.name = item.name + index + 'art';

    if (item.value == item.closest('.article__card').getAttribute('data-checked')) {
      item.checked=true;
    }
  });

  let label = item.querySelectorAll("label");
  label.forEach((item) => {
    item.htmlFor = item.htmlFor + index + 'art';
  });
});
