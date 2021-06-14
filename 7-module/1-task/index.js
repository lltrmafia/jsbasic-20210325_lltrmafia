import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.template = '';
  }

  render(){
    let ribbonMenuInner = document.createElement('NAV');
    ribbonMenuInner.classList.add('ribbon__inner');
    let ribbonArrowLeft = `
      <button class="ribbon__arrow ribbon__arrow_left">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    `;
    let ribbonArrowRight = `
      <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    `;

    if(!this.elem){
      this.elem = document.createElement('DIV');
      this.elem.classList.add('ribbon');
      this.elem.insertAdjacentHTML('afterbegin', ribbonArrowLeft);
      this.elem.append(ribbonMenuInner);
      this.elem.insertAdjacentHTML('beforeend', ribbonArrowRight);
      
    }

    for(let { id, name } of this.categories ){
      this.template += `
      <a href="#" class="ribbon__item" data-id="${id}">${name}</a>
      `
    }
    ribbonMenuInner.insertAdjacentHTML('beforeEnd', this.template);
    this.elem.addEventListener('click', this.ribbonOnClick.bind(this));
    return this.elem;
  }

  ribbonOnClick(ev){
    let a = document.querySelectorAll('.ribbon__item');
    if(!ev.target.classList.contains('ribbon__item')) return;
    ev.preventDefault();
    for(let i = 0; i < a.length; i++){
      a[i].classList.remove('ribbon__item_active');
    }
    if(ev.target) ev.target.classList.add('ribbon__item_active');
    let event = new CustomEvent('ribbon-select', {
      detail: ev.target.dataset.id,
      bubbles: true,
    });
    this.elem.dispatchEvent(event);
  }

  ribbonCarouselStart(){
    let ribbon = document.querySelector('.ribbon');
    let ribbonInner = document.querySelector('.ribbon__inner');
    let ribbionArrowLeft = document.querySelector('.ribbon__arrow_left');
    let ribbionArrowRight = document.querySelector('.ribbon__arrow_right');

    ribbon.addEventListener('click', event =>{
      let scrollLeft = ribbonInner.scrollLeft;
      let target = event.target.classList;
      let scrollWidth = ribbonInner.scrollWidth;
      let clientWidth = ribbonInner.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;

    if(!target.contains('ribbon__arrow')) return;

    if(target.contains('ribbon__arrow_right')){
      ribbionArrowLeft.classList.add('ribbon__arrow_visible');
      ribbonInner.scrollBy(350, 0);
      if(scrollRight < 350) ribbionArrowRight.classList.remove('ribbon__arrow_visible');
    }else{
      ribbionArrowRight.classList.add('ribbon__arrow_visible');
      ribbonInner.scrollBy(-350, 0);
      if(scrollLeft < 350) ribbionArrowLeft.classList.remove('ribbon__arrow_visible');
    }
    });
  }
}
