import createElement from '../../assets/lib/create-element.js';
import products from './products.js';
//import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.result = [];
    this.template = '';
    this.filters = {};
    this.render();
  }

  render(){
    if(!this.elem){
      this.elem = document.createElement('DIV');
      this.elem.classList.add('products-grid');
      this.inner = document.createElement('DIV');
      this.inner.classList.add('products-grid__inner');
      this.productsCount();
      this.inner.insertAdjacentHTML('beforeEnd', this.template);
      this.elem.append(this.inner);
      
    }
  }

  updateFilter = (filter) => {
    this.filters = filter;
    let card = document.querySelectorAll('.card');
    this.result =  this.products.filter(data => this.filters['noNuts'] ? data.nuts === true : data);
    
    this.inner.innerHTML = this.result;
    console.log(this.result);
    //this.elem.append(this.result);

  }

  productsCount = () => {
    for(let {image, price, name} of this.products){
      this.template += `
      <div class = "card">
        <div class="card__top">
          <img src="/assets/images/products/${image}" class="card__image" alt="product">
          <span class="card__price">€${price.toFixed(2)}</span>
        </div>
        <div class="card__body">
          <div class="card__title">${name}</div>
          <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
      `;
      
    }
  }

  



}
