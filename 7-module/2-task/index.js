import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.modalInner = document.createElement('DIV');
    this.modalInner.classList.add('modal__inner');

  }

open(){
  if(!this.elem){
    this.elem = document.createElement('DIV');
    this.elem.classList.add('modal');
    let modalOverlay = document.createElement('DIV');
    modalOverlay.classList.add('modal__overlay');
    this.elem.append(modalOverlay);
    this.elem.append(this.modalInner);
  }
    document.body.classList.add('is-modal-open');
    let clickEvent = new MouseEvent('click', {bubbles: true});
    let eventKeyDown = new KeyboardEvent('keydown', {
      code: '',
      bubbles: true,
    });
    this.elem.dispatchEvent(clickEvent);
    this.elem.dispatchEvent(eventKeyDown);
    document.body.append(this.elem);
    document.addEventListener('keydown', eventKeyDown =>{
      if(eventKeyDown.code === 'Escape'){
        document.body.classList.remove('is-modal-open');
        this.elem.remove();
      }
    });
    this.elem.addEventListener('click', clickEvent =>{
      if(!clickEvent.target.parentElement.classList.contains('modal__close')) return;
        document.body.classList.remove('is-modal-open');
        this.elem.remove();
    });
    return this.elem;
}

setTitle(title){
  let modalHeader = document.createElement('DIV');
  modalHeader.classList.add('modal__header');
  let h3Title = `
  <button type="button" class="modal__close">
    <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
  </button>
  <h3 class="modal__title">
    ${title}
  </h3>
  `
  modalHeader.insertAdjacentHTML('afterbegin', h3Title);
  this.modalInner.append(modalHeader);
  return this.modalInner;
}

setBody(body){
  let modalBody = document.createElement('DIV');
  modalBody.classList.add('modal__body');
  modalBody.innerHTML = `${body}`;
  this.modalInner.append(modalBody);
  return this.modalInner;
}

close(){
  document.body.classList.remove('is-modal-open');
  this.elem.remove();
}

}


