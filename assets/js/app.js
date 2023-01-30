const addPreload = (elem) => {
  elem.classList.add('preload');
};

const removePreload = (elem) => {
  elem.classList.remove('preload');
};

const startSlider = () => {
  const sliderItems = document.querySelectorAll('.slider__item');
  // console.log('sliderItems: ', sliderItems);
  const sliderList = document.querySelector('.slider__list');
  const btnPrevSlider = document.querySelector('.slider__arrow--left');
  const btnNextSlider = document.querySelector('.slider__arrow--right');

  let activeSlide = 1;
  let position = 0;

  const checkSlider = () => {
    activeSlide + 2 === sliderItems.length
      ? (btnNextSlider.style.display = 'none')
      : (btnNextSlider.style.display = '');

    activeSlide === 1
      ? (btnPrevSlider.style.display = 'none')
      : (btnPrevSlider.style.display = '');
  };

  checkSlider();

  const nextSlider = () => {
    sliderItems[activeSlide].classList.remove('slider__item_active');
    let position = -sliderItems[0].clientWidth * activeSlide;
    sliderList.style.transform = `translate(${position}px)`;
    activeSlide++;
    sliderItems[activeSlide].classList.add('slider__item_active');
    checkSlider();
  };

  const prevSlider = () => {
    sliderItems[activeSlide].classList.remove('slider__item_active');
    let position = -sliderItems[0].clientWidth * (activeSlide - 2);
    sliderList.style.transform = `translate(${position}px)`;
    activeSlide--;
    sliderItems[activeSlide].classList.add('slider__item_active');
    checkSlider();
  };

  btnPrevSlider.addEventListener('click', prevSlider);
  btnNextSlider.addEventListener('click', nextSlider);
};
const initSlider = () => {
  const slider = document.querySelector('.slider');
  const sliderContainer = document.querySelector('.slider__container');

  sliderContainer.style.display = 'none';
  addPreload(slider);
  window.addEventListener('load', () => {
    sliderContainer.style.display = '';
    removePreload(slider);
    startSlider(slider);
  });
};

window.addEventListener('DOMContentLoaded', initSlider);
