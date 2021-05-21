import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.template = '';
  }

  render(){
    let carouselInner = document.createElement('DIV');
    carouselInner.classList.add('carousel__inner');

    if(!this.elem){
      this.elem = document.createElement('DIV');
      this.elem.classList.add('carousel');
      let arrows = `
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
      `;
      this.elem.insertAdjacentHTML('afterbegin', arrows);
      this.elem.appendChild(carouselInner);
    }

    for(let { name, price, image, id } of this.slides){
      this.template += `
      <div class="carousel__slide" data-id="${id}">
        <img src="/assets/images/carousel/${image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${price.toFixed(2)}</span>
          <div class="carousel__title">${name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
      `
    }
    carouselInner.insertAdjacentHTML('beforeEnd', this.template);
    this.elem.addEventListener('click', this.carouselBtnonClick.bind(this));
    return this.elem;
  }

  carouselBtnonClick(ev){
    if(!ev.target.parentElement.classList.contains('carousel__button')) return;
      let event = new CustomEvent('product-add', {
        detail: ev.target.closest('div[data-id]').dataset.id,
        bubbles: true
      });
      this.elem.dispatchEvent(event);
   }

  carouselStart(){
      let carousel = document.querySelector('.carousel');
      let arrowRight = document.querySelector('.carousel__arrow_right');
      let arrowLeft = document.querySelector('.carousel__arrow_left');
      let carouselInner = document.querySelector('.carousel__inner');
      let slide = document.querySelectorAll('.carousel__slide');
      arrowLeft.style.display = 'none';
      let slideWidth = slide[0].offsetWidth;
      let slideCount = slideWidth * slide.length;
      let step = 0;

    carousel.addEventListener('click', event =>{
      let target = event.target.parentElement.classList;
      if(!target.contains('carousel__arrow')) return;

      if(target.contains('carousel__arrow_right')){
        arrowLeft.style.display = '';
        carouselInner.style.transform = `translateX(-${step += slideWidth}px)`;
        if(step > slideCount - slideWidth*2) arrowRight.style.display = 'none';
      }else{
        arrowRight.style.display = '';
        carouselInner.style.transform = `translateX(-${step -= slideWidth}px)`;
        if(step === 0) arrowLeft.style.display = 'none';
      }
    });
  }
}
