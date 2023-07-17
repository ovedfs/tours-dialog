const toursArray = [
  {
    id: 1,
    title: 'MOUNTAINS TRAVEL',
    img: 'img01.jpg',
    info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, porro ab. Nostrum, tempora! Neque quos sint at pariatur eveniet consequatur.',
    price: 600
  },
  {
    id: 2,
    title: 'SURF TRAVEL',
    img: 'img02.jpg',
    info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, porro ab. Nostrum, tempora! Neque quos sint at pariatur eveniet consequatur.',
    price: 800
  },
  {
    id: 3,
    title: 'OCEAN TRAVEL',
    img: 'img03.jpg',
    info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, porro ab. Nostrum, tempora! Neque quos sint at pariatur eveniet consequatur.',
    price: 700
  },
  {
    id: 4,
    title: 'SUMMER TRAVE',
    img: 'img04.jpg',
    info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, porro ab. Nostrum, tempora! Neque quos sint at pariatur eveniet consequatur.',
    price: 700
  },
  {
    id: 5,
    title: 'PHOTO TOUR',
    img: 'img05.jpg',
    info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, porro ab. Nostrum, tempora! Neque quos sint at pariatur eveniet consequatur.',
    price: 900
  },
  {
    id: 6,
    title: 'ISLANDS',
    img: 'img06.jpg',
    info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, porro ab. Nostrum, tempora! Neque quos sint at pariatur eveniet consequatur.',
    price: 700
  }
];

const $tours = document.querySelector('.tours');
const $dialog = document.getElementById('dialog');
const $dialogContent = document.getElementById('dialog-content');

toursArray.forEach(tour => {
  $tours.innerHTML += `
  <article class="tour-card">
    <img class="tour-card__img" src="./images/${tour.img}" alt="">
    <h3 class="tour-card__title">
      <span>${tour.title}</span>
      <span>$ ${tour.price}</span>
    </h3>
    <p class="tour-card__info">${tour.info}</p>
    <button onClick="showCard(${tour.id})" class="tour-card__btn">Cook now</button>
  </article>
  `;
})

function showCard(id) {
  const tour = toursArray.find(item => item.id == id);

  $dialogContent.innerHTML = `
    <div class="dialog-card">
      <img src="./images/${tour.img}" alt="" />
      <h3>${tour.title}</h3>
      <p>${tour.info}</p>
    </div>
  `;

  $dialog.showModal();
  console.log(tour, id);
}