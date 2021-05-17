function toggleText() {
  // ваш код...
  let btn = document.querySelector('.toggle-text-button');
  let elem = document.querySelector('#text');

  btn.addEventListener('click', function () {
    elem.toggleAttribute('hidden');
  });
}
