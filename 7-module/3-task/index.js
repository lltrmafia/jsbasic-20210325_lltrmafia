import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
<<<<<<< HEAD
  constructor(config){
    this.config = config;
    this.template = '';
    this.step = '';
  }
  render(){
    if(!this.elem){
      this.elem = document.createElement('DIV');
      this.elem.classList.add('slider');
    }
    let sliderSteps = document.createElement('DIV');
    sliderSteps.classList.add('slider__steps');
    for(let i=0; i < this.config.steps; i++){
      let span = document.createElement('SPAN');
      sliderSteps.appendChild(span);
    }
    let event = new MouseEvent('click', {bubbles: true});
    this.elem.dispatchEvent(event);
    this.template += `
      <!--Ползунок слайдера с активным значением-->
      <div class="slider__thumb" style="left: 50%;"><span class="slider__value">3</span></div>
      <!--Заполненная часть слайдера-->
      <div class="slider__progress" style="width: 50%;"></div>
    `
    this.elem.insertAdjacentHTML('afterbegin', this.template);
    this.elem.appendChild(sliderSteps);
   
      this.elem.addEventListener('click', event =>{
      let sp = sliderSteps.querySelectorAll('span');
      let spanBound;
      let arr = [];
      for(let i=0; i < this.config.steps; i++){
        spanBound = sp[i].getBoundingClientRect().x - event.clientX;
        spanBound = Math.floor(spanBound);
        spanBound = Math.abs(spanBound);
        arr.push(spanBound);
      }
        let min = Math.min.apply(null, arr);
        let indexes = [];
        arr.forEach(function(item, idx, arr) {
          if (item === min) {
              indexes.push(idx);
          }
        });
        this.step = parseInt(indexes.join());
        this.sliderThumb = document.querySelector('.slider__thumb');
        let sliderProgress = document.querySelector('.slider__progress');
        let schet = this.elem.offsetWidth / (sp.length - 1) * 100;
        schet / this.elem.offsetWidth;
        sliderProgress.style.width = `${this.step * schet / this.elem.offsetWidth}%`;
        this.sliderThumb.style.left = `${this.step * schet / this.elem.offsetWidth}%`;
        this.sliderThumb.innerHTML = `<span class="slider__value">${this.step + 1}</span>`;
        for(let i = 0; i < sp.length; i++){
          sp[i].classList.remove('slider__step-active');
        }
        sp[this.step].classList.add('slider__step-active');


        let sliderValueSteps = new CustomEvent('slider-change', {bubbles:true, detail: this.step});
        this.elem.dispatchEvent(sliderValueSteps);
    });
    return this.elem;
=======
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.segments = steps - 1;
    this.render();

    this.addEventListeners();

    this.setValue(value);
>>>>>>> 8d9fdd72337a02fbea6e9059c8bbd86d1d030de1
  }

  render() {
    this.elem = createElement(`
      <div class="slider">
        <div class="slider__thumb">
          <span class="slider__value"></span>
        </div>
        <div class="slider__progress"></div>
        <div class="slider__steps">
          ${'<span></span>'.repeat(this.steps)}
        </div>
      </div>
    `);
  }

  setValue(value) {
    this.value = value;

    let valuePercents = (value / this.segments) * 100;

    this.sub('thumb').style.left = `${valuePercents}%`;
    this.sub('progress').style.width = `${valuePercents}%`;

    this.sub('value').innerHTML = value;

    if (this.sub('step-active')) {
      this.sub('step-active').classList.remove('slider__step-active');
    }

    this.sub('steps').children[this.value].classList.add('slider__step-active');
  }

  addEventListeners() {
    this.elem.onclick = this.onClick;
  }

  onClick = event => {
    let newLeft = (event.clientX - this.elem.getBoundingClientRect().left) / this.elem.offsetWidth;

    this.setValue(Math.round(this.segments * newLeft));

    this.elem.dispatchEvent(
      new CustomEvent('slider-change', {
        detail: this.value,
        bubbles: true
      })
    );
  }

  sub(ref) {
    return this.elem.querySelector(`.slider__${ref}`);
  }

}
