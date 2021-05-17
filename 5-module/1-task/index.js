function hideSelf() {
  // ваш код...
  let btn = document.querySelector('.hide-self-button');
  btn.onclick = function () {
    this.setAttribute('hidden', '');
  }
}

