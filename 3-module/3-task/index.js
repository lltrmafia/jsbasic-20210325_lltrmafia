function camelize(str) {
  // ваш код...
  let spl = str.split('-');
  let res = [];

  for (let i = 0; i < spl.length; i++) {

    spl[0].length === 0 ? res.push(spl[i].slice(0, 1).toUpperCase() + spl[i].slice(1)) :
      res.push(spl[i].slice(0, 1).toUpperCase() + spl[i].slice(1));
    res[0] = spl[0];

  }
  return res.join('');
}
