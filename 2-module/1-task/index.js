function sumSalary(salaries) {
  // ваш код...
  let res = 0;
  for (let key in salaries) {
    if (typeof salaries[key] === 'number' && !isNaN(salaries[key]) && isFinite(salaries[key])) {
      res += salaries[key];
    }
    else {
      continue;
    }
  }
  return res;
}
