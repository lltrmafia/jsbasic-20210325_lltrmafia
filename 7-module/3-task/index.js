export default class StepSlider {
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
  }
}
