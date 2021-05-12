function makeDiagonalRed(table) {
  // ваш код...
  let tr = table.rows;
  let td = table.rows[0].cells.length;
  let res;
  for (let i = 0; i < td; i++){
    let tr2 = tr[i];
    res = tr2.cells[i].style.backgroundColor = 'red';

  }
 return res;
}
