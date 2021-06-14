import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }){
    this.step = steps;
    this.segments = this.step - 1;
    this.render();
  }

  render(){
    this.elem = createElement(`
    <div class="slider">
      <div class="slider__thumb">
        <span class="slider__value">2</span>
      </div>
      <div class="slider__progress"></div>
      <div class="slider__steps">
        ${'<span></span>'.repeat(this.step)}
      </div>
    </div>
    `);
    this.sub('thumb').style.left = `25%`;
    this.sub('progress').style.width = `25%`;
    this.sub('steps').children[1].classList.add('slider__step-active');
    this.elem.addEventListener('pointerdown', this.DownEv);
    this.elem.addEventListener('click', this.onClick);
    this.sub('thumb').ondragstart = () => false;
    return this.elem;
  }

  onClick = event =>{
    event.preventDefault();
    let sp = this.sub('steps').querySelectorAll('span');
    let spanBound;
    let arr = [];
    for(let i=0; i < this.step; i++){
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
      this.steps = parseInt(indexes.join());
      this.value = this.steps;
      let schet = this.elem.offsetWidth / (sp.length - 1) * 100;
      this.setValue(this.steps * schet);

      this.elem.dispatchEvent(
        new CustomEvent('slider-change', {
          detail: this.value,
          bubbles: true
        })
      );
      console.log(this.value);
  }

  setValue(value){
    
    let valuePercents = value / this.elem.offsetWidth;
    this.sub('thumb').style.left = `${valuePercents}%`;
    this.sub('progress').style.width = `${valuePercents}%`;
    this.sub('value').innerHTML = this.steps + 1;
    
    if(this.sub('step-active')) this.sub('step-active').classList.remove('slider__step-active');
    this.sub('steps').children[this.steps].classList.add('slider__step-active');
  }

  DownEv = () =>{
    
    this.elem.classList.add('slider_dragging');
    document.body.addEventListener('pointermove', this.moveEv);
    document.body.addEventListener('pointerup', this.PointerUp);
    onmousedown="return false";
   
  }

  moveEv = event =>{
      event.preventDefault();
      let left = event.clientX - this.elem.getBoundingClientRect().left;
      let leftRelative = left / this.elem.offsetWidth;
      if (leftRelative < 0) leftRelative = 0;
      if (leftRelative > 1) leftRelative = 1;
      let leftPercents = leftRelative * 100;
      this.sub('thumb').style.left = `${leftPercents}%`;
      this.sub('progress').style.width = `${leftPercents}%`;
      let approximateValue = leftRelative * this.segments;
      this.value = Math.round(approximateValue);
      this.sub('value').innerHTML = this.value + 1;

      if(this.sub('step-active')) this.sub('step-active').classList.remove('slider__step-active');
      this.sub('steps').children[this.value].classList.add('slider__step-active');
      
  }

  PointerUp = () =>{
    this.elem.classList.remove('slider_dragging');
    document.body.removeEventListener('pointermove', this.moveEv);
    document.body.removeEventListener('pointerup', this.PointerUp);

    this.elem.dispatchEvent(
      new CustomEvent('slider-change', {
        detail: this.value,
        bubbles: true
      })
    );
    //console.log(this.value);
}

  sub(ref) {
    return this.elem.querySelector(`.slider__${ref}`);
  }
  
}

