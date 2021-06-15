import createElement from '../../assets/lib/create-element.js';

export default class CartIcon {
  constructor() {
    this.render();

    this.addEventListeners();
  }

  render() {
    this.elem = createElement('<div class="cart-icon"></div>');
  }

  update(cart) {
    if (!cart.isEmpty()) {
      this.elem.classList.add('cart-icon_visible');

      this.elem.innerHTML = `
        <div class="cart-icon__inner">
          <span class="cart-icon__count">${cart.getTotalCount()}</span>
          <span class="cart-icon__price">€${cart.getTotalPrice().toFixed(2)}</span>
        </div>`;

      this.updatePosition();

      this.elem.classList.add('shake');
      this.elem.addEventListener('transitionend', () => {
        this.elem.classList.remove('shake');
      }, {once: true});

    } else {
      this.elem.classList.remove('cart-icon_visible');
    }
  }

  addEventListeners() {
    document.addEventListener('scroll', () => this.updatePosition());
    window.addEventListener('resize', () => this.updatePosition());
  }

  updatePosition() {
    let box = document.querySelector('.container');
    let iconLeft = (document.documentElement.clientWidth - box.getBoundingClientRect().left);
    if(document.documentElement.offsetWidth > 768){
      // ваш код ...
      if(pageYOffset >= 50){
        this.elem.style.position = 'fixed';
        this.elem.style.zIndex = '1000';
        document.documentElement.clientWidth > iconLeft ? this.elem.style.left = `${iconLeft + 20}px` : 
        this.elem.style.left = `${iconLeft - (this.elem.offsetWidth + 10)}px`;  
      }else{
        this.elem.style.position = '';
        this.elem.style.left = '';
        this.elem.style.zIndex = '';
      }
    }
  }
}
