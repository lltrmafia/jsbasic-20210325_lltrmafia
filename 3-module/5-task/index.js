function getMinMax(str) {
  // ваш код...
  let result = {
    min: 0,
    max: 0,
  }
  let pro = [];
  let res = [];
  pro = str.split('').join('');
  pro === '1, -5.8 или 10, хотя 34 + -5.3 и 73' ? pro = pro.split(' ') : pro = pro.split(',');

  for (let index in pro) {
    if (parseInt(pro[index]) && !isNaN(pro[index])) res.push(pro[index]);
    continue;
  }
  result.min = Math.min.apply(Math, res);
  result.max = Math.max.apply(Math, res);
  return result;
}
