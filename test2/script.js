let images = ['img1.png', 'img2.png', 'img3.png', 'img4.png', 'img5.png'];
const createSlider = document.querySelector('.create-slider')

function createSlide(item) {
  const slider = document.querySelector('.slider')
  const slide = document.createElement('div')

  slide.classList.add('a-slider__slide')
  slide.insertAdjacentHTML('afterbegin', `
    <img src="images/${item}" alt="item" class="${item}">
  `)

  slider.appendChild(slide)
}

createSlider.addEventListener('click', () => {
  images.forEach(el => {
    createSlide(el)
  })

  $('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
})