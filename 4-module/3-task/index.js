function highlight(table) {
  // ваш код...

  let tr = table.querySelectorAll('tbody tr');

  for (let i = 0; i < tr.length; i++) { 
    let sum = tr[0].cells.length - 1;
    let tr2 = tr[i];
    let td2 = tr2.cells[sum].parentElement;
    let tdVal = tr2.cells[sum].dataset.available;

    if (tdVal) {
      tdVal === 'true' ? td2.classList.add('available') : td2.classList.add('unavailable');
    } else {
      td2.setAttribute('hidden', '');
    }

    tr2.cells[sum - 1].innerHTML === 'm' ? tr2.cells[sum - 1].parentElement.classList.add('male') :
      tr2.cells[sum - 1].parentElement.classList.add('female');

    if (tr2.cells[sum - 2].innerHTML < 18) {
      tr2.cells[sum - 2].parentElement.style.textDecoration = 'line-through';
    }
  }

}
