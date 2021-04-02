let cardsCarouselItem = document.querySelectorAll(".cards-carousel-item");
cardsCarouselItem.forEach((item, index) => {

  let input = item.querySelectorAll("input");
  input.forEach((item) => {
    item.id = item.id + index;
    item.name = item.name + index;
  });

  let label = item.querySelectorAll("label");
  label.forEach((item) => {
    item.htmlFor = item.htmlFor + index;
  });
});
